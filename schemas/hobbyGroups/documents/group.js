export default {
  name: "hobbyGroup",
  type: "document",
  title: "Interessegruppe",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
    },
    {
      name: "description",
      type: "text",
      title: "Beskrivelse",
    },
    {
      name: "image",
      type: "image",
      title: "Bilde",
    },
    {
      name: "read_more_link",
      type: "link",
      title: "Les mer lenke",
    },
    {
      name: "active",
      type: "boolean",
      title: "Aktiv",
    },
  ],
  default: () => ({
    active: false,
  }),
};
