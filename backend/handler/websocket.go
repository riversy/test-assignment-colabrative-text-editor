package handler

import (
	"github.com/gorilla/websocket"
	"log/slog"
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
			ok := origin == corsHeader
			if !ok {
				slog.Error("rejecting request because of unexpected origin", "origin", origin)
			}
			return ok
		} else {
			return true
		}
	},
}
