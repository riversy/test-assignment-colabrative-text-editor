package main

import (
	"github.com/joho/godotenv"
	"os"
)

func main() {
	_ = godotenv.Load(".env")

	port := os.Getenv("HTTP_LISTEN_ADDR")

}
