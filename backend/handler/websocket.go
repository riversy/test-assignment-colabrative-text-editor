package handler

import (
	"github.com/gorilla/websocket"
	"net/http"
	"os"
)

var websocketUpgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		corsHeader := os.Getenv("HTTP_CORS")
		if corsHeader == "" {
			origin := r.Header.Get("Origin")
			return origin == "http://localhost:5173"
		} else {
			return true
		}
	},
}
