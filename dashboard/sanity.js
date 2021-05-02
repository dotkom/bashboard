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
    Authorization: `Bearer sk14SGim7ZKktU5O2ogsVJNE3zY8LZLSeE0b1dM6iVhHFCOxYm2U40q93SeblWSKGoEkqkcPvA3lgwIId8zAg3Qyq0TtVdEM8dysWcgz5KakmVJpXJMYpM5OZqbYpJon1nmgKcfPd5yZPPmZtqOZBLyVU9icG6z1jOTs1MBGBmSzHfrXRnyJ`,
  },
  body: JSON.stringify({ mutations }),
})
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
