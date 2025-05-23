module.exports = {
  type: "object",
  properties: {
      titulo: {type: "string"},
      texto: {type: "string"},
      userId: {type: "integer"}
  },
  required: ["titulo", "texto", "userId"],
  additionalProperties: false
}