package pkg

import (
	"testing"
	"time"
)

func TestTextContainer(t *testing.T) {
	tc := NewTextContainer()

	go tc.HandleInbound()

	transitions := []TextTransition{
		NewTextTransition(0, 0, "Hello, "),
		NewTextTransition(7, 7, "world!"),
		NewTextTransition(13, 13, " How are you?"),
		NewTextTransition(7, 12, "Editor"),
	}

	for _, transition := range transitions {
		tc.Inbound <- transition
	}

	tc.Close()

	time.Sleep(100 * time.Millisecond)

	expectedText := "Hello, Editor! How are you?"
	if tc.GetText() != expectedText {
		t.Errorf("Expected text %q, but got %q", expectedText, tc.GetText())
	}
}
