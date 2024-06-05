package handler

import (
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
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

		slog.Info(string(message))

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

func (e *Editor) sendMessage(i any) {

}

func NewEditor(pool *EditorsPool, conn *websocket.Conn) *Editor {
	return &Editor{
		pool: pool,
		conn: conn,
	}
}
