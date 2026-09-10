import { images } from "./images.generated";

/**
 * Heritage — every claim here is PAST TENSE by design (brief §3/§9):
 * the EASCR stake is stewardship history, not current ownership;
 * drivers are crews we have run. Dates confirmed by the client 2026-09-10.
 */

export const heritageHero = {
  kicker: "SS5 · HERITAGE",
  headline: "We've stood in this dust before.",
  sub: "The record, in the correct tense. What the family built, the event it stewarded, and the crews it has run.",
  image: images.heritageMintiStageBw,
};

export const stewardship = {
  title: "The Safari Classic years",
  body: [
    "Minti previously held a controlling stake in East African Safari Classic Rally Ltd and took on the stewardship of one of rallying's great events. The entries, the route, the safety plan, and the thousand quiet decisions that make an event of that scale happen at all.",
    "That chapter has closed. The rally is independently run today, and entering with Minti gives you no special standing with the organiser, nor should it. What those years left behind is harder to buy. We know what this event does to cars, crews and schedules, because we learned it from the inside.",
  ],
  years: "FROM 2020",
};

export const crews = {
  title: "Crews we have run",
  intro:
    "Talent we have backed and entries we have run since 2017. Listed in the past tense, because that is what a record is.",
  entries: [
    {
      name: "Ian Duncan",
      car: "Nissan 240RS",
      body: "One of Kenya's greats. We ran his 240RS, a crowd favourite and a mechanic's education.",
    },
    {
      name: "Carl “Flash” Tundo",
      car: "VW R5",
      body: "Multiple Safari winner. Running a crew at Tundo's pace teaches a service park what ready actually means.",
    },
    {
      name: "Maxine Wahome & Safina Khan",
      car: "All-Kenyan ladies crew",
      body: "An all-Kenyan ladies crew we brought into classic rallying. The sport's future arriving through its history.",
    },
  ],
};

export const timeline = {
  title: "The long road, dated",
  note: "The short version. The longer stories get told over dinner in Nairobi.",
  entries: [
    {
      year: "2017",
      text: "Joey Ghose founds Minti Motorsport. UK-registered, family-run, operational roots in Nairobi.",
    },
    {
      year: "FROM 2017",
      text: "Crews run under the Minti banner: Ian Duncan in the Nissan 240RS, Carl “Flash” Tundo in the VW R5, and Maxine Wahome and Safina Khan brought into classic rallying.",
    },
    {
      year: "FROM 2020",
      text: "Controlling stake in East African Safari Classic Rally Ltd and the stewardship years. That chapter has closed and the event is independently run today.",
    },
    {
      year: "NOW",
      text: "The exclusive regional MST partnership and the arrive-and-drive programme. A small number of seats, run properly, from Nairobi.",
    },
  ],
};
