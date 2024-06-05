package handler

import (
	"colabrative-text-editor/backend/pkg/text"
)

type TransitionTransport struct {
	author     *Editor
	transition *text.Transition
}

func NewTransitionTransport(author *Editor, transition *text.Transition) *TransitionTransport {
	return &TransitionTransport{author: author, transition: transition}
}
