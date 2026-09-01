import { TODO } from "./site";
import { images } from "./images.generated";

/**
 * Home page copy — Minti's voice: direct, understated, technically literate.
 * Factual gaps carry {{TODO}} markers (see CONTENT-TODO.md).
 */

export const hero = {
  kicker: "ARRIVE & DRIVE · EAST AFRICAN SAFARI CLASSIC 2027",
  headline: "A seat in the Safari.",
  sub: "One programme, one event, a handful of cars. We build it, crew it and run it — you drive the 2027 Safari Classic.",
  primaryCta: "Apply for the seat",
  primaryHref: "/enquire?e=eascr2027",
  secondaryCta: "The full programme",
  secondaryHref: "/the-drive",
  image: images.heroSafariJumpMurram,
};

/** The live campaign — client-confirmed (2026-09-01). */
export const campaign = {
  eyebrow: "NOW TAKING APPLICATIONS",
  title: "Arrive & Drive — East African Safari Classic 2027",
  cta: "Apply for the seat",
  href: "/enquire?e=eascr2027",
  note: "Entries are granted by the event's organisers; Minti prepares, enters and runs your car.",
};

export const proposition = [
  "You bring the will to do it.",
  "We bring the car, the crew, and a family that has run this ground for decades.",
  "That is the whole arrangement.",
];

export const credibility = [
  { label: "REGISTERED", value: "UNITED KINGDOM" },
  { label: "BASE", value: "NAIROBI · 1.2921°S 36.8219°E" },
  { label: "CAR PARTNER", value: "MST CARS — EXCLUSIVE, REGIONAL" },
];

export const driveSequence = {
  instruction: "SS1/02 — ARRIVE & DRIVE · SAFARI CLASSIC 2027",
  title: "First call to finish ramp",
  lead: "The 2027 seat, run end to end from Nairobi. Five controls between deciding and finishing.",
  cards: [
    {
      tc: "TC1",
      title: "Arrival",
      body: "You land. We collect. The car is on its wheels, the crew is briefed, your kit is on the bench with your name on it.",
      image: images.drive01ArrivalNairobi,
    },
    {
      tc: "TC2",
      title: "Shakedown",
      body: "Private murram, no audience. Seat time until the car stops feeling borrowed. Pace notes, trip meter, the co-driver's voice.",
      image: images.drive02ShakedownTest,
    },
    {
      tc: "TC3",
      title: "Scrutineering",
      body: "Our paperwork, our queue, our problem. You sign where we point and shake the hands worth shaking.",
      image: images.drive03ReadyToStart,
    },
    {
      tc: "TC4",
      title: "The event",
      body: "Service crew, chase cars, spares and a plan for when the plan changes. You drive the road in front of you. We handle the rest of it.",
      image: images.drive04TheEvent,
    },
    {
      tc: "TC5",
      title: "The finish",
      body: "The ramp, the dust on the paint, the time card stamped. Then dinner, and the question of which event is next.",
      image: images.drive05FinishRamp,
    },
  ],
};

export const routesIn = {
  line: "Not an arrive-and-drive buyer?",
  items: [
    {
      name: "Arrive & Drive",
      body: "A seat in our MST-built Escort with the whole operation around it. Land in Nairobi; drive.",
      href: "/the-drive#arrive-and-drive",
    },
    {
      name: "Your Car, Our Team",
      body: "You own the machinery. We handle preparation, freight, testing and the event itself.",
      href: "/the-drive#your-car-our-team",
    },
    {
      name: "Commission a Safari Car",
      body: "A new MST build specified around you, with storage, testing and a programme of events.",
      href: "/the-drive#commission",
    },
  ],
};

export const car = {
  instruction: "SS1/03 — THE CAR",
  title: "The Escort, done properly",
  body: "New and original Ford Escort Mk1 and Mk2, built to Safari specification by MST Cars. The partnership is exclusive for the region: the same builds, the same parts book, the same people who put them together.",
  image: images.carsMk1MountainRoad,
  spec: [
    { k: "BUILD", v: "MST CARS" },
    { k: "SHELL", v: "ESCORT MK1 / MK2" },
    { k: "SPEC", v: "SAFARI — ENDURANCE" },
  ],
};

export const people = {
  instruction: "SS1/04 — THE PEOPLE",
  title: "Names you can phone",
  lead: "A six-figure decision should come with people attached. These are ours.",
  cards: [
    {
      name: "Joey Ghose",
      role: "Founder & team principal",
      body: "Built Minti, runs the programme, and answers the phone himself. Your first call and your last one before the start.",
      image: images.peopleJoeyGhose,
    },
    {
      name: TODO("crew chief name"),
      role: "Crew chief",
      body: "Owns the car from build to finish ramp. If it rolls, bolts or seals, it goes through this bench.",
      image: images.peopleCrewChief,
    },
    {
      name: "The Nairobi workshop",
      role: "Home ground",
      body: "Preparation, spares and testing on home ground in Nairobi — not a container shipped in three weeks before the start.",
      image: images.peopleWorkshopNairobi,
    },
  ],
};

export const heritageStrip = {
  instruction: "SS1/05 — WHERE WE COME FROM",
  title: "Heritage, briefly",
  entries: [
    {
      year: TODO("founding year"),
      text: "Founded by Joey Ghose. UK-registered, family-run, operational roots in Nairobi.",
    },
    {
      year: TODO("EASCR stake years"),
      text: "Held a controlling stake in East African Safari Classic Rally Ltd — stewardship we're proud of. The event is now independently run.",
    },
    {
      year: TODO("crew years"),
      text: "Ran crews including Ian Duncan and Carl “Flash” Tundo, and introduced Maxine Wahome and Safina Khan to classic rallying.",
    },
  ],
};

export const ask = {
  headline: "The 2027 start list is short.",
  body: "We will run a small number of cars on the Safari Classic 2027, and we will run them properly. When they are allocated, the next start is years away.",
  scarcityLine: {
    seats: TODO("number of seats available"),
    event: "EAST AFRICAN SAFARI CLASSIC 2027",
  },
  cta: "Apply for the seat",
  href: "/enquire?e=eascr2027",
  image: images.askMurramRoadAerial,
};

export const marqueeLine =
  "PRESERVING HERITAGE · FIRST CALL · SHAKEDOWN · SCRUTINEERING · FLYING FINISH · SERVICE OUT · FINISH RAMP";
