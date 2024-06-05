package handler

import (
	"colabrative-text-editor/backend/pkg/text"
	"github.com/google/uuid"
	"log/slog"
	"net/http"
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
	for {
		select {
		case _ = <-p.Handshake:
			break
		case editor := <-p.AddToPool:
			p.addEditor(editor)
			p.broadcastEditors()
		case editor := <-p.RemoveFromPool:
			p.deleteEditor(editor)
			p.broadcastEditors()
		case transport := <-p.BroadcastTransition:
			p.broadcastTransition(transport)
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
	for _, editor := range p.editors {
		editor.sendMessage(
			NewParticipantsMessage(p.editors),
		)
	}
}

func NewParticipantsMessage(editors map[uuid.UUID]*Editor) any {
	return nil
}

func (p *EditorsPool) broadcastTransition(transport *TransitionTransport) {
	for _, editor := range p.editors {
		if editor.uuid == transport.author.uuid {
			continue
		}

		editor.sendMessage(
			NewTransitionMessage(transport.transition),
		)
	}
}

func NewTransitionMessage(transition *text.Transition) any {
	return nil
}
