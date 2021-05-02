const dataset = "develop";
const projectId = "wsqi2mae";
const fetch = require("node-fetch");

const mutations = [
  {
    createOrReplace: {
      _id: "_.groups.bedkom",
      _type: "system.group",
      grants: [
        {
          filter: "_type == 'careerOpportunity'",
          permissions: ["read", "create", "update"],
        },
        {
          filter: "_type == 'company'",
          permissions: ["read", "create", "update"],
        },
      ],
      members: ["e-"],
    },
  },
];

fetch(`https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}`, {
  method: "post",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
  },
  body: JSON.stringify({ mutations }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
