import { TODO } from "./site";
import { images } from "./images.generated";

/**
 * Home page copy. Voice rules (client feedback, 2026-09-01): no em dashes,
 * plain sentences, British, written the way a rally person would say it.
 * Factual gaps carry {{TODO}} markers (see CONTENT-TODO.md).
 */

export const hero = {
  kicker: "ARRIVE & DRIVE · EAST AFRICAN SAFARI CLASSIC 2027",
  headline: "A seat in the Safari.",
  sub: "We are taking a small number of drivers to the Safari Classic in 2027. New MST Escort, our crew, everything handled from Nairobi. You drive.",
  primaryCta: "Apply for the seat",
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

export const driveSequence = {
  instruction: "SS1/03 · HOW THE WEEK RUNS",
  title: "First call to finish ramp",
  lead: "Five stops between deciding to do it and getting it done.",
  cards: [
    {
      tc: "TC1",
      title: "Arrival",
      body: "You land, we collect. The car is ready, the crew knows your name, your kit is laid out on the bench.",
      image: images.drive01ArrivalNairobi,
    },
    {
      tc: "TC2",
      title: "Shakedown",
      body: "Private murram, no audience. Seat time until the car stops feeling borrowed.",
      image: images.drive02ShakedownTest,
    },
    {
      tc: "TC3",
      title: "Scrutineering",
      body: "Our paperwork, our queue, our problem. You sign where we point.",
      image: images.drive03ReadyToStart,
    },
    {
      tc: "TC4",
      title: "The event",
      body: "Service crew, chase cars, spares, and a plan for when the plan changes. You drive the road in front of you.",
      image: images.drive04TheEvent,
    },
    {
      tc: "TC5",
      title: "The finish",
      body: "Time card stamped, dust still on the paint. Then dinner, and the question of what you do next year.",
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
  body: "MST build new and original Escorts to Safari specification, and Minti holds the exclusive rights to run them in this region. These are cars made for this event, not adapted to it.",
  image: images.carsMk1MountainRoad,
  spec: [
    { k: "BUILD", v: "MST CARS" },
    { k: "ENGINE", v: "BDG 2.0 · 260+ BHP" },
    { k: "GEARBOX", v: "HOLLINGER ZF SAFARI" },
    { k: "DAMPERS", v: "REIGER 4-WAY ADJUSTABLE" },
    { k: "BRAKES", v: "AP RACING · TILTON" },
  ],
};

export const people = {
  instruction: "SS1/05 · THE PEOPLE",
  title: "Names you can phone",
  lead: "Before you spend this kind of money you should know exactly who you are dealing with.",
  joey: {
    name: "Joey Ghose",
    role: "Founder & team principal",
    body: "Joey built Minti and still runs every driver programme himself. He takes the first call, and he is on the radio when it counts.",
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
      year: TODO("founding year"),
      text: "Founded by Joey Ghose. UK registered, family run, at home in Nairobi.",
    },
    {
      year: TODO("EASCR stake years"),
      text: "Held a controlling stake in East African Safari Classic Rally Ltd and ran the event with pride. It is independently run today.",
    },
    {
      year: TODO("crew years"),
      text: "Ran crews including Ian Duncan and Carl Tundo, and brought Maxine Wahome and Safina Khan into classic rallying.",
    },
  ],
};

export const ask = {
  headline: "The 2027 start list is short.",
  body: "We will only take on as many drivers as we can run properly. Once the 2027 cars are spoken for, the next chance is years away.",
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
