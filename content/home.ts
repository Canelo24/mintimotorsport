import { images } from "./images.generated";

/**
 * Home page copy. Round 3 (2026-09-15): the photographs and the numbers
 * carry the page; the words are one line per section. Plain British
 * sentences, no em dashes, nothing outside the verified facts.
 */

export const hero = {
  kicker: "THE 2027 SEAT · EAST AFRICAN SAFARI CLASSIC",
  /** Two lines, one face: set exactly as the client's sample, "ARRIVE &" over "DRIVE". */
  headline: { line1: "Arrive &", line2: "Drive." },
  sub: "A new MST Escort. A Nairobi crew. You drive.",
  primaryCta: "Take a seat",
  primaryHref: "/enquire?e=eascr2027",
  secondaryCta: "The programme",
  secondaryHref: "/the-drive",
  image: images.heroSafariJumpMurram,
};

export const route = {
  code: "SS1/01 · THE ROUTE",
  statement: "Hard to organise. Easy to get wrong. We run it from Nairobi with our own crew. You drive.",
  numerals: [
    { value: "2017", label: "FOUNDED · FAMILY RUN" },
    { value: "UNITED KINGDOM", label: "REGISTERED" },
    { value: "NAIROBI", label: "BASE · KENYA" },
  ],
};

export const seat = {
  code: "SS1/02 · APPLICATIONS OPEN",
  title: "The 2027 seat.",
  line: "One all-in hire cost, priced on application. The figure is given plainly on the first call.",
  board: images.driveHeroCockpit,
  boardCaption: "PERIOD DIALS · THE COMPETITION CAR",
  /** The package as figures, from the client's own sheet (content/eascr2027). */
  numerals: [
    { value: "1", label: "NEW MST ESCORT MK2" },
    { value: "40", label: "NEW GRAVEL TYRES" },
    { value: "3", label: "SETS OF SPARES" },
    { value: "5", label: "MECHANICS" },
    { value: "2", label: "LAND CRUISERS" },
    { value: "3", label: "SUPPORT DRIVERS" },
  ],
  allIn: "ENTRY, FUEL, BEDS AND MEALS · ALL IN",
  manifest: { label: "The full manifest", href: "/the-drive#arrive-and-drive" },
};

export const car = {
  code: "SS1/03 · THE CAR",
  title: "The Escort, done properly.",
  statement: "Built in the UK to Safari specification. Shaken down in Nairobi.",
  tall: { image: images.carsBuildMstWorkshop, caption: "WELDED-IN CAGE" },
  wide: { image: images.carsMk1MountainRoad, caption: "ESCORT MK1 · GOLD WHEELS, WET PASS" },
  cta: { label: "See the car", href: "/the-cars" },
};

/** Frame copy kept deliberately short (client, 2026-09-14): the images carry it. */
export const week = {
  code: "SS1/04 · HOW THE WEEK RUNS",
  title: "First call to finish ramp.",
  frames: [
    { tc: "01", title: "Arrive.", body: "You land in Nairobi. We collect you.", image: images.drive01ArrivalNairobi, position: "50% 55%" },
    { tc: "02", title: "Shakedown.", body: "Private murram. Seat time until the car feels yours.", image: images.drive02ShakedownTest, position: "50% 50%" },
    { tc: "03", title: "Scrutineering.", body: "Our paperwork. Our problem.", image: images.drive03ReadyToStart, position: "45% 50%" },
    { tc: "04", title: "The event.", body: "You drive. We run everything else.", image: images.drive04TheEvent, position: "50% 55%" },
    { tc: "05", title: "The finish.", body: "Time card stamped. Dust still on the paint.", image: images.drive05FinishRamp, position: "60% 50%" },
  ],
};

export const people = {
  code: "SS1/05 · THE PEOPLE",
  title: "Names you can phone.",
  joey: {
    name: "Joey Ghose",
    role: "FOUNDER & TEAM PRINCIPAL",
    line: "He takes the first call. He is on the radio when it counts.",
    image: images.peopleJoeyGhose,
    caption: "IN THE CAR",
  },
  crew: { image: images.teamCrewService, caption: "SERVICE · THE CREW" },
  cta: { label: "The team", href: "/the-team" },
};

export const heritageStrip = {
  code: "SS1/06 · WHERE WE COME FROM",
  title: "Heritage, briefly.",
  image: images.heritageMintiStageBw,
  caption: "ARCHIVE · MINTI LIVERY, EAST AFRICAN STAGE",
  line: "Inside the East African Safari Classic Rally since 2020.",
  cta: { label: "The full story", href: "/heritage" },
};

export const ask = {
  headline: "The 2027 start list is short.",
  line: "We take on only as many drivers as we can run properly.",
  image: images.askMurramRoadAerial,
};
