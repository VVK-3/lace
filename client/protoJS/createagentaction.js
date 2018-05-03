/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.CreateAgentAction');

goog.require('jspb.Message');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateAgentAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateAgentAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.CreateAgentAction.displayName = 'proto.CreateAgentAction';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateAgentAction.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateAgentAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateAgentAction} msg The msg instance to transform.
 * @return {!Object}
 */
proto.CreateAgentAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicKey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    role: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateAgentAction}
 */
proto.CreateAgentAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateAgentAction;
  return proto.CreateAgentAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateAgentAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateAgentAction}
 */
proto.CreateAgentAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateAgentAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateAgentAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateAgentAction} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.CreateAgentAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRole();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string public_key = 1;
 * @return {string}
 */
proto.CreateAgentAction.prototype.getPublicKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.CreateAgentAction.prototype.setPublicKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string first_name = 2;
 * @return {string}
 */
proto.CreateAgentAction.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.CreateAgentAction.prototype.setFirstName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string last_name = 3;
 * @return {string}
 */
proto.CreateAgentAction.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.CreateAgentAction.prototype.setLastName = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 role = 4;
 * @return {number}
 */
proto.CreateAgentAction.prototype.getRole = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.CreateAgentAction.prototype.setRole = function(value) {
  jspb.Message.setField(this, 4, value);
};


