package handler

import (
	"colabrative-text-editor/backend/pkg/dto"
	"colabrative-text-editor/backend/pkg/text"
	"github.com/google/uuid"
	"log/slog"
	"net/http"
	"os"
	"sync"
	"time"
)

type EditorsPool struct {
	mu                  sync.Mutex
	textContainer       *text.Container
	editors             map[uuid.UUID]*Editor
	Handshake           chan *Editor
	AddToPool           chan *Editor
	RemoveFromPool      chan *Editor
	BroadcastTransition chan *TransitionTransport
}

func NewEditorsPool() *EditorsPool {
	return &EditorsPool{
		textContainer:       text.NewTextContainer(),
		editors:             make(map[uuid.UUID]*Editor),
		Handshake:           make(chan *Editor),
		AddToPool:           make(chan *Editor),
		RemoveFromPool:      make(chan *Editor),
		BroadcastTransition: make(chan *TransitionTransport),
	}
}

func (p *EditorsPool) ServeWs(w http.ResponseWriter, r *http.Request) {
	corsHeader := os.Getenv("HTTP_CORS")
	if corsHeader == "" {
		w.Header().Set("Access-Control-Allow-Origin", corsHeader)
	}
	w.Header().Set("Access-Control-Allow-Methods", "GET")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

	wsConn, err := websocketUpgrader.Upgrade(w, r, nil)
	if err != nil {
		slog.Error("websocket upgrader error:", err)
		http.Error(w, "Failed to upgrade WebSocket connection", http.StatusInternalServerError)
		return
	}

	editor := NewEditor(p, wsConn)
	p.Handshake <- editor

	go func() {
		select {
		case <-time.After(5 * time.Second):
			if editor.GetName() == "" {
				slog.Info("Closing connection due to empty editor name")
				editor.Close()
			}
		}
	}()

	editor.Handle()
}

func (p *EditorsPool) Handle() {
	go p.textContainer.HandleInbound()

	for {
		select {
		case _ = <-p.Handshake:
			break
		case editor := <-p.AddToPool:
			go p.sendInitialTransition(editor)
			p.addEditor(editor)
			p.broadcastEditors()
		case editor := <-p.RemoveFromPool:
			p.deleteEditor(editor)
			p.broadcastEditors()
		case transport := <-p.BroadcastTransition:
			p.broadcastTransition(transport)
			p.updateTextContainer(transport)
		}
	}
}

func (p *EditorsPool) addEditor(editor *Editor) {
	p.mu.Lock()
	defer p.mu.Unlock()

	p.editors[editor.uuid] = editor
}

func (p *EditorsPool) deleteEditor(editor *Editor) {
	p.mu.Lock()
	defer p.mu.Unlock()

	if _, ok := p.editors[editor.uuid]; ok {
		delete(p.editors, editor.uuid)
	}
}

func (p *EditorsPool) broadcastEditors() {
	p.mu.Lock()
	defer p.mu.Unlock()

	for _, editor := range p.editors {
		err := editor.sendMessage(
			NewParticipantsMessage(p.editors),
		)
		if err != nil {
			slog.Error("broadcast participants to editor error:", "err", err, "name", editor.name)
		}
	}
}

func (p *EditorsPool) broadcastTransition(transport *TransitionTransport) {
	p.mu.Lock()
	defer p.mu.Unlock()

	wg := sync.WaitGroup{}
	for _, editor := range p.editors {
		if editor.uuid == transport.author.uuid {
			continue
		}
		wg.Add(1)
		go func() {
			err := editor.sendMessage(
				NewTransitionMessage(transport.transition),
			)
			if err != nil {
				slog.Error("broadcast transition to editor error", "err", err, "name", editor.name)
			}
			wg.Done()
		}()
	}
	wg.Wait()
}

func (p *EditorsPool) sendInitialTransition(editor *Editor) {
	initialText := p.textContainer.GetText()
	transition := text.NewTransition(0, 0, initialText)

	err := editor.sendMessage(NewTransitionMessage(&transition))
	if err != nil {
		slog.Error("send initial transition to editor error", "err", err, "name", editor.name)
	}
}

func (p *EditorsPool) updateTextContainer(transport *TransitionTransport) {
	p.textContainer.Inbound <- text.Transition{
		Start: transport.transition.Start,
		End:   transport.transition.End,
		Text:  transport.transition.Text,
	}
}

func NewParticipantsMessage(editors map[uuid.UUID]*Editor) *dto.ApiMessageTransport {
	var participants []*dto.ApiParticipant
	for _, editor := range editors {
		participants = append(participants, &dto.ApiParticipant{
			Uuid: editor.uuid.String(),
			Name: editor.name,
		})
	}

	participantsMessage := &dto.ApiMessageTransport_ApiParticipantsMessage{
		Participants: participants,
	}

	messageTransport := &dto.ApiMessageTransport{
		Transport: &dto.ApiMessageTransport_Participants{
			Participants: participantsMessage,
		},
	}

	return messageTransport
}

func NewTransitionMessage(transition *text.Transition) *dto.ApiMessageTransport {
	transitionMessage := &dto.ApiMessageTransport_ApiTextTransitionMessage{
		Start: transition.Start,
		End:   transition.End,
		Text:  transition.Text,
	}

	messageTransport := &dto.ApiMessageTransport{
		Transport: &dto.ApiMessageTransport_Transition{
			Transition: transitionMessage,
		},
	}

	return messageTransport
}
