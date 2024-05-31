package main

import (
	"log"

	"github.com/joho/godotenv"
)

func main() {
	if err := initEverything(); err != nil {
		log.Fatal(err)
	}

}

func initEverything() error {
	_ = godotenv.Load("../.env")

	return nil
}
