import styles from './Participants.module.css';
import {JSX, useCallback, useEffect, useState} from "react";
import {ParticipantProps} from "./Participants.props.ts";
import cn from "classnames";
import {ApiConnectionProvider} from "../../services/api.provider.ts";
import {
    ApiParticipantsEvent,
    Participant,
    ParticipantsCallback,
} from "../../services/api.ts";

export function Participants({className, ...props}: ParticipantProps): JSX.Element {
    const [participants, setParticipants] = useState<Participant[]>([]);

    const participantsCallback = useCallback<ParticipantsCallback>((participantsEvent: ApiParticipantsEvent): void => {
        const participants = participantsEvent.participants;
        setParticipants(participants);
    }, []);

    useEffect(() => {
        const apiConnection = ApiConnectionProvider();
        apiConnection.SubscribeToParticipants(participantsCallback);
    }, []);

    return (
        <div
            className={cn(styles.participants, className)}
            {...props}
        >
            {participants.map((participant) => (
                <div className={styles.participant} key={participant.uuid}>{participant.name}</div>
            ))}
        </div>
    );
}