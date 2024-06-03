import styles from './Participants.module.css';
import {JSX} from "react";
import {ParticipantProps} from "./Participants.props.ts";
import cn from "classnames";

export function Participants({className, ...props}: ParticipantProps): JSX.Element {
    return (
        <div
            className={cn(styles.participants, className)}
            {...props}
        >

        </div>
    );
}