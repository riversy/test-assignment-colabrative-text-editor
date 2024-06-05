import {WS_URI} from "./config.provider.ts";

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

            // Initial message or authentication, if needed
            this.wsConnection.send(JSON.stringify({message: 'Hello'}));
        };

        this.wsConnection.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.start !== undefined && message.end !== undefined && message.text !== undefined) {
                this?.transitionCallback(message as ApiTransitionEvent);
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
