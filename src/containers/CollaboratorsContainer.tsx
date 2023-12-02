import React from "react";

import { Heading, WorksList } from "~components";

const collaborators = [
  // {
  //   title: "Patrick Doodt",
  //   description: "Full-service video production from conceptualisation to distribution",
  //   permalink: "http://www.patrickdoodt.com",
  // },
  {
    title: "Paweł Pankowicz",
    description: "Social media management, employer branding and event communications",
    permalink: "https://www.pankowicz.com",
  },
];

export const CollaboratorsContainer = () => {
  return (
    <section>
      <Heading tag="h2">Collaborators</Heading>
      <WorksList works={collaborators} />
    </section>
  );
};
