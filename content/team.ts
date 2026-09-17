import { images } from "./images.generated";

/**
 * SS4 · THE TEAM. Copy for /the-team.
 *
 * Facts are limited to the verified list in content/site.ts. Joey Ghose is
 * the only named person on the site. Captions state only what is visible
 * in the frame and never carry a location.
 */

export const teamHero = {
  kicker: "SS4 · THE TEAM",
  headline: "Names you can phone.",
  line: "UK registered. Family run. At home in Nairobi.",
  image: images.teamCrewService,
  /** Keeps the crew's heads under the carport roof in the 100svh crop. */
  position: "50% 35%",
};

/** The principal. */
export const ghose = {
  code: "SS4/01 · PRINCIPAL",
  name: "Joey Ghose",
  role: "FOUNDER & TEAM PRINCIPAL",
  caption: "JOEY GHOSE · PRINCIPAL",
  body: "Joey built Minti and still runs every driver programme himself. He has lived inside the Safari Classic for years, and he knows which crossing floods first when the long rains come early.",
  image: images.peopleJoeyGhose,
};

/** Kept for its export. The hero now carries the crew photograph instead. */
export const familyPhoto = images.teamCrewWorking;

/** SS4/02 · Home ground. */
export const base = {
  code: "SS4/02 · THE BASE",
  number: "02",
  title: "Home ground.",
  statement: "Where the team lives, not somewhere it deploys to.",
  body: "Cars are prepared and shaken down on the surfaces they race on.",
  plate: {
    image: images.teamWorkshopBay,
    caption: "THE BAY · A FRESH BUILD",
    position: "50% 55%",
  },
  facts: [
    { k: "WORKSHOP", v: "Galleria Business Park, Loita" },
    { k: "COORDINATES", v: "1.2921° S, 36.8219° E" },
    { k: "REGISTERED", v: "United Kingdom" },
    { k: "TEST ROADS", v: "Private murram" },
  ],
};

/** SS4/03 · The service crew. */
export const crew = {
  code: "SS4/03 · SERVICE",
  number: "03",
  title: "The 2am department.",
  plates: {
    shirts: {
      image: images.peopleCrewAtWork,
      caption: "TEAM SHIRTS · SERVICE",
      position: "50% 30%",
    },
    wheelNuts: {
      image: images.journalServiceParkCraft,
      caption: "WHEEL NUTS · MID CHANGE",
      position: "55% 50%",
    },
  },
  body: "Rallies are won between midnight and scrutineering. The service crew is the part of the programme you will be gladdest you paid for.",
};

/** The finish control. */
export const finish = {
  headline: "Every name, by shakedown.",
  line: "The people who keep the car alive, and the seat they run.",
};
