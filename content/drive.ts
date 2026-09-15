import { eascr2027 } from "./eascr2027";
import { images, type ImageSlot } from "./images.generated";

/**
 * /the-drive. One seat, three ways in, the schedule, the straight answers.
 * Copy only: the layout lives in app/the-drive/page.tsx. The hire cost is
 * never published (priced on application, given on the first call).
 */

/** A photograph and its caption. Captions state only what is in the frame. */
type Plate = { image: ImageSlot; caption: string; tag: string };

export const driveHero = {
  kicker: "SS2 · THE DRIVE · ARRIVE & DRIVE",
  headline: "Take a seat.",
  line: "Our car, our crew, your name on the door.",
  image: images.driveHeroCockpit,
  position: "50% 50%",
};

/** SS2/01. The 2027 package, from the client's own sheet (content/eascr2027). */
export const seat = {
  code: "SS2/01 · APPLICATIONS OPEN",
  title: "The 2027 seat.",
  priceLine: `${eascr2027.price.toUpperCase()} · ${eascr2027.priceLabel}`,
  body: "One hire cost covers the whole campaign. A brand new MST Escort Mk2 is built for you in the UK, freighted to Kenya and run by our crew for the full event. The figure is given plainly on the first call.",
  plate: {
    image: images.drive04TheEvent,
    caption: "THE EVENT · MURRAM AND THORN",
    tag: "THE COMPETITION CAR",
  } satisfies Plate,
  numerals: [
    { value: "1", label: "NEW MST ESCORT MK2" },
    { value: "3", label: "SETS OF SPARES" },
    { value: "40", label: "NEW GRAVEL TYRES" },
    { value: "5", label: "MECHANICS" },
  ],
};

type Programme = {
  id: string;
  name: string;
  strap: string;
  points: string[];
  /** Mono line above the action, only where an entry is open. */
  badge?: string;
  action: { label: string; href: string };
};

/** SS2/02. Three ways in. Arrive & Drive is the programme the 2027 seat is sold on. */
export const programmes = {
  code: "SS2/02 · THREE WAYS IN",
  title: "Three programmes.",
  items: [
    {
      id: "arrive-and-drive-programme",
      name: "Arrive & Drive",
      strap: "Our car, our crew, your name on the door.",
      points: [
        "New MST Escort Mk2",
        "Shakedown and coaching week",
        "Full crew, spares and logistics",
        "Entry and event administration",
      ],
      badge: "EASCR 2027 · APPLICATIONS OPEN",
      action: { label: "The 2027 seat", href: "#arrive-and-drive" },
    },
    {
      id: "your-car-our-team",
      name: "Your Car, Our Team",
      strap: "You own the car. We make it a rally entry.",
      points: [
        "Preparation and rebuild",
        "Freight and customs",
        "Testing on private murram",
        "Full event service package",
      ],
      action: { label: "Start with a call", href: "/enquire" },
    },
    {
      id: "commission",
      name: "Commission a Safari Car",
      strap: "A new MST build, specified around you.",
      points: [
        "MST build slot, Safari spec",
        "Specified and fitted to you",
        "Storage and upkeep in Nairobi",
        "Multi-event planning",
      ],
      action: { label: "Start with a call", href: "/enquire" },
    },
  ] satisfies Programme[],
};

/** SS2/03. Arrive & Drive, in full. */
export const included = {
  code: "SS2/03 · ARRIVE & DRIVE, IN FULL",
  title: "What is in. What is not.",
  plate: {
    image: images.drive01ArrivalNairobi,
    caption: "ARRIVAL DAY · THE FLEET",
    tag: "THE COMPETITION CAR",
  } satisfies Plate,
  yes: [
    "A new MST Escort, Safari specification",
    "Shakedown and seat time on private murram",
    "Service crew, chase vehicles, spares, logistics",
    "A co-driver, if you do not bring your own",
    "Entry, scrutineering and administration",
    "Accommodation and travel coordination for your family",
    "Afterwards: storage, onward sale, or your next start",
  ],
  no: [
    "Your flights to Nairobi. We coordinate, you book",
    "Competition licence and medical. We guide, you sign",
    "Custom suits and seats, arranged at cost",
    "Damage beyond the agreed excess, set out in writing",
    "A guaranteed result. We guarantee the preparation",
  ],
};

/** SS2/04. The schedule. "−7" is a minus sign, not a dash. */
export const timeline = {
  code: "SS2/04 · THE SCHEDULE",
  title: "First call to finish ramp.",
  steps: [
    { when: "MONTH 0", what: "The call", line: "Forty minutes with the team. No paperwork." },
    { when: "MONTH 1", what: "The agreement", line: "The programme in writing. A deposit secures the car." },
    { when: "MONTHS AHEAD", what: "Licence and medical", line: "We send the checklist and chase it with you." },
    { when: "THE BUILD MONTHS", what: "The build", line: "Your car comes together in the UK. You see it happen." },
    { when: "EVENT −7 DAYS", what: "Arrival and shakedown", line: "Seat fitting, briefing, then private murram." },
    { when: "EVENT", what: "The event", line: "You drive. We run the service park and the plan." },
    { when: "EVENT +1 DAY", what: "The ramp, then dinner", line: "Time card stamped, car on the truck." },
  ],
  plate: {
    image: images.drive05FinishRamp,
    caption: "END OF THE DAY · THE CREW",
    tag: "THE COMPETITION CAR",
  } satisfies Plate,
};

/** SS2/05. The driver. */
export const experience = {
  code: "SS2/05 · THE DRIVER",
  title: "Am I good enough?",
  statement:
    "Most of the drivers we run had never rallied before their first Safari. The road does not demand heroics. It demands discipline.",
  requirements: [
    { k: "LICENCE", v: "Competition licence. We guide the application" },
    { k: "MEDICAL", v: "Standard motorsport medical certificate" },
    { k: "FITNESS", v: "Long days in heat. No superhuman standard" },
    { k: "DRIVING", v: "Manual gearbox. Rally experience not required" },
    { k: "AGE", v: "No upper limit. The medical decides" },
  ],
  honest: "If the assessment drive says you are not ready, we say so and return your deposit.",
  plate: {
    image: images.drive03ReadyToStart,
    caption: "STRAPPED IN · WAITING FOR THE OFF",
    tag: "THE COMPETITION CAR",
  } satisfies Plate,
};

export const family = {
  eyebrow: "FAMILY",
  statement:
    "A Safari is one of the last rallies a family can genuinely follow. We arrange the accommodation, the spectating points and the days out between the halts.",
};

/** SS2/06. The questions asked on every first call. */
export const faqs = {
  code: "SS2/06 · THE QUESTIONS",
  title: "Asked every time.",
  items: [
    {
      q: "What happens if the car breaks?",
      a: "It is rallying, so things break. That is why the crew, the chase cars and three sets of spares exist. If the car genuinely cannot continue, what happens next is already written into your agreement.",
    },
    {
      q: "How safe is it, honestly?",
      a: "It is motorsport on real roads. The car carries a current-spec cage, seats, harnesses and extinguisher systems. The event carries medical and rescue cover. The biggest safety factor is the pace you choose, and that gets coached all week.",
    },
    {
      q: "What if I cannot continue mid-event?",
      a: "Then you stop. The crew brings the car home and nobody makes a face about it. Rejoining a later leg is often possible under event rules.",
    },
    {
      q: "I have never rallied. Am I being naive?",
      a: "No. The shakedown week exists to turn an experienced road driver into a competent rally crew. We will not put someone unready on a start line.",
    },
    {
      q: "Do you guarantee event entry?",
      a: "No. Entries are granted by the event organisers. What we guarantee is an entry that is professionally prepared and properly submitted.",
    },
  ],
};

export const packCta = {
  title: "The brief, in writing.",
  body: "A short pack: the programme outline, what the seat includes, the timeline. Sent by email, followed up once.",
};

export const finish = {
  headline: "One call decides it.",
  line: "Forty minutes with the team. What you want, and whether we suit each other.",
};
