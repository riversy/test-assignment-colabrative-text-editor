package handler

import (
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
)

type Editor struct {
	uuid uuid.UUID
	name string
	Conn *websocket.Conn
}

func NewEditor(name string, conn *websocket.Conn) *Editor {
	return &Editor{name: name, Conn: conn}
}
