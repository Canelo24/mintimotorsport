import { TODO } from "./site";
import { images } from "./images.generated";

/** /the-drive — the money page. Answers: what exactly do I get, what is expected of me? */

export const driveHero = {
  kicker: "SS2 — THE DRIVE · THE PROGRAMMES",
  headline: "Take a seat.",
  sub: "Three ways into East African rallying — a seat in our car, our team behind your car, or a car commissioned for you. All of them run by the same crew, from Nairobi, end to end.",
  image: images.driveHeroCockpit,
};

/**
 * The three programmes. Arrive & Drive is the flagship and gets the full
 * page treatment below; the other two are complete offers in their own right.
 */
export const programmes = {
  instruction: "SS2/00 — CHOOSE YOUR ROUTE IN",
  title: "Three programmes",
  lead: "Different starting points, same standard. Every one begins with a call to the team and ends with a car you trust on a road we know.",
  items: [
    {
      id: "arrive-and-drive",
      name: "Arrive & Drive",
      strap: "Our car, our crew, your name on the door.",
      body: "The flagship: a Safari-spec MST Escort prepared for you, shakedown week, full service crew, entry administration and family logistics. You land in Nairobi; everything after that is handled. The rest of this page describes it in detail.",
      points: ["MST Escort Mk1/Mk2 seat", "Shakedown and coaching week", "Full crew, spares and logistics", "Entry and event administration"],
      badge: "EAST AFRICAN SAFARI CLASSIC 2027 — APPLICATIONS OPEN",
      applyHref: "/enquire?e=eascr2027",
      applyNote: "Entries are granted by the event's organisers; Minti prepares, enters and runs your car.",
    },
    {
      id: "your-car-our-team",
      name: "Your Car, Our Team",
      strap: "You own the car. We make it a rally entry.",
      body: "Preparation, testing and event support for owner cars: freight coordination into East Africa, pre-event rebuild and shakedown on our roads, then the same service crew, chase cars and spares strategy our own entries get. Your machinery, our operation.",
      points: ["Pre-event preparation and rebuild", "Freight and customs coordination", "Testing on private murram", "Full event service package"],
    },
    {
      id: "commission",
      name: "Commission a Safari Car",
      strap: "A new MST build, specified around you.",
      body: "Through the exclusive regional MST partnership: a new or original Escort Mk1/Mk2 commissioned to Safari specification, built to your seat, followed by testing, storage in Nairobi and a programme of events — a long-term way in, not a single start.",
      points: ["MST build slot, Safari spec", "Specified and fitted to you", "Storage and upkeep in Nairobi", "Multi-event programme planning"],
    },
  ],
};

export const included = {
  yes: [
    "The car — MST-built Escort Mk1 or Mk2, Safari specification, fresh preparation",
    "Shakedown and seat time on private murram before the start",
    "Full service crew, chase vehicles, spares package and event logistics",
    "Co-driver pairing, if you don't bring your own",
    "Entry, scrutineering and event administration handled end to end",
    "Accommodation and travel coordination for you and your family",
    "Post-event: storage, onward sale, or the conversation about your next start",
  ],
  no: [
    "Your travel to Nairobi — we coordinate it, you book it",
    "Competition licence and medical — we walk you through both, the paperwork is yours to sign",
    "Personal kit sizing beyond our standard issue (custom suits and seats are arranged at cost)",
    "Damage beyond the agreed excess — set out plainly in the programme agreement",
    "A guaranteed result. We guarantee the preparation; the road decides the rest",
  ],
};

export const timeline = {
  title: "First call to finish ramp",
  steps: [
    { when: "MONTH 0", what: "The call", detail: "Forty minutes with the team. What you want, what it costs, whether we're the right fit. No paperwork." },
    { when: "MONTH 1", what: "The agreement", detail: "Programme in writing: car, event, dates, inclusions, excess. Deposit secures the car." },
    { when: TODO("months before event — licensing window"), what: "Licence and medical", detail: "We send the checklist and chase the paperwork with you. It is simpler than you expect." },
    { when: TODO("months before event — build window"), what: "The build watch", detail: "Your car's preparation, documented. Photos from the workshop as it happens." },
    { when: "EVENT −7 DAYS", what: "Arrival and shakedown", detail: "Land in Nairobi. Seat fitting, systems briefing, then private murram until the car feels like yours." },
    { when: "EVENT", what: "The event", detail: "You drive. We run the service park, the chase cars, the spares, the plan and the plan B." },
    { when: "EVENT +1 DAY", what: "The ramp, then dinner", detail: "Time card stamped. The car goes on the truck. You decide whether once was enough — most don't." },
  ],
};

export const experience = {
  title: "Am I good enough?",
  lead: "The honest answer: probably, and we'll tell you if not.",
  body: [
    "Most of the drivers we run had never rallied before their first Safari-distance event. What the road demands is not heroics — it's discipline, mechanical sympathy, and the sense to drive at eight tenths for days at a time.",
    "You'll need a competition licence and a medical. We guide both. If you can drive a manual car smoothly and take instruction from the person holding the roadbook, the rest is coaching and seat time — which is what the shakedown week is for.",
    "If, after the assessment drive, we think you'd be a danger to yourself or the field, we will say so and hand your deposit back. Reputation outlasts revenue.",
  ],
  requirements: [
    { k: "LICENCE", v: "Competition licence — we guide the application" },
    { k: "MEDICAL", v: "Standard motorsport medical certificate" },
    { k: "FITNESS", v: "Able to manage long days in heat; no superhuman standard" },
    { k: "DRIVING", v: "Confident manual-gearbox driver; rally experience not required" },
    { k: "AGE", v: "No upper limit — the medical decides, not the birthday" },
  ],
};

export const family = {
  title: "Bring them with you",
  body: "A Safari event is one of the last rallies a family can genuinely follow. We arrange accommodation, spectating points with our own people, and the kind of days out that make sense between service halts. Partners and children have stood on our finish ramps before — it's better that way.",
};

export const packages = {
  note: "Every programme is built around the driver — these are starting points, not shelves. Pricing is discussed after a first call and is always in writing.",
  tiers: [
    {
      name: "The Finish",
      who: "First Safari. One goal: bring you and the car home.",
      includes: ["Escort Mk1/Mk2 seat", "Standard shakedown programme", "Full crew and logistics", "Co-driver pairing", "Family coordination"],
      from: TODO("'from' price — The Finish"),
    },
    {
      name: "The Result",
      who: "Licensed and hungry. Built for a competitive placing.",
      includes: ["Everything in The Finish", "Extended test programme", "Senior co-driver", "Data review between legs", "Priority spares strategy"],
      from: TODO("'from' price — The Result"),
    },
    {
      name: "The Programme",
      who: "Multi-event, brand or family office. A season, not a start.",
      includes: ["Everything in The Result", "Multi-event calendar", "Hospitality and guest programme", "Media and content package", "Partnership branding"],
      from: TODO("'from' price — The Programme"),
    },
  ],
};

export const faqs = [
  {
    q: "What happens if the car breaks?",
    a: "It's rallying — things break. That's why the crew, chase cars and spares package exist. Most failures are fixed at the next service halt; the serious ones are why we carry what we carry. If the car cannot continue, the conversation about what happens next is covered in the programme agreement before you ever start — not invented at the roadside.",
  },
  {
    q: "How safe is it, honestly?",
    a: "It is motorsport, on real roads, and we won't pretend otherwise. The car carries a current-spec cage, seats, harnesses and extinguisher systems; the event carries medical and rescue cover; and the biggest safety factor — the pace you drive at — is coached all week. We've been standing in service parks for decades, and we intend to keep standing in them.",
  },
  {
    q: "What about insurance?",
    a: "Personal accident and travel cover is yours to arrange, and we point you at brokers who actually understand motorsport. The car is dealt with through the programme's damage provisions and agreed excess — in writing, before you commit.",
  },
  {
    q: "What if I can't continue mid-event?",
    a: "You stop. It's your week. Whether it's fatigue, family or a change of heart, the crew brings the car home and nobody performs disappointment at you. Re-entry into a later leg is often possible under event rules — we'll handle that conversation with the officials.",
  },
  {
    q: "I've never rallied. Am I being naive?",
    a: "No — you're the person this programme was designed for. See 'Am I good enough?' above: shakedown week exists to turn an experienced road driver into a competent rally crew. What we won't do is put someone unready on a start line; the assessment drive is honest both ways.",
  },
  {
    q: "Can my partner or friend co-drive?",
    a: "If they can hold a licence and do the work, yes — and we'll train you both. Otherwise we pair you with an experienced co-driver who knows these roads and how to keep a first-timer calm at speed.",
  },
  {
    q: "Do you guarantee event entry?",
    a: "No — and be wary of anyone who says otherwise. Entries are the organiser's to grant; the events are independently run. What we guarantee is that your entry is professionally prepared, submitted properly and backed by a team organisers know.",
  },
];

export const packCta = {
  title: "The brief, in writing",
  body: "A concise pack: programme outline, car specification, what's included, indicative timeline. We send it by email — and follow up exactly once.",
};
