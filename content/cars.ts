import { TODO } from "./site";
import { images } from "./images.generated";

export const carsHero = {
  kicker: "SS3 — THE CARS",
  headline: "Built for this road.",
  sub: "New and original Ford Escort Mk1 and Mk2, Safari specification, from MST Cars — the partnership is exclusive for the region.",
};

export const partnership = {
  title: "The MST partnership",
  body: [
    "MST builds new and original Escorts the way the factory teams wished they could have: proper shells, modern safety, endurance-event engineering under a period silhouette. Minti holds the exclusive regional partnership for these cars — new builds and original examples, prepared for the long, rough, hot events this side of the world.",
    "What that means practically: the same parts book, the same build standard, and a workshop in Nairobi that knows every fastener because it has torqued all of them.",
  ],
  disclaimer:
    "MST-built cars are new-build or restored competition machinery to Safari specification — where a car is a new build rather than an original Ford shell, we say so, in the car's papers and in person.",
};

export const models = [
  {
    name: "Escort Mk1",
    image: images.carsMk1MountainRoad,
    blurb:
      "The original shape, the one the Safari made famous. Light, direct, and honest about everything the road is doing.",
    spec: [
      { k: "BUILD", v: "MST CARS — NEW / ORIGINAL" },
      { k: "SPEC", v: "SAFARI — ENDURANCE" },
      { k: "ENGINE", v: TODO("Mk1 engine specification") },
      { k: "GEARBOX", v: TODO("Mk1 gearbox specification") },
      { k: "WEIGHT", v: TODO("Mk1 competition weight") },
    ],
  },
  {
    name: "Escort Mk2",
    image: images.carsMk2Stage,
    blurb:
      "The definitive rally Escort. More room, more strength, the same balance — the default choice for a first Safari-distance event.",
    spec: [
      { k: "BUILD", v: "MST CARS — NEW / ORIGINAL" },
      { k: "SPEC", v: "SAFARI — ENDURANCE" },
      { k: "ENGINE", v: TODO("Mk2 engine specification") },
      { k: "GEARBOX", v: TODO("Mk2 gearbox specification") },
      { k: "WEIGHT", v: TODO("Mk2 competition weight") },
    ],
  },
];

export const buildProcess = {
  title: "What Safari specification actually means",
  intro:
    "A gravel-spec car and a Safari-spec car are different animals. The difference is everything that happens after the paint.",
  image: images.carsBuildMstWorkshop,
  detail: images.carsCockpitDetail,
  steps: [
    {
      title: "Strength before speed",
      body: "Underbody protection, raised and reinforced suspension, cooling for equatorial heat, and the hundred small brackets that decide whether a hit is a story or a retirement.",
    },
    {
      title: "Safety, current-spec",
      body: "Cage, seats, harnesses and extinguisher systems to current standards — the period look stops at the paint.",
    },
    {
      title: "Serviceability",
      body: "Everything the crew touches at 2am is placed to be touched at 2am. Fast-release panels, marked connectors, spares that actually interchange.",
    },
    {
      title: "Shakedown, signed off",
      body: "Every car earns its start on private murram first — driven hard, re-torqued, and signed off by the crew chief before your name goes on the door.",
    },
  ],
};

export const otherMachinery = {
  title: "Beyond the Escorts",
  body: "The Escorts are the backbone of the arrive-and-drive programme. We have run other machinery for other crews — see the heritage page — and we prepare owner cars case by case. If you already have the car and need the team, start the same way: with a call.",
};
