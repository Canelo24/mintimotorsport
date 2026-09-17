import { images } from "./images.generated";

/**
 * Heritage. The site says Minti has been inside the East African Safari
 * Classic Rally since 2020 and nothing about who owns the organisation
 * (client instruction, 2026-09-15). Crews are crews we have run. Dates
 * confirmed by the client 2026-09-10.
 */

export const heritageHero = {
  kicker: "SS5 · HERITAGE",
  headline: "We have stood in this dust before.",
  image: images.heritageMintiStageBw,
  /** The record in three numbers, set directly under the hero. */
  record: [
    { value: "2017", label: "FOUNDED · FAMILY RUN" },
    { value: "FROM 2017", label: "CREWS RUN" },
    { value: "FROM 2020", label: "INSIDE THE SAFARI CLASSIC" },
  ],
};

export const stewardship = {
  code: "SS5/01 · THE SAFARI CLASSIC",
  title: "Inside the Safari Classic.",
  tenure: { value: "FROM 2020", label: "INSIDE THE EVENT" },
  statement: "Inside the Safari Classic since 2020.",
  body: "We know what this event does to cars, crews and schedules. That is the part of a Safari entry that is hardest to buy.",
};

export const crews = {
  code: "SS5/02 · CREWS WE HAVE RUN · FROM 2017",
  title: "The names.",
  entries: [
    { name: "Ian Duncan", car: "NISSAN 240RS" },
    { name: "Carl “Flash” Tundo", car: "VW R5" },
    { name: "Maxine Wahome & Safina Khan", car: "ALL-KENYAN LADIES CREW" },
  ],
};

export const timeline = {
  code: "SS5/03 · DATED",
  number: "03",
  title: "The long road.",
  entries: [
    {
      year: "2017",
      text: "Joey Ghose founds Minti Motorsport. UK registered, family run, at home in Nairobi.",
    },
    {
      year: "FROM 2017",
      text: "Crews run under the Minti banner: Duncan, Tundo, Wahome and Khan.",
    },
    {
      year: "FROM 2020",
      text: "Minti's years inside the East African Safari Classic Rally begin.",
    },
    {
      year: "NOW",
      text: "The exclusive regional MST partnership and the Arrive & Drive programme.",
    },
  ],
};
