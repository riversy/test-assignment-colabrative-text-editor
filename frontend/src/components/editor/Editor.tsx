import styles from './Editor.module.css';
import {JSX, useCallback, useEffect, useRef, useState} from "react";
import {EditorProps} from "./Editor.props";
import cn from "classnames";
import {ApiConnectionProvider} from "../../services/api.provider.ts";
import {ApiTransitionEvent, TransitionCallback} from "../../services/api.ts";
import {diff_match_patch} from 'diff-match-patch';

const DIFF_EQUAL: number = 0;
const DIFF_INSERT: number = 1;
const DIFF_DELETE: number = -1;

type TextDiff = [number, string];

export function Editor({className, ...props}: EditorProps): JSX.Element {
    const editorRef = useRef<HTMLTextAreaElement>(null);
    const origEditorValueRef = useRef<string>("");
    const dmpRef = useRef(new diff_match_patch());

    const [isLoading, setIsLoading] = useState<boolean>(true);

    const transitionCallback = useCallback<TransitionCallback>((transition: ApiTransitionEvent): void => {
        setIsLoading(false);
        if (transition.start == transition.end) {
            insertTextAtPosition(transition.start, transition.text);
        } else {
            replaceTextAtPosition(transition.start, transition.end, transition.text);
        }
    }, []);

    useEffect(() => {
        const apiConnection = ApiConnectionProvider();
        apiConnection.SubscribeToTransition(transitionCallback);

        editorRef?.current?.focus();
        setIsLoading(true);
    }, []);

    const replaceTextAtPosition = (startPos: number, endPos: number, text: string): void => {
        const textarea = editorRef.current;
        if (startPos > endPos || !textarea || endPos > textarea.value.length) {
            return;
        }

        const value = textarea.value;
        const before = value.substring(0, startPos);
        const after = value.substring(endPos, value.length);

        textarea.value = before + text + after;
        origEditorValueRef.current = before + text + after;

        const newPos = startPos + text.length;

        if (textarea.selectionStart >= startPos && textarea.selectionEnd <= endPos) {
            textarea.selectionStart = textarea.selectionEnd = newPos;
        } else if (textarea.selectionStart >= endPos) {
            textarea.selectionStart = textarea.selectionStart - (endPos - startPos) + text.length;
            textarea.selectionEnd = textarea.selectionEnd - (endPos - startPos) + text.length;
        } else if (textarea.selectionEnd >= endPos) {
            textarea.selectionEnd = textarea.selectionEnd - (endPos - startPos) + text.length;
        }
    }

    const insertTextAtPosition = (startPos: number, text: string): void => {
        const textarea = editorRef.current;
        if (text.length === 0 || !textarea || textarea.value.length < startPos) {
            return;
        }

        const value = textarea.value;
        const before = value.substring(0, startPos);
        const after = value.substring(startPos, value.length);

        textarea.value = before + text + after;
        origEditorValueRef.current = before + text + after;

        if (textarea.selectionStart >= startPos) {
            textarea.selectionStart = textarea.selectionStart + text.length;
            textarea.selectionEnd = textarea.selectionEnd + text.length;
        } else if (textarea.selectionStart <= startPos && textarea.selectionEnd < startPos) {
            textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart + text.length;
        }
    };

    const diffToTransitions = (diffs: TextDiff[]): ApiTransitionEvent[] => {
        let transitions: ApiTransitionEvent[] = [];
        let pointer = 0;

        diffs.forEach((diff) => {
            const [type, text] = diff;
            let transition: ApiTransitionEvent;
            switch (type) {
                case DIFF_INSERT:
                    transition = {
                        start: pointer,
                        end: pointer,
                        text: text
                    }
                    transitions.push(transition);
                    pointer += text.length;
                    break;
                case DIFF_DELETE:
                    transition = {
                        start: pointer,
                        end: pointer + text.length,
                        text: ``
                    }
                    transitions.push(transition);
                    break;
                case DIFF_EQUAL:
                    pointer += text.length;
            }
        });

        return transitions;
    };

    const inputHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const textarea = e.currentTarget;
        const value = textarea.value;
        const origValue = origEditorValueRef.current;
        const diffs = dmpRef.current.diff_main(origValue, value);

        const apiConnection = ApiConnectionProvider();
        diffToTransitions(diffs).forEach(transition => apiConnection.SendTransition(transition));

        origEditorValueRef.current = value
    }

    return (
        <textarea
            className={cn(styles.editor, className)}
            {...props}
            ref={editorRef}
            onInput={inputHandler}
            disabled={isLoading}
            placeholder={isLoading ? "Loading..." : ""}
        ></textarea>
    );
}