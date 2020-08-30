export default {
  name: "hobbyGroup",
  type: "document",
  title: "Interessegruppe",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
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
      type: "url",
      title: "Les mer lenke",
    },
    {
      name: "active",
      type: "boolean",
      title: "Aktiv",
    },
    {
      name: "priority",
      type: "number",
      title: "Prioritet på rekkefølge",
    },
  ],
  default: () => ({
    active: false,
    priority: 0,
  }),
};
