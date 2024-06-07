import {WS_URI} from "./config.provider.ts";
import {proto} from "../dto/messages";

import ApiHandshakeMessage = proto.ApiMessageTransport.ApiHandshakeMessage;
import ApiMessageTransport = proto.ApiMessageTransport;
import ApiTextTransitionMessage = proto.ApiMessageTransport.ApiTextTransitionMessage;
import ApiParticipantsMessage = proto.ApiMessageTransport.ApiParticipantsMessage;
import ApiParticipant = proto.ApiParticipant;


export type ApiTransitionEvent = {
    start: number;
    end: number;
    text: string;
};

export type TransitionCallback = (transition: ApiTransitionEvent) => void;

export type Participant = {
    uuid: string;
    name: string;
}

export type ApiParticipantsEvent = {
    participants: Participant[];
};

export type ParticipantsCallback = (participants: ApiParticipantsEvent) => void;


export class ApiConnection {
    private readonly participantName: string;
    private transitionCallback?: TransitionCallback;
    private participantsCallback?: ParticipantsCallback;
    private wsConnection: WebSocket;

    constructor(participantName: string) {
        this.participantName = participantName;

        this.wsConnection = new WebSocket(WS_URI);
        this.configureConnection();
    }

    public SendTransition(transition: ApiTransitionEvent): void {
        if (this.wsConnection && this.wsConnection.readyState === WebSocket.OPEN) {
            const transitionMessage = ApiTextTransitionMessage.create({
                start: transition.start,
                end: transition.end,
                text: transition.text,
            });

            const transportMessage = ApiMessageTransport.create({
                transition: transitionMessage
            });

            this.wsConnection.send(ApiMessageTransport.encode(transportMessage).finish());
        } else {
            console.error('WebSocket connection is not open');
        }
    }

    public SubscribeToTransition(callback: TransitionCallback): void {
        this.transitionCallback = callback;
    }

    public SubscribeToParticipants(callback: ParticipantsCallback): void {
        this.participantsCallback = callback;
    }

    private configureConnection() {
        this.wsConnection.binaryType = "arraybuffer";

        this.wsConnection.onopen = () => {
            console.log('Connected to server');

            const handshakeMessage = ApiHandshakeMessage.create({
                name: this.participantName
            });

            const transportMessage = ApiMessageTransport.create({
                handshake: handshakeMessage
            });

            this.wsConnection.send(ApiMessageTransport.encode(transportMessage).finish());
        };

        this.wsConnection.onmessage = (event) => {
            const data = new Uint8Array(event.data);
            const message = ApiMessageTransport.decode(data);

            switch (message.transport) {
                case "transition":
                    if (this.transitionCallback) {
                        const transition = message.transition as ApiTextTransitionMessage;
                        this.transitionCallback({
                            start: transition.start,
                            end: transition.end,
                            text: transition.text
                        });
                    }
                    break;
                case "participants":
                    if (this.participantsCallback) {
                        const participants = message.participants as ApiParticipantsMessage;

                        const participantsList = participants.participants.map<Participant>((participant) => {
                            return new ApiParticipant(participant);
                        });

                        this.participantsCallback({participants: participantsList});
                    }
                    break;
                default:
                    console.error('Invalid message format', message);
                    break;
            }
        };

        this.wsConnection.onclose = () => {
            console.log('Disconnected from server');
            console.log('Reconnecting in 1s');

            setTimeout(() => {
                this.wsConnection = new WebSocket(WS_URI);
                this.configureConnection();
            }, 1000)
        };

        this.wsConnection.onerror = (error) => {
            console.error('WebSocket error', error);
        };
    }
}
