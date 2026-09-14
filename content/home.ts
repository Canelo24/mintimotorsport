import { images } from "./images.generated";

/**
 * Home page copy. Voice rules (client feedback, 2026-09-01): no em dashes,
 * plain sentences, British, written the way a rally person would say it.
 * Dates and contact details confirmed by the client 2026-09-10.
 */

export const hero = {
  kicker: "ARRIVE & DRIVE · EAST AFRICAN SAFARI CLASSIC 2027",
  headline: "A seat in the Safari.",
  sub: "A small number of drivers. A new MST Escort each. Everything run from Nairobi. You drive.",
  primaryCta: "Take a seat",
  primaryHref: "/enquire?e=eascr2027",
  secondaryCta: "The full programme",
  secondaryHref: "/the-drive",
  image: images.heroSafariJumpMurram,
};

export const proposition = [
  "Rallying in East Africa is hard to organise and easy to get wrong.",
  "We do it from Nairobi, with our own crew, on roads we have known for years.",
  "You concentrate on the driving. The rest is our problem.",
];

export const credibility = [
  { label: "REGISTERED", value: "UNITED KINGDOM" },
  { label: "BASE", value: "NAIROBI · 1.2921°S 36.8219°E" },
  { label: "CAR PARTNER", value: "MST CARS · EXCLUSIVE, REGIONAL" },
];

/** Card copy kept deliberately short (client, 2026-09-14): the images carry it. */
export const driveSequence = {
  instruction: "SS1/03 · HOW THE WEEK RUNS",
  title: "First call to finish ramp",
  lead: "Five stops between deciding to do it and getting it done.",
  cards: [
    {
      tc: "01",
      title: "Arrive",
      body: "You land in Nairobi. We collect you.",
      image: images.drive01ArrivalNairobi,
    },
    {
      tc: "02",
      title: "Shakedown",
      body: "Private murram. Seat time until the car feels yours.",
      image: images.drive02ShakedownTest,
    },
    {
      tc: "03",
      title: "Scrutineering",
      body: "Our paperwork. Our problem.",
      image: images.drive03ReadyToStart,
    },
    {
      tc: "04",
      title: "The event",
      body: "You drive. We run everything else.",
      image: images.drive04TheEvent,
    },
    {
      tc: "05",
      title: "The finish",
      body: "Time card stamped. Dust still on the paint.",
      image: images.drive05FinishRamp,
    },
  ],
};

export const routesIn = {
  line: "Not after an arrive-and-drive seat?",
  items: [
    {
      name: "Arrive & Drive",
      body: "",
      href: "/the-drive#arrive-and-drive",
    },
    {
      name: "Your Car, Our Team",
      body: "",
      href: "/the-drive#your-car-our-team",
    },
    {
      name: "Commission a Safari Car",
      body: "",
      href: "/the-drive#commission",
    },
  ],
};

export const car = {
  instruction: "SS1/04 · THE CAR",
  title: "The Escort, done properly",
  body: "MST build new and original Escorts to Safari specification, and Minti holds the exclusive rights to run them in this region. These are cars made for this event, not adapted to it. Built in the UK, prepared and shaken down in Nairobi, signed off on the roads they race on.",
  image: images.carsMk1MountainRoad,
};

export const people = {
  instruction: "SS1/05 · THE PEOPLE",
  title: "Names you can phone",
  lead: "Before you spend this kind of money you should know exactly who you are dealing with.",
  joey: {
    name: "Joey Ghose",
    role: "Founder & team principal",
    body: "Joey built Minti and still runs every driver programme himself. He takes the first call, and he is on the radio when it counts.",
    image: images.peopleJoeyGhose,
  },
  cards: [
    {
      name: "The crew",
      role: "Service",
      body: "The people who keep the car alive. Wheels off, torches on, tea going cold on the bench.",
      image: images.peopleCrewAtWork,
    },
    {
      name: "The workshop",
      role: "Nairobi",
      body: "Built, prepared and tested here. Not freighted in three weeks before the start and hoped for.",
      image: images.peopleWorkshopNairobi,
    },
  ],
};

export const heritageStrip = {
  instruction: "SS1/06 · WHERE WE COME FROM",
  title: "Heritage, briefly",
  entries: [
    {
      year: "2017",
      text: "Founded by Joey Ghose. UK registered, family run, at home in Nairobi.",
    },
    {
      year: "FROM 2020",
      text: "Held a controlling stake in East African Safari Classic Rally Ltd and ran the event with pride. It is independently run today.",
    },
    {
      year: "FROM 2017",
      text: "Ran crews including Ian Duncan and Carl Tundo, and brought Maxine Wahome and Safina Khan into classic rallying.",
    },
  ],
};

export const ask = {
  headline: "The 2027 start list is short.",
  body: "We will only take on as many drivers as we can run properly. Once the 2027 cars are spoken for, the next chance is years away.",
  scarcityLine: "EAST AFRICAN SAFARI CLASSIC 2027 · APPLICATIONS OPEN",
  cta: "Take a seat",
  href: "/enquire?e=eascr2027",
  image: images.askMurramRoadAerial,
};

export const marqueeLine =
  "PRESERVING HERITAGE · FIRST CALL · SHAKEDOWN · SCRUTINEERING · FLYING FINISH · SERVICE OUT · FINISH RAMP";
