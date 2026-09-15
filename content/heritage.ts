import { images } from "./images.generated";

/**
 * Heritage: every claim here is PAST TENSE by design (brief §2/§3).
 * The EASCR stake is closed history, not current ownership, and the event
 * is independently run today. Crews are crews we have run. Dates confirmed
 * by the client 2026-09-10.
 */

export const heritageHero = {
  kicker: "SS5 · HERITAGE",
  headline: "We have stood in this dust before.",
  image: images.heritageMintiStageBw,
  /** The record in three numbers, set directly under the hero. */
  record: [
    { value: "2017", label: "FOUNDED · FAMILY RUN" },
    { value: "FROM 2017", label: "CREWS RUN" },
    { value: "FROM 2020", label: "THE SAFARI CLASSIC YEARS · CLOSED" },
  ],
};

export const stewardship = {
  code: "SS5/01 · THE SAFARI CLASSIC YEARS",
  title: "The stewardship years.",
  tenure: { value: "FROM 2020", label: "TENURE · CHAPTER CLOSED" },
  statement:
    "Minti held a controlling stake in East African Safari Classic Rally Ltd and took on the stewardship of one of rallying's great events. That chapter has closed. The rally is independently run today.",
  body: "Entering with Minti gives you no special standing with the organiser. What those years left behind is harder to buy: we know what this event does to cars, crews and schedules.",
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
      text: "A controlling stake in East African Safari Classic Rally Ltd. That chapter has closed.",
    },
    {
      year: "NOW",
      text: "The exclusive regional MST partnership and the Arrive & Drive programme.",
    },
  ],
};
