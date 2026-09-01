import { TODO } from "./site";
import { images } from "./images.generated";

/**
 * Heritage — every claim here is PAST TENSE by design (brief §3/§9):
 * the EASCR stake is stewardship history, not current ownership;
 * drivers are crews we have run, year-labelled.
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
  years: TODO("years of the EASCR controlling stake (from–to)"),
};

export const crews = {
  title: "Crews we have run",
  intro:
    "Talent we have backed and entries we have run. Listed in the past tense, because that is what a record is.",
  entries: [
    {
      name: "Ian Duncan",
      car: "Nissan 240RS",
      years: TODO("Duncan years"),
      body: "One of Kenya's greats. We ran his 240RS, a crowd favourite and a mechanic's education.",
    },
    {
      name: "Carl “Flash” Tundo",
      car: "VW R5",
      years: TODO("Tundo years"),
      body: "Multiple Safari winner. Running a crew at Tundo's pace teaches a service park what ready actually means.",
    },
    {
      name: "Maxine Wahome & Safina Khan",
      car: TODO("Wahome/Khan car"),
      years: TODO("Wahome/Khan year"),
      body: "An all-Kenyan ladies crew we brought into classic rallying. The sport's future arriving through its history.",
    },
  ],
};

export const timeline = {
  title: "The long road, dated",
  note: "Exact years await sign-off from the family. The order is right and the dates will follow.",
  entries: [
    { year: TODO("year"), text: "Joey Ghose founds Minti Motorsport. UK-registered, family-run, operational roots in Nairobi." },
    { year: TODO("year"), text: "First entries run under the Minti banner in East African classic rallying." },
    { year: TODO("years"), text: "Controlling stake in East African Safari Classic Rally Ltd. The stewardship years." },
    { year: TODO("year"), text: "Crews run: Ian Duncan in the Nissan 240RS, Carl “Flash” Tundo in the VW R5." },
    { year: TODO("year"), text: "Maxine Wahome and Safina Khan brought into classic rallying, an all-Kenyan crew." },
    { year: TODO("year"), text: "Stake in the rally organisation passes on; the event continues independently run." },
    { year: TODO("year"), text: "Exclusive regional partnership with MST Cars announced: new and original Escort Mk1/Mk2, Safari spec." },
    { year: "NOW", text: "The arrive-and-drive programme. A small number of seats, run properly, from Nairobi." },
  ],
};
