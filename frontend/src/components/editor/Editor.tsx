import styles from './Editor.module.css';
import {JSX, useCallback, useEffect, useRef, useState} from "react";
import {EditorProps} from "./Editor.props";
import cn from "classnames";
import {ApiConnectionProvider} from "../../services/api.provider.ts";
import {ApiTransitionEvent, TransitionCallback} from "../../services/api.ts";

export function Editor({className, ...props}: EditorProps): JSX.Element {
    const editorRef = useRef<HTMLTextAreaElement>(null);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

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
        if (startPos <= endPos || !textarea || endPos > textarea.value.length) {
            return;
        }

        const value = textarea.value;
        const before = value.substring(0, startPos);
        const after = value.substring(endPos, value.length);

        textarea.value = before + text + after;

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

        if (textarea.selectionStart >= startPos) {
            textarea.selectionStart = textarea.selectionStart + text.length;
            textarea.selectionEnd = textarea.selectionEnd + text.length;
        } else if (textarea.selectionStart <= startPos && textarea.selectionEnd < startPos) {
            textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart + text.length;
        } else {
            // do nothing @todo: to remove comment
        }
    };

    const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        console.log('Key pressed:', e.key);

        // Get the current textarea element
        const textarea = e.currentTarget;

        // Log the selection parameters
        const selectionStart = textarea.selectionStart;
        const selectionEnd = textarea.selectionEnd;

        const apiConnection = ApiConnectionProvider();
        apiConnection.SendTransition({start: selectionStart, end: selectionEnd, text: e.key});

    };

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Value changed:', e.currentTarget.value);
    }

    return (
        <textarea
            className={cn(styles.editor, className)}
            {...props}
            ref={editorRef}
            onKeyDown={keyDownHandler}
            onChange={changeHandler}
            disabled={isLoading}
            placeholder={isLoading ? "Loading...": ""}
        ></textarea>
    );
}