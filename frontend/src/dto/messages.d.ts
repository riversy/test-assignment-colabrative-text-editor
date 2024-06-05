import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace proto. */
export namespace proto {

    /** Properties of an ApiParticipant. */
    interface IApiParticipant {

        /** ApiParticipant uuid */
        uuid?: (string|null);

        /** ApiParticipant name */
        name?: (string|null);
    }

    /** Represents an ApiParticipant. */
    class ApiParticipant implements IApiParticipant {

        /**
         * Constructs a new ApiParticipant.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IApiParticipant);

        /** ApiParticipant uuid. */
        public uuid: string;

        /** ApiParticipant name. */
        public name: string;

        /**
         * Creates a new ApiParticipant instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiParticipant instance
         */
        public static create(properties?: proto.IApiParticipant): proto.ApiParticipant;

        /**
         * Encodes the specified ApiParticipant message. Does not implicitly {@link proto.ApiParticipant.verify|verify} messages.
         * @param message ApiParticipant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IApiParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiParticipant message, length delimited. Does not implicitly {@link proto.ApiParticipant.verify|verify} messages.
         * @param message ApiParticipant message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IApiParticipant, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiParticipant message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApiParticipant;

        /**
         * Decodes an ApiParticipant message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApiParticipant;

        /**
         * Verifies an ApiParticipant message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiParticipant message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiParticipant
         */
        public static fromObject(object: { [k: string]: any }): proto.ApiParticipant;

        /**
         * Creates a plain object from an ApiParticipant message. Also converts values to other types if specified.
         * @param message ApiParticipant
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ApiParticipant, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiParticipant to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApiParticipant
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an ApiMessageTransport. */
    interface IApiMessageTransport {

        /** ApiMessageTransport handshake */
        handshake?: (proto.ApiMessageTransport.IApiHandshakeMessage|null);

        /** ApiMessageTransport transition */
        transition?: (proto.ApiMessageTransport.IApiTextTransitionMessage|null);

        /** ApiMessageTransport participants */
        participants?: (proto.ApiMessageTransport.IApiParticipantsMessage|null);
    }

    /** Represents an ApiMessageTransport. */
    class ApiMessageTransport implements IApiMessageTransport {

        /**
         * Constructs a new ApiMessageTransport.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IApiMessageTransport);

        /** ApiMessageTransport handshake. */
        public handshake?: (proto.ApiMessageTransport.IApiHandshakeMessage|null);

        /** ApiMessageTransport transition. */
        public transition?: (proto.ApiMessageTransport.IApiTextTransitionMessage|null);

        /** ApiMessageTransport participants. */
        public participants?: (proto.ApiMessageTransport.IApiParticipantsMessage|null);

        /** ApiMessageTransport transport. */
        public transport?: ("handshake"|"transition"|"participants");

        /**
         * Creates a new ApiMessageTransport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApiMessageTransport instance
         */
        public static create(properties?: proto.IApiMessageTransport): proto.ApiMessageTransport;

        /**
         * Encodes the specified ApiMessageTransport message. Does not implicitly {@link proto.ApiMessageTransport.verify|verify} messages.
         * @param message ApiMessageTransport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IApiMessageTransport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApiMessageTransport message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.verify|verify} messages.
         * @param message ApiMessageTransport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IApiMessageTransport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApiMessageTransport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApiMessageTransport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApiMessageTransport;

        /**
         * Decodes an ApiMessageTransport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApiMessageTransport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApiMessageTransport;

        /**
         * Verifies an ApiMessageTransport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApiMessageTransport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApiMessageTransport
         */
        public static fromObject(object: { [k: string]: any }): proto.ApiMessageTransport;

        /**
         * Creates a plain object from an ApiMessageTransport message. Also converts values to other types if specified.
         * @param message ApiMessageTransport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ApiMessageTransport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApiMessageTransport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ApiMessageTransport
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ApiMessageTransport {

        /** Properties of an ApiHandshakeMessage. */
        interface IApiHandshakeMessage {

            /** ApiHandshakeMessage name */
            name?: (string|null);
        }

        /** Represents an ApiHandshakeMessage. */
        class ApiHandshakeMessage implements IApiHandshakeMessage {

            /**
             * Constructs a new ApiHandshakeMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.ApiMessageTransport.IApiHandshakeMessage);

            /** ApiHandshakeMessage name. */
            public name: string;

            /**
             * Creates a new ApiHandshakeMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApiHandshakeMessage instance
             */
            public static create(properties?: proto.ApiMessageTransport.IApiHandshakeMessage): proto.ApiMessageTransport.ApiHandshakeMessage;

            /**
             * Encodes the specified ApiHandshakeMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiHandshakeMessage.verify|verify} messages.
             * @param message ApiHandshakeMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.ApiMessageTransport.IApiHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApiHandshakeMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiHandshakeMessage.verify|verify} messages.
             * @param message ApiHandshakeMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.ApiMessageTransport.IApiHandshakeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApiHandshakeMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApiHandshakeMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApiMessageTransport.ApiHandshakeMessage;

            /**
             * Decodes an ApiHandshakeMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApiHandshakeMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApiMessageTransport.ApiHandshakeMessage;

            /**
             * Verifies an ApiHandshakeMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApiHandshakeMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApiHandshakeMessage
             */
            public static fromObject(object: { [k: string]: any }): proto.ApiMessageTransport.ApiHandshakeMessage;

            /**
             * Creates a plain object from an ApiHandshakeMessage message. Also converts values to other types if specified.
             * @param message ApiHandshakeMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.ApiMessageTransport.ApiHandshakeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApiHandshakeMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApiHandshakeMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApiTextTransitionMessage. */
        interface IApiTextTransitionMessage {

            /** ApiTextTransitionMessage start */
            start?: (number|null);

            /** ApiTextTransitionMessage end */
            end?: (number|null);

            /** ApiTextTransitionMessage text */
            text?: (string|null);
        }

        /** Represents an ApiTextTransitionMessage. */
        class ApiTextTransitionMessage implements IApiTextTransitionMessage {

            /**
             * Constructs a new ApiTextTransitionMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.ApiMessageTransport.IApiTextTransitionMessage);

            /** ApiTextTransitionMessage start. */
            public start: number;

            /** ApiTextTransitionMessage end. */
            public end: number;

            /** ApiTextTransitionMessage text. */
            public text: string;

            /**
             * Creates a new ApiTextTransitionMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApiTextTransitionMessage instance
             */
            public static create(properties?: proto.ApiMessageTransport.IApiTextTransitionMessage): proto.ApiMessageTransport.ApiTextTransitionMessage;

            /**
             * Encodes the specified ApiTextTransitionMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiTextTransitionMessage.verify|verify} messages.
             * @param message ApiTextTransitionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.ApiMessageTransport.IApiTextTransitionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApiTextTransitionMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiTextTransitionMessage.verify|verify} messages.
             * @param message ApiTextTransitionMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.ApiMessageTransport.IApiTextTransitionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApiTextTransitionMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApiTextTransitionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApiMessageTransport.ApiTextTransitionMessage;

            /**
             * Decodes an ApiTextTransitionMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApiTextTransitionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApiMessageTransport.ApiTextTransitionMessage;

            /**
             * Verifies an ApiTextTransitionMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApiTextTransitionMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApiTextTransitionMessage
             */
            public static fromObject(object: { [k: string]: any }): proto.ApiMessageTransport.ApiTextTransitionMessage;

            /**
             * Creates a plain object from an ApiTextTransitionMessage message. Also converts values to other types if specified.
             * @param message ApiTextTransitionMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.ApiMessageTransport.ApiTextTransitionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApiTextTransitionMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApiTextTransitionMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an ApiParticipantsMessage. */
        interface IApiParticipantsMessage {

            /** ApiParticipantsMessage participants */
            participants?: (proto.IApiParticipant[]|null);
        }

        /** Represents an ApiParticipantsMessage. */
        class ApiParticipantsMessage implements IApiParticipantsMessage {

            /**
             * Constructs a new ApiParticipantsMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.ApiMessageTransport.IApiParticipantsMessage);

            /** ApiParticipantsMessage participants. */
            public participants: proto.IApiParticipant[];

            /**
             * Creates a new ApiParticipantsMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ApiParticipantsMessage instance
             */
            public static create(properties?: proto.ApiMessageTransport.IApiParticipantsMessage): proto.ApiMessageTransport.ApiParticipantsMessage;

            /**
             * Encodes the specified ApiParticipantsMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiParticipantsMessage.verify|verify} messages.
             * @param message ApiParticipantsMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.ApiMessageTransport.IApiParticipantsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ApiParticipantsMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiParticipantsMessage.verify|verify} messages.
             * @param message ApiParticipantsMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.ApiMessageTransport.IApiParticipantsMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ApiParticipantsMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ApiParticipantsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ApiMessageTransport.ApiParticipantsMessage;

            /**
             * Decodes an ApiParticipantsMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ApiParticipantsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ApiMessageTransport.ApiParticipantsMessage;

            /**
             * Verifies an ApiParticipantsMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ApiParticipantsMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ApiParticipantsMessage
             */
            public static fromObject(object: { [k: string]: any }): proto.ApiMessageTransport.ApiParticipantsMessage;

            /**
             * Creates a plain object from an ApiParticipantsMessage message. Also converts values to other types if specified.
             * @param message ApiParticipantsMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.ApiMessageTransport.ApiParticipantsMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ApiParticipantsMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ApiParticipantsMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
