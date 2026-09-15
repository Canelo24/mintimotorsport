import { images } from "./images.generated";

/**
 * Home page copy. Editorial pass (2026-09-15): every section is image-led,
 * number-led or a single statement. Plain British sentences, no em dashes,
 * nothing that is not in the verified facts.
 */

export const hero = {
  kicker: "ARRIVE & DRIVE · EAST AFRICAN SAFARI CLASSIC 2027",
  headline: "A seat in the Safari.",
  sub: "A new MST Escort. A Nairobi crew. You drive.",
  primaryCta: "Take a seat",
  primaryHref: "/enquire?e=eascr2027",
  secondaryCta: "The full programme",
  secondaryHref: "/the-drive",
  image: images.heroSafariJumpMurram,
};

export const deal = {
  statement:
    "Hard to organise. Easy to get wrong. We run it from Nairobi, with our own crew, on roads we have known for years. You drive.",
  numerals: [
    { value: "2017", label: "FOUNDED · FAMILY RUN" },
    { value: "UNITED KINGDOM", label: "REGISTERED" },
    { value: "1.2921° S 36.8219° E", label: "BASE · NAIROBI" },
  ],
};

export const seat = {
  code: "SS1/02 · APPLICATIONS OPEN",
  title: "The 2027 seat.",
  priceLine: "ONE ALL-IN HIRE COST · PRICED ON APPLICATION",
  line: "One hire cost covers the whole campaign. The figure is given plainly on the first call.",
  board: images.driveHeroCockpit,
  boardCaption: "PERIOD DIALS · THE COMPETITION CAR",
  numerals: [
    { value: "1", label: "NEW MST ESCORT MK2" },
    { value: "3", label: "SETS OF SPARES" },
    { value: "40", label: "NEW GRAVEL TYRES" },
    { value: "5", label: "MECHANICS" },
  ],
  otherRoutes: { label: "The other programmes", href: "/the-drive#your-car-our-team" },
};

export const car = {
  code: "SS1/03 · THE CAR",
  title: "The Escort, done properly.",
  body: "MST build them, new and original, to Safari specification. Minti holds the exclusive regional partnership. Built in the UK, shaken down in Nairobi.",
  tall: { image: images.carsCockpitDetail, caption: "PERIOD DIAL", tag: "THE COMPETITION CAR" },
  wide: { image: images.carsMk1MountainRoad, caption: "ESCORT MK1 · GOLD WHEELS, WET PASS" },
  cta: { label: "See the car", href: "/the-cars" },
};

/** Card copy kept deliberately short (client, 2026-09-14): the images carry it. */
export const driveSequence = {
  code: "SS1/04 · HOW THE WEEK RUNS",
  title: "First call to finish ramp.",
  cards: [
    { tc: "01", title: "Arrive", body: "You land in Nairobi. We collect you.", image: images.drive01ArrivalNairobi, position: "50% 55%" },
    { tc: "02", title: "Shakedown", body: "Private murram. Seat time until the car feels yours.", image: images.drive02ShakedownTest, position: "50% 50%" },
    { tc: "03", title: "Scrutineering", body: "Our paperwork. Our problem.", image: images.drive03ReadyToStart, position: "45% 50%" },
    { tc: "04", title: "The event", body: "You drive. We run everything else.", image: images.drive04TheEvent, position: "50% 55%" },
    { tc: "05", title: "The finish", body: "Time card stamped. Dust still on the paint.", image: images.drive05FinishRamp, position: "60% 50%" },
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
    caption: "JOEY GHOSE · PRINCIPAL",
  },
  crew: { image: images.teamCrewService, caption: "SERVICE · THE CREW", tag: "THE COMPETITION CAR" },
  cta: { label: "The team, the workshop, the 2am department", href: "/the-team" },
};

export const heritageStrip = {
  code: "SS1/06 · WHERE WE COME FROM",
  title: "Heritage, briefly.",
  image: images.heritageMintiStageBw,
  caption: "ARCHIVE · MINTI LIVERY, EAST AFRICAN STAGE",
  numerals: [
    { value: "2017", label: "FOUNDED" },
    { value: "FROM 2017", label: "CREWS RUN" },
    { value: "FROM 2020", label: "THE SAFARI CLASSIC YEARS · CLOSED" },
  ],
  line: "We held a controlling stake in East African Safari Classic Rally Ltd and ran the event. It is independently run today.",
  cta: { label: "The full story", href: "/heritage" },
};

export const ask = {
  headline: "The 2027 start list is short.",
  line: "We take on only as many drivers as we can run properly.",
  scarcity: "EAST AFRICAN SAFARI CLASSIC 2027 · APPLICATIONS OPEN",
  image: images.askMurramRoadAerial,
};

export const marqueeLine =
  "PRESERVING HERITAGE · FIRST CALL · SHAKEDOWN · SCRUTINEERING · FLYING FINISH · SERVICE OUT · FINISH RAMP";
