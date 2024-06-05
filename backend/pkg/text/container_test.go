package text

import (
	"testing"
	"time"
)

func TestTextContainer(t *testing.T) {
	tc := NewTextContainer()

	go tc.HandleInbound()

	transitions := []Transition{
		NewTransition(0, 0, "Hello, "),
		NewTransition(7, 7, "world!"),
		NewTransition(13, 13, " How are you?"),
		NewTransition(7, 12, "Editor"),
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
