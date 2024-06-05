package handler

import (
	"colabrative-text-editor/backend/pkg/dto"
	"colabrative-text-editor/backend/pkg/text"
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
	"log/slog"
	"sync"
)

type Editor struct {
	uuid uuid.UUID
	name string
	conn *websocket.Conn
	pool *EditorsPool
	mu   sync.Mutex
}

func (e *Editor) Handle() {
	defer func() {
		e.pool.RemoveFromPool <- e
		if e.conn != nil {
			_ = e.conn.Close()
		}
	}()

	for {
		_, message, err := e.conn.ReadMessage()
		if err != nil {
			if !websocket.IsUnexpectedCloseError(err) {
				slog.Error("read from WebSocket error:", err)
			}
			break
		}

		var transport dto.ApiMessageTransport

		err = proto.Unmarshal(message, &transport)
		if err != nil {
			slog.Error("message of wrong format arrived", err)
		}

		switch transport.GetTransport().(type) {
		case *dto.ApiMessageTransport_Handshake:
			slog.Info("handshake received", "name", transport.GetHandshake().Name)
			e.SetName(transport.GetHandshake().Name)
			e.pool.AddToPool <- e
		case *dto.ApiMessageTransport_Transition:
			slog.Info("text transition received from", "name", e.GetName())
			textTransition := text.NewTransition(
				transport.GetTransition().GetStart(),
				transport.GetTransition().GetEnd(),
				transport.GetTransition().GetText(),
			)
			e.pool.BroadcastTransition <- NewTransitionTransport(e, &textTransition)
		default:
			slog.Error("message with unsupported transport type arrived")
		}
	}
}

func (e *Editor) GetName() string {
	e.mu.Lock()
	defer e.mu.Unlock()

	return e.name
}

func (e *Editor) SetName(name string) {
	e.mu.Lock()
	defer e.mu.Unlock()

	e.name = name
}

func (e *Editor) Close() {
	e.mu.Lock()
	defer e.mu.Unlock()

	if e.conn != nil {
		err := e.conn.Close()
		if err != nil {
			slog.Error("close active WS connection error:", err)
		}
		e.conn = nil
	}
}

func (e *Editor) sendMessage(message *dto.ApiMessageTransport) error {
	data, err := proto.Marshal(message)
	if err != nil {
		return err
	}

	err = e.conn.WriteMessage(websocket.BinaryMessage, data)
	if err != nil {
		return err
	}

	return nil
}

func NewEditor(pool *EditorsPool, conn *websocket.Conn) *Editor {
	return &Editor{
		pool: pool,
		conn: conn,
	}
}
