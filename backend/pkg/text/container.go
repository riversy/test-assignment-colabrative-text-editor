package text

import (
	"bytes"
	"log/slog"
	"sync"
)

type Transition struct {
	Start int32
	End   int32
	Text  string
}

func NewTransition(start int32, end int32, text string) Transition {
	return Transition{Start: start, End: end, Text: text}
}

type Container struct {
	mu      sync.Mutex
	text    string
	Inbound chan Transition
}

func (t *Container) applyTransition(transition Transition) {
	t.mu.Lock()
	defer t.mu.Unlock()

	textLen := int32(len(t.text))
	if transition.Start < 0 || transition.Start > textLen {
		slog.Error("transition start out of range, skipping...")
	}
	if transition.End < 0 || transition.End > textLen {
		slog.Error("transition end out of range, skipping...")
	}
	if transition.Start > transition.End {
		slog.Error("transition start greater than end, skipping...")
	}

	var buffer bytes.Buffer

	buffer.WriteString(t.text[:transition.Start])
	buffer.WriteString(transition.Text)
	buffer.WriteString(t.text[transition.End:])

	t.text = buffer.String()
}

func (t *Container) HandleInbound() {
	for transition := range t.Inbound {
		t.applyTransition(transition)
	}
}

func (t *Container) Close() {
	close(t.Inbound)
}

func NewTextContainer() *Container {
	return &Container{
		text:    "",
		Inbound: make(chan Transition),
	}
}

func (t *Container) GetText() string {
	return t.text
}
