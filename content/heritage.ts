import { TODO } from "./site";
import { images } from "./images.generated";

/**
 * Heritage — every claim here is PAST TENSE by design (brief §3/§9):
 * the EASCR stake is stewardship history, not current ownership;
 * drivers are crews we have run, year-labelled.
 */

export const heritageHero = {
  kicker: "SS5 — HERITAGE",
  headline: "We've stood in this dust before.",
  sub: "The record, in the correct tense: what the family built, the event it stewarded, and the crews it has run.",
  image: images.heritageEascrStage,
};

export const stewardship = {
  title: "The Safari Classic years",
  body: [
    "Minti previously acquired a controlling stake in East African Safari Classic Rally Ltd and took on the stewardship of one of rallying's great events — the entries, the route, the safety plan, the thousand quiet decisions that make a 4,000-kilometre-class event happen at all.",
    "That chapter has closed: the rally is now independently run, and entering it with Minti confers no special standing with the organiser — nor should it. What the years left behind is harder to buy: the operational knowledge of what this event does to cars, crews and schedules, learned from the inside.",
  ],
  years: TODO("years of the EASCR controlling stake (from–to)"),
};

export const crews = {
  title: "Crews we have run",
  intro:
    "Talent we have backed and entries we have run — listed in the past tense, because that's what a record is.",
  entries: [
    {
      name: "Ian Duncan",
      car: "Nissan 240RS",
      years: TODO("Duncan years"),
      body: "One of Kenya's greats. We ran his 240RS — a crowd's favourite and a mechanic's education.",
      image: images.heritageDuncan240rs,
    },
    {
      name: "Carl “Flash” Tundo",
      car: "VW R5",
      years: TODO("Tundo years"),
      body: "Multiple Safari winner. Running a crew at Tundo's pace teaches a service park what 'ready' actually means.",
      image: images.heritageTundoR5,
    },
    {
      name: "Maxine Wahome & Safina Khan",
      car: TODO("Wahome/Khan car"),
      years: TODO("Wahome/Khan year"),
      body: "An all-Kenyan ladies crew we introduced to classic rallying — the sport's future arriving through its history.",
      image: images.heritageWahomeKhan,
    },
  ],
};

export const timeline = {
  title: "The long road, dated",
  note: "Exact years await the family's sign-off — the order is right, the dates will be.",
  entries: [
    { year: TODO("year"), text: "Joey Ghose founds Minti Motorsport. UK-registered, family-run, operational roots in Nairobi." },
    { year: TODO("year"), text: "First entries run under the Minti banner in East African classic rallying." },
    { year: TODO("years"), text: "Controlling stake in East African Safari Classic Rally Ltd — the stewardship years." },
    { year: TODO("year"), text: "Crews run: Ian Duncan (Nissan 240RS); Carl “Flash” Tundo (VW R5)." },
    { year: TODO("year"), text: "Maxine Wahome and Safina Khan introduced to classic rallying — the all-Kenyan ladies crew." },
    { year: TODO("year"), text: "Stake in the rally organisation passes on; the event continues independently run." },
    { year: TODO("year"), text: "Exclusive regional partnership with MST Cars announced: new and original Escort Mk1/Mk2, Safari spec." },
    { year: "NOW", text: "The arrive-and-drive programme: a small number of seats, run properly, from Nairobi." },
  ],
};
