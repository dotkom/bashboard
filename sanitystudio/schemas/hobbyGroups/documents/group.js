import { createDimensionRule } from "../../../utils/imgDimensionRules";

const HobbyGroup = {
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
      title: "Logo",
      validation: (Rule) => [
        createDimensionRule(
          Rule,
          (dim) => dim.width > 250 || "Width must be greater than 250px"
        ),
        createDimensionRule(
          Rule,
          (dim) => dim.height > 250 || "Height must be greater than 250px"
        ),
      ],
      options: {
        hotspot: true,
      },
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
  initialValue: () => ({
    active: false,
    priority: 0,
  }),
};

export default HobbyGroup;
