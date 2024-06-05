package text

import (
	"bytes"
	"sync"
)

type Transition struct {
	start int
	end   int
	text  string
}

func NewTransition(start int, end int, text string) Transition {
	return Transition{start: start, end: end, text: text}
}

type Container struct {
	mu      sync.Mutex
	text    string
	Inbound chan Transition
}

func (t *Container) applyTransition(transition Transition) {
	t.mu.Lock()
	defer t.mu.Unlock()

	var buffer bytes.Buffer

	buffer.WriteString(t.text[:transition.start])
	buffer.WriteString(transition.text)
	buffer.WriteString(t.text[transition.end:])

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
