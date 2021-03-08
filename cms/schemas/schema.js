// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import chunk from "./chunks/documents/chunk";
import careerOpportunity from "./career/documents/opportunity";
import company from "./companies/documents/company";
import author from "./articles/documents/author";
import article from "./articles/documents/article";
import offline from "./offline/documents/offline";
import hobbyGroup from "./hobbyGroups/documents/group";
import splashEvent from "./splash/documents/event";
import event from "./events/documents/event";
import namedLocation from "./sharedObjects/namedLocation";

export default createSchema({
  name: "blog",
  types: schemaTypes.concat([
    careerOpportunity,
    chunk,
    company,
    author,
    article,
    offline,
    hobbyGroup,
    splashEvent,
    namedLocation,
    event,
  ]),
});
