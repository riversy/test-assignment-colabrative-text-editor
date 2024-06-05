import {WS_URI} from "./config.provider.ts";
import {proto} from "../dto/messages";
import ApiHandshakeMessage = proto.ApiMessageTransport.ApiHandshakeMessage;
import ApiMessageTransport = proto.ApiMessageTransport;

export type ApiHandshakeRequest = {
    participantName: string;
};

export type ApiTransitionEvent = {
    start: number;
    end: number;
    text: string;
};

export type TransitionCallback = (transition: ApiTransitionEvent) => void;

export class ApiConnection {
    private participantName: string;
    private transitionCallback?: TransitionCallback;
    private wsConnection: WebSocket;

    constructor(participantName: string) {
        this.participantName = participantName;

        this.wsConnection = new WebSocket(WS_URI);
        this.configureConnection();
    }

    public Send(transition: ApiTransitionEvent): void {
        if (this.wsConnection && this.wsConnection.readyState === WebSocket.OPEN) {
            this.wsConnection.send(JSON.stringify(transition));
        } else {
            console.error('WebSocket connection is not open');
        }
    }

    public SubscribeToTransition(callback: TransitionCallback): void {
        this.transitionCallback = callback;
    }

    private configureConnection() {
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
            const message = JSON.parse(event.data);
            if (message.start !== undefined && message.end !== undefined && message.text !== undefined) {
                this.transitionCallback(message as ApiTransitionEvent);
            } else {
                console.error('Invalid message format', message);
            }
        };

        this.wsConnection.onclose = () => {
            console.log('Disconnected from server');
        };

        this.wsConnection.onerror = (error) => {
            console.error('WebSocket error', error);
        };
    }
}
