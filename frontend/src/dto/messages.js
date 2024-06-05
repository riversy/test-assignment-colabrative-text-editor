/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const proto = $root.proto = (() => {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    const proto = {};

    proto.ApiParticipant = (function() {

        /**
         * Properties of an ApiParticipant.
         * @memberof proto
         * @interface IApiParticipant
         * @property {string|null} [uuid] ApiParticipant uuid
         * @property {string|null} [name] ApiParticipant name
         */

        /**
         * Constructs a new ApiParticipant.
         * @memberof proto
         * @classdesc Represents an ApiParticipant.
         * @implements IApiParticipant
         * @constructor
         * @param {proto.IApiParticipant=} [properties] Properties to set
         */
        function ApiParticipant(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApiParticipant uuid.
         * @member {string} uuid
         * @memberof proto.ApiParticipant
         * @instance
         */
        ApiParticipant.prototype.uuid = "";

        /**
         * ApiParticipant name.
         * @member {string} name
         * @memberof proto.ApiParticipant
         * @instance
         */
        ApiParticipant.prototype.name = "";

        /**
         * Creates a new ApiParticipant instance using the specified properties.
         * @function create
         * @memberof proto.ApiParticipant
         * @static
         * @param {proto.IApiParticipant=} [properties] Properties to set
         * @returns {proto.ApiParticipant} ApiParticipant instance
         */
        ApiParticipant.create = function create(properties) {
            return new ApiParticipant(properties);
        };

        /**
         * Encodes the specified ApiParticipant message. Does not implicitly {@link proto.ApiParticipant.verify|verify} messages.
         * @function encode
         * @memberof proto.ApiParticipant
         * @static
         * @param {proto.IApiParticipant} message ApiParticipant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApiParticipant.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ApiParticipant message, length delimited. Does not implicitly {@link proto.ApiParticipant.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ApiParticipant
         * @static
         * @param {proto.IApiParticipant} message ApiParticipant message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApiParticipant.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApiParticipant message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ApiParticipant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ApiParticipant} ApiParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApiParticipant.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApiParticipant();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uuid = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApiParticipant message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ApiParticipant
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ApiParticipant} ApiParticipant
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApiParticipant.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApiParticipant message.
         * @function verify
         * @memberof proto.ApiParticipant
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApiParticipant.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an ApiParticipant message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ApiParticipant
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ApiParticipant} ApiParticipant
         */
        ApiParticipant.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ApiParticipant)
                return object;
            let message = new $root.proto.ApiParticipant();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an ApiParticipant message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ApiParticipant
         * @static
         * @param {proto.ApiParticipant} message ApiParticipant
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApiParticipant.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uuid = "";
                object.name = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ApiParticipant to JSON.
         * @function toJSON
         * @memberof proto.ApiParticipant
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApiParticipant.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ApiParticipant
         * @function getTypeUrl
         * @memberof proto.ApiParticipant
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApiParticipant.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ApiParticipant";
        };

        return ApiParticipant;
    })();

    proto.ApiMessageTransport = (function() {

        /**
         * Properties of an ApiMessageTransport.
         * @memberof proto
         * @interface IApiMessageTransport
         * @property {proto.ApiMessageTransport.IApiHandshakeMessage|null} [handshake] ApiMessageTransport handshake
         * @property {proto.ApiMessageTransport.IApiTextTransitionMessage|null} [transition] ApiMessageTransport transition
         * @property {proto.ApiMessageTransport.IApiParticipantsMessage|null} [participants] ApiMessageTransport participants
         */

        /**
         * Constructs a new ApiMessageTransport.
         * @memberof proto
         * @classdesc Represents an ApiMessageTransport.
         * @implements IApiMessageTransport
         * @constructor
         * @param {proto.IApiMessageTransport=} [properties] Properties to set
         */
        function ApiMessageTransport(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApiMessageTransport handshake.
         * @member {proto.ApiMessageTransport.IApiHandshakeMessage|null|undefined} handshake
         * @memberof proto.ApiMessageTransport
         * @instance
         */
        ApiMessageTransport.prototype.handshake = null;

        /**
         * ApiMessageTransport transition.
         * @member {proto.ApiMessageTransport.IApiTextTransitionMessage|null|undefined} transition
         * @memberof proto.ApiMessageTransport
         * @instance
         */
        ApiMessageTransport.prototype.transition = null;

        /**
         * ApiMessageTransport participants.
         * @member {proto.ApiMessageTransport.IApiParticipantsMessage|null|undefined} participants
         * @memberof proto.ApiMessageTransport
         * @instance
         */
        ApiMessageTransport.prototype.participants = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * ApiMessageTransport transport.
         * @member {"handshake"|"transition"|"participants"|undefined} transport
         * @memberof proto.ApiMessageTransport
         * @instance
         */
        Object.defineProperty(ApiMessageTransport.prototype, "transport", {
            get: $util.oneOfGetter($oneOfFields = ["handshake", "transition", "participants"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ApiMessageTransport instance using the specified properties.
         * @function create
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {proto.IApiMessageTransport=} [properties] Properties to set
         * @returns {proto.ApiMessageTransport} ApiMessageTransport instance
         */
        ApiMessageTransport.create = function create(properties) {
            return new ApiMessageTransport(properties);
        };

        /**
         * Encodes the specified ApiMessageTransport message. Does not implicitly {@link proto.ApiMessageTransport.verify|verify} messages.
         * @function encode
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {proto.IApiMessageTransport} message ApiMessageTransport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApiMessageTransport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.handshake != null && Object.hasOwnProperty.call(message, "handshake"))
                $root.proto.ApiMessageTransport.ApiHandshakeMessage.encode(message.handshake, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.transition != null && Object.hasOwnProperty.call(message, "transition"))
                $root.proto.ApiMessageTransport.ApiTextTransitionMessage.encode(message.transition, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.participants != null && Object.hasOwnProperty.call(message, "participants"))
                $root.proto.ApiMessageTransport.ApiParticipantsMessage.encode(message.participants, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ApiMessageTransport message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {proto.IApiMessageTransport} message ApiMessageTransport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApiMessageTransport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApiMessageTransport message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {proto.ApiMessageTransport} ApiMessageTransport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApiMessageTransport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApiMessageTransport();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.handshake = $root.proto.ApiMessageTransport.ApiHandshakeMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.transition = $root.proto.ApiMessageTransport.ApiTextTransitionMessage.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.participants = $root.proto.ApiMessageTransport.ApiParticipantsMessage.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ApiMessageTransport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {proto.ApiMessageTransport} ApiMessageTransport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApiMessageTransport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApiMessageTransport message.
         * @function verify
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApiMessageTransport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.handshake != null && message.hasOwnProperty("handshake")) {
                properties.transport = 1;
                {
                    let error = $root.proto.ApiMessageTransport.ApiHandshakeMessage.verify(message.handshake);
                    if (error)
                        return "handshake." + error;
                }
            }
            if (message.transition != null && message.hasOwnProperty("transition")) {
                if (properties.transport === 1)
                    return "transport: multiple values";
                properties.transport = 1;
                {
                    let error = $root.proto.ApiMessageTransport.ApiTextTransitionMessage.verify(message.transition);
                    if (error)
                        return "transition." + error;
                }
            }
            if (message.participants != null && message.hasOwnProperty("participants")) {
                if (properties.transport === 1)
                    return "transport: multiple values";
                properties.transport = 1;
                {
                    let error = $root.proto.ApiMessageTransport.ApiParticipantsMessage.verify(message.participants);
                    if (error)
                        return "participants." + error;
                }
            }
            return null;
        };

        /**
         * Creates an ApiMessageTransport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {proto.ApiMessageTransport} ApiMessageTransport
         */
        ApiMessageTransport.fromObject = function fromObject(object) {
            if (object instanceof $root.proto.ApiMessageTransport)
                return object;
            let message = new $root.proto.ApiMessageTransport();
            if (object.handshake != null) {
                if (typeof object.handshake !== "object")
                    throw TypeError(".proto.ApiMessageTransport.handshake: object expected");
                message.handshake = $root.proto.ApiMessageTransport.ApiHandshakeMessage.fromObject(object.handshake);
            }
            if (object.transition != null) {
                if (typeof object.transition !== "object")
                    throw TypeError(".proto.ApiMessageTransport.transition: object expected");
                message.transition = $root.proto.ApiMessageTransport.ApiTextTransitionMessage.fromObject(object.transition);
            }
            if (object.participants != null) {
                if (typeof object.participants !== "object")
                    throw TypeError(".proto.ApiMessageTransport.participants: object expected");
                message.participants = $root.proto.ApiMessageTransport.ApiParticipantsMessage.fromObject(object.participants);
            }
            return message;
        };

        /**
         * Creates a plain object from an ApiMessageTransport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {proto.ApiMessageTransport} message ApiMessageTransport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApiMessageTransport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.handshake != null && message.hasOwnProperty("handshake")) {
                object.handshake = $root.proto.ApiMessageTransport.ApiHandshakeMessage.toObject(message.handshake, options);
                if (options.oneofs)
                    object.transport = "handshake";
            }
            if (message.transition != null && message.hasOwnProperty("transition")) {
                object.transition = $root.proto.ApiMessageTransport.ApiTextTransitionMessage.toObject(message.transition, options);
                if (options.oneofs)
                    object.transport = "transition";
            }
            if (message.participants != null && message.hasOwnProperty("participants")) {
                object.participants = $root.proto.ApiMessageTransport.ApiParticipantsMessage.toObject(message.participants, options);
                if (options.oneofs)
                    object.transport = "participants";
            }
            return object;
        };

        /**
         * Converts this ApiMessageTransport to JSON.
         * @function toJSON
         * @memberof proto.ApiMessageTransport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApiMessageTransport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ApiMessageTransport
         * @function getTypeUrl
         * @memberof proto.ApiMessageTransport
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ApiMessageTransport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/proto.ApiMessageTransport";
        };

        ApiMessageTransport.ApiHandshakeMessage = (function() {

            /**
             * Properties of an ApiHandshakeMessage.
             * @memberof proto.ApiMessageTransport
             * @interface IApiHandshakeMessage
             * @property {string|null} [name] ApiHandshakeMessage name
             */

            /**
             * Constructs a new ApiHandshakeMessage.
             * @memberof proto.ApiMessageTransport
             * @classdesc Represents an ApiHandshakeMessage.
             * @implements IApiHandshakeMessage
             * @constructor
             * @param {proto.ApiMessageTransport.IApiHandshakeMessage=} [properties] Properties to set
             */
            function ApiHandshakeMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApiHandshakeMessage name.
             * @member {string} name
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @instance
             */
            ApiHandshakeMessage.prototype.name = "";

            /**
             * Creates a new ApiHandshakeMessage instance using the specified properties.
             * @function create
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiHandshakeMessage=} [properties] Properties to set
             * @returns {proto.ApiMessageTransport.ApiHandshakeMessage} ApiHandshakeMessage instance
             */
            ApiHandshakeMessage.create = function create(properties) {
                return new ApiHandshakeMessage(properties);
            };

            /**
             * Encodes the specified ApiHandshakeMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiHandshakeMessage.verify|verify} messages.
             * @function encode
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiHandshakeMessage} message ApiHandshakeMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiHandshakeMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                return writer;
            };

            /**
             * Encodes the specified ApiHandshakeMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiHandshakeMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiHandshakeMessage} message ApiHandshakeMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiHandshakeMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApiHandshakeMessage message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ApiMessageTransport.ApiHandshakeMessage} ApiHandshakeMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiHandshakeMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApiMessageTransport.ApiHandshakeMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApiHandshakeMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ApiMessageTransport.ApiHandshakeMessage} ApiHandshakeMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiHandshakeMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApiHandshakeMessage message.
             * @function verify
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApiHandshakeMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                return null;
            };

            /**
             * Creates an ApiHandshakeMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ApiMessageTransport.ApiHandshakeMessage} ApiHandshakeMessage
             */
            ApiHandshakeMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ApiMessageTransport.ApiHandshakeMessage)
                    return object;
                let message = new $root.proto.ApiMessageTransport.ApiHandshakeMessage();
                if (object.name != null)
                    message.name = String(object.name);
                return message;
            };

            /**
             * Creates a plain object from an ApiHandshakeMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {proto.ApiMessageTransport.ApiHandshakeMessage} message ApiHandshakeMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApiHandshakeMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.name = "";
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                return object;
            };

            /**
             * Converts this ApiHandshakeMessage to JSON.
             * @function toJSON
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApiHandshakeMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApiHandshakeMessage
             * @function getTypeUrl
             * @memberof proto.ApiMessageTransport.ApiHandshakeMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApiHandshakeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ApiMessageTransport.ApiHandshakeMessage";
            };

            return ApiHandshakeMessage;
        })();

        ApiMessageTransport.ApiTextTransitionMessage = (function() {

            /**
             * Properties of an ApiTextTransitionMessage.
             * @memberof proto.ApiMessageTransport
             * @interface IApiTextTransitionMessage
             * @property {number|null} [start] ApiTextTransitionMessage start
             * @property {number|null} [end] ApiTextTransitionMessage end
             * @property {string|null} [text] ApiTextTransitionMessage text
             */

            /**
             * Constructs a new ApiTextTransitionMessage.
             * @memberof proto.ApiMessageTransport
             * @classdesc Represents an ApiTextTransitionMessage.
             * @implements IApiTextTransitionMessage
             * @constructor
             * @param {proto.ApiMessageTransport.IApiTextTransitionMessage=} [properties] Properties to set
             */
            function ApiTextTransitionMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApiTextTransitionMessage start.
             * @member {number} start
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @instance
             */
            ApiTextTransitionMessage.prototype.start = 0;

            /**
             * ApiTextTransitionMessage end.
             * @member {number} end
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @instance
             */
            ApiTextTransitionMessage.prototype.end = 0;

            /**
             * ApiTextTransitionMessage text.
             * @member {string} text
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @instance
             */
            ApiTextTransitionMessage.prototype.text = "";

            /**
             * Creates a new ApiTextTransitionMessage instance using the specified properties.
             * @function create
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiTextTransitionMessage=} [properties] Properties to set
             * @returns {proto.ApiMessageTransport.ApiTextTransitionMessage} ApiTextTransitionMessage instance
             */
            ApiTextTransitionMessage.create = function create(properties) {
                return new ApiTextTransitionMessage(properties);
            };

            /**
             * Encodes the specified ApiTextTransitionMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiTextTransitionMessage.verify|verify} messages.
             * @function encode
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiTextTransitionMessage} message ApiTextTransitionMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiTextTransitionMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
                return writer;
            };

            /**
             * Encodes the specified ApiTextTransitionMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiTextTransitionMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiTextTransitionMessage} message ApiTextTransitionMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiTextTransitionMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApiTextTransitionMessage message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ApiMessageTransport.ApiTextTransitionMessage} ApiTextTransitionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiTextTransitionMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApiMessageTransport.ApiTextTransitionMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.start = reader.int32();
                            break;
                        }
                    case 2: {
                            message.end = reader.int32();
                            break;
                        }
                    case 3: {
                            message.text = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApiTextTransitionMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ApiMessageTransport.ApiTextTransitionMessage} ApiTextTransitionMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiTextTransitionMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApiTextTransitionMessage message.
             * @function verify
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApiTextTransitionMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.start != null && message.hasOwnProperty("start"))
                    if (!$util.isInteger(message.start))
                        return "start: integer expected";
                if (message.end != null && message.hasOwnProperty("end"))
                    if (!$util.isInteger(message.end))
                        return "end: integer expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                return null;
            };

            /**
             * Creates an ApiTextTransitionMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ApiMessageTransport.ApiTextTransitionMessage} ApiTextTransitionMessage
             */
            ApiTextTransitionMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ApiMessageTransport.ApiTextTransitionMessage)
                    return object;
                let message = new $root.proto.ApiMessageTransport.ApiTextTransitionMessage();
                if (object.start != null)
                    message.start = object.start | 0;
                if (object.end != null)
                    message.end = object.end | 0;
                if (object.text != null)
                    message.text = String(object.text);
                return message;
            };

            /**
             * Creates a plain object from an ApiTextTransitionMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {proto.ApiMessageTransport.ApiTextTransitionMessage} message ApiTextTransitionMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApiTextTransitionMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.start = 0;
                    object.end = 0;
                    object.text = "";
                }
                if (message.start != null && message.hasOwnProperty("start"))
                    object.start = message.start;
                if (message.end != null && message.hasOwnProperty("end"))
                    object.end = message.end;
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                return object;
            };

            /**
             * Converts this ApiTextTransitionMessage to JSON.
             * @function toJSON
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApiTextTransitionMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApiTextTransitionMessage
             * @function getTypeUrl
             * @memberof proto.ApiMessageTransport.ApiTextTransitionMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApiTextTransitionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ApiMessageTransport.ApiTextTransitionMessage";
            };

            return ApiTextTransitionMessage;
        })();

        ApiMessageTransport.ApiParticipantsMessage = (function() {

            /**
             * Properties of an ApiParticipantsMessage.
             * @memberof proto.ApiMessageTransport
             * @interface IApiParticipantsMessage
             * @property {Array.<proto.IApiParticipant>|null} [participants] ApiParticipantsMessage participants
             */

            /**
             * Constructs a new ApiParticipantsMessage.
             * @memberof proto.ApiMessageTransport
             * @classdesc Represents an ApiParticipantsMessage.
             * @implements IApiParticipantsMessage
             * @constructor
             * @param {proto.ApiMessageTransport.IApiParticipantsMessage=} [properties] Properties to set
             */
            function ApiParticipantsMessage(properties) {
                this.participants = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ApiParticipantsMessage participants.
             * @member {Array.<proto.IApiParticipant>} participants
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @instance
             */
            ApiParticipantsMessage.prototype.participants = $util.emptyArray;

            /**
             * Creates a new ApiParticipantsMessage instance using the specified properties.
             * @function create
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiParticipantsMessage=} [properties] Properties to set
             * @returns {proto.ApiMessageTransport.ApiParticipantsMessage} ApiParticipantsMessage instance
             */
            ApiParticipantsMessage.create = function create(properties) {
                return new ApiParticipantsMessage(properties);
            };

            /**
             * Encodes the specified ApiParticipantsMessage message. Does not implicitly {@link proto.ApiMessageTransport.ApiParticipantsMessage.verify|verify} messages.
             * @function encode
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiParticipantsMessage} message ApiParticipantsMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiParticipantsMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.participants != null && message.participants.length)
                    for (let i = 0; i < message.participants.length; ++i)
                        $root.proto.ApiParticipant.encode(message.participants[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ApiParticipantsMessage message, length delimited. Does not implicitly {@link proto.ApiMessageTransport.ApiParticipantsMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {proto.ApiMessageTransport.IApiParticipantsMessage} message ApiParticipantsMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ApiParticipantsMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ApiParticipantsMessage message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ApiMessageTransport.ApiParticipantsMessage} ApiParticipantsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiParticipantsMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ApiMessageTransport.ApiParticipantsMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.participants && message.participants.length))
                                message.participants = [];
                            message.participants.push($root.proto.ApiParticipant.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ApiParticipantsMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ApiMessageTransport.ApiParticipantsMessage} ApiParticipantsMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ApiParticipantsMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ApiParticipantsMessage message.
             * @function verify
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ApiParticipantsMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.participants != null && message.hasOwnProperty("participants")) {
                    if (!Array.isArray(message.participants))
                        return "participants: array expected";
                    for (let i = 0; i < message.participants.length; ++i) {
                        let error = $root.proto.ApiParticipant.verify(message.participants[i]);
                        if (error)
                            return "participants." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an ApiParticipantsMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ApiMessageTransport.ApiParticipantsMessage} ApiParticipantsMessage
             */
            ApiParticipantsMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ApiMessageTransport.ApiParticipantsMessage)
                    return object;
                let message = new $root.proto.ApiMessageTransport.ApiParticipantsMessage();
                if (object.participants) {
                    if (!Array.isArray(object.participants))
                        throw TypeError(".proto.ApiMessageTransport.ApiParticipantsMessage.participants: array expected");
                    message.participants = [];
                    for (let i = 0; i < object.participants.length; ++i) {
                        if (typeof object.participants[i] !== "object")
                            throw TypeError(".proto.ApiMessageTransport.ApiParticipantsMessage.participants: object expected");
                        message.participants[i] = $root.proto.ApiParticipant.fromObject(object.participants[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an ApiParticipantsMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {proto.ApiMessageTransport.ApiParticipantsMessage} message ApiParticipantsMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ApiParticipantsMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.participants = [];
                if (message.participants && message.participants.length) {
                    object.participants = [];
                    for (let j = 0; j < message.participants.length; ++j)
                        object.participants[j] = $root.proto.ApiParticipant.toObject(message.participants[j], options);
                }
                return object;
            };

            /**
             * Converts this ApiParticipantsMessage to JSON.
             * @function toJSON
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ApiParticipantsMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ApiParticipantsMessage
             * @function getTypeUrl
             * @memberof proto.ApiMessageTransport.ApiParticipantsMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ApiParticipantsMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ApiMessageTransport.ApiParticipantsMessage";
            };

            return ApiParticipantsMessage;
        })();

        return ApiMessageTransport;
    })();

    return proto;
})();

export { $root as default };
