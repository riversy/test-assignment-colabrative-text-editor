package pkg

import (
	"bytes"
	"sync"
)

type TextTransition struct {
	start int
	end   int
	text  string
}

func NewTextTransition(start int, end int, text string) TextTransition {
	return TextTransition{start: start, end: end, text: text}
}

type TextContainer struct {
	mu      sync.Mutex
	text    string
	Inbound chan TextTransition
}

func (t *TextContainer) applyTransition(transition TextTransition) {
	t.mu.Lock()
	defer t.mu.Unlock()

	var buffer bytes.Buffer

	buffer.WriteString(t.text[:transition.start])
	buffer.WriteString(transition.text)
	buffer.WriteString(t.text[transition.end:])

	t.text = buffer.String()
}

func (t *TextContainer) HandleInbound() {
	for transition := range t.Inbound {
		t.applyTransition(transition)
	}
}

func (t *TextContainer) Close() {
	close(t.Inbound)
}

func NewTextContainer() *TextContainer {
	return &TextContainer{
		text:    "",
		Inbound: make(chan TextTransition),
	}
}

func (t *TextContainer) GetText() string {
	return t.text
}
