package main

import (
	"colabrative-text-editor/backend/handler"
	"github.com/joho/godotenv"
	"log/slog"
	"net/http"
	"os"
)

func main() {
	_ = godotenv.Load(".env")

	editorsPool := handler.NewEditorsPool()
	go editorsPool.Handle()

	http.HandleFunc("/ws", editorsPool.ServeWs)

	port := os.Getenv("HTTP_LISTEN_ADDR")
	slog.Info("server started", "port", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		slog.Error("unable to start server", "err", err)
	}
}
