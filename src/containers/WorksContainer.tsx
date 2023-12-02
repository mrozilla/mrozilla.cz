import React from "react";

import { Heading, WorksList } from "~components";

const works = [
  {
    title: "George",
    permalink: "https://george-labs.com",
    tags: ["Design system", "Development"],
  },
  {
    title: "Leadspicker",
    permalink: "https://web.archive.org/web/20161008164147/http://leadspicker.com/",
    tags: ["Branding", "Design", "Website"],
  },
  {
    title: "Vodafone Idea of the Year",
    permalink: "https://napadroku.cz/",
    tags: ["Design", "Website"],
  },
  {
    title: "hiMoment",
    permalink: "https://web.archive.org/web/20170715025201/https://himoment.com/",
    tags: ["Branding", "Design", "Development", "Product"],
  },
  {
    title: "Pioneers",
    permalink: "https://web.archive.org/web/20160420133432/https://pioneers.io/",
    tags: ["Design", "Website", "Development"],
  },
  {
    title: "Mov'in Europe",
    permalink: "https://movineurope.esn.org/",
    tags: ["Branding", "Design", "Website", "Product"],
  },
  {
    title: "Erasmus Student Network",
    permalink: "https://esn.org/",
    tags: ["Branding", "Design"],
  },
];

export const WorksContainer = () => {
  return (
    <section id="work">
      <Heading tag="h2">Latest works</Heading>
      <WorksList works={works} />
    </section>
  );
};
