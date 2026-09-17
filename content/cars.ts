import { images } from "./images.generated";

/**
 * /the-cars content. Editorial pass 2026-09-15: the page is image-led and
 * the reader meets the car before a sentence. Every fact here is on the
 * verified list in content/site.ts (MST partnership, Safari specification,
 * the Nairobi workshop). No prices, no technical specification tables
 * (withdrawn on client instruction, 2026-09-10).
 */

export const carsHero = {
  kicker: "SS3 · THE CARS · MST · SAFARI SPECIFICATION",
  headline: "The Escort.",
  /** The red Mk1 on the wet pass. This frame is the Mk1 chapter's photograph. */
  image: images.journalWhyTheEscort,
  position: "62% 50%",
};

export const partnership = {
  statement: "MST build them. Minti holds the exclusive regional partnership.",
  body: "New and original, to Safari specification. Same parts book, same build standard, and a workshop in Nairobi that has torqued every fastener.",
  footnote:
    "Where a car is a new build rather than an original Ford shell, we say so in its papers and in person.",
};

export const models = {
  mk1: {
    code: "SS3/01 · MK1",
    number: "MK1",
    title: "Escort Mk1.",
    statement: "The original shape. Light, direct, and honest about everything the road is doing.",
  },
  mk2: {
    code: "SS3/02 · MK2 · THE 2027 CAR",
    number: "MK2",
    title: "Escort Mk2.",
    statement: "More room, more strength, the same balance. The car the 2027 seat is built on.",
    image: images.carsMk2GoldMinilites,
    caption: "ESCORT MK2 · GOLD WHEELS, CIBIE LAMPS",
  },
};

export const buildProcess = {
  code: "SS3/03 · SAFARI SPECIFICATION",
  number: "03",
  title: "After the paint.",
  /** The 911 frames: always "the competition car", never "the Escort". */
  plates: {
    cage: { image: images.carsBuildMstWorkshop, caption: "WELDED-IN CAGE" },
    dial: { image: images.carsCockpitDetail, caption: "PERIOD DIAL · THE COMPETITION CAR" },
  },
  steps: [
    {
      n: "01",
      title: "Strength before speed.",
      line: "Underbody protection, raised suspension, cooling for equatorial heat.",
    },
    {
      n: "02",
      title: "Safety, current spec.",
      line: "Cage, seats, harnesses and extinguisher systems. The period look stops at the paint.",
    },
    {
      n: "03",
      title: "Serviceability.",
      line: "Everything the crew touches at 2am is placed to be touched at 2am.",
    },
    {
      n: "04",
      title: "Shakedown, signed off.",
      line: "Every car earns its start on private murram before your name goes on the door.",
    },
  ],
};

/** The finish: owner cars, prepared case by case. Start with a call. */
export const otherMachinery = {
  eyebrow: "YOUR CAR, OUR TEAM · 2027",
  headline: "Already have the car?",
  line: "Your car, our team. Start the same way, with a call.",
  ticketMeta: "YOUR CAR, OUR TEAM · 2027 ENTRY",
  ticketLabel: "Start with a call",
  href: "/enquire",
};
