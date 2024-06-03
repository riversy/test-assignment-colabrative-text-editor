import styles from './Editor.module.css';
import {JSX} from "react";
import {EditorProps} from "./Editor.props.ts";
import cn from "classnames";

export function Editor({className, ...props}: EditorProps): JSX.Element {
    return (
        <textarea
            className={cn(styles.editor, className)}
            {...props}
        ></textarea>
    );
}