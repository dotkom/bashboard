export default {
  name: "chunk",
  type: "document",
  title: "Chunk",
  fields: [
    {
      name: "description",
      type: "string",
      title: "Description",
      description: "Should be a short description of the content",
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
