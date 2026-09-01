import { TODO } from "./site";
import { images } from "./images.generated";

/** /the-drive. Answers: what exactly do I get, and what is expected of me? */

export const driveHero = {
  kicker: "SS2 · THE DRIVE · THE PROGRAMMES",
  headline: "Take a seat.",
  sub: "Three ways into East African rallying. A seat in our car, our team behind your car, or a car commissioned for you. All of it run by the same crew, from Nairobi.",
  image: images.driveHeroCockpit,
};

export const programmes = {
  instruction: "SS2/00 · CHOOSE YOUR ROUTE IN",
  title: "Three programmes",
  lead: "Different starting points, the same standard. Each one begins with a call and ends with a car you trust on a road we know.",
  items: [
    {
      id: "arrive-and-drive",
      name: "Arrive & Drive",
      strap: "Our car, our crew, your name on the door.",
      body: "The flagship. A new MST Escort Mk2 built for you, a full service operation around it, and the entry handled from first form to finish ramp. You land in Nairobi and everything after that is done. The 2027 Safari Classic seat below is this programme.",
      points: ["New MST Escort Mk2", "Shakedown and coaching week", "Full crew, spares and logistics", "Entry and event administration"],
      badge: "EAST AFRICAN SAFARI CLASSIC 2027 · APPLICATIONS OPEN",
      applyHref: "/enquire?e=eascr2027",
      applyNote: "Entry to the event is granted by its organisers. Minti prepares the car, submits the entry and runs your campaign.",
    },
    {
      id: "your-car-our-team",
      name: "Your Car, Our Team",
      strap: "You own the car. We make it a rally entry.",
      body: "Preparation, testing and event support for owner cars. We handle freight into East Africa, rebuild and shake the car down on our roads, then run it at the event with the same crew and spares strategy our own entries get.",
      points: ["Preparation and rebuild", "Freight and customs", "Testing on private murram", "Full event service package"],
    },
    {
      id: "commission",
      name: "Commission a Safari Car",
      strap: "A new MST build, specified around you.",
      body: "Through the exclusive regional MST partnership we commission new and original Escorts to Safari specification, built to your seat. Testing, storage in Nairobi and a programme of events follow. A long-term way in rather than a single start.",
      points: ["MST build slot, Safari spec", "Specified and fitted to you", "Storage and upkeep in Nairobi", "Multi-event planning"],
    },
  ],
};

export const included = {
  yes: [
    "The car. A new MST-built Escort, Safari specification, fresh preparation",
    "Shakedown and seat time on private murram before the start",
    "Full service crew, chase vehicles, spares package and event logistics",
    "Co-driver pairing if you don't bring your own",
    "Entry, scrutineering and event administration, start to finish",
    "Accommodation and travel coordination for you and your family",
    "Afterwards: storage, onward sale, or a conversation about your next start",
  ],
  no: [
    "Your travel to Nairobi. We coordinate it, you book it",
    "Competition licence and medical. We walk you through both, the signatures are yours",
    "Personal kit beyond our standard issue. Custom suits and seats are arranged at cost",
    "Damage beyond the agreed excess, which is set out plainly in the agreement",
    "A guaranteed result. We guarantee the preparation. The road decides the rest",
  ],
};

export const timeline = {
  title: "First call to finish ramp",
  steps: [
    { when: "MONTH 0", what: "The call", detail: "Forty minutes with the team. What you want, what it costs, whether we suit each other. No paperwork." },
    { when: "MONTH 1", what: "The agreement", detail: "The programme in writing: car, event, dates, inclusions, excess. A deposit secures the car." },
    { when: TODO("months before event, licensing window"), what: "Licence and medical", detail: "We send the checklist and chase the paperwork with you. It is simpler than people expect." },
    { when: TODO("months before event, build window"), what: "The build", detail: "Your car comes together in the UK and you see it happen. Photos from the shop as the work is done." },
    { when: "EVENT −7 DAYS", what: "Arrival and shakedown", detail: "Land in Nairobi. Seat fitting, systems briefing, then private murram until the car feels like yours." },
    { when: "EVENT", what: "The event", detail: "You drive. We run the service park, the chase cars, the spares, the plan, and the backup plan." },
    { when: "EVENT +1 DAY", what: "The ramp, then dinner", detail: "Time card stamped, car on the truck. Then you decide whether once was enough. Most people don't stop at once." },
  ],
};

export const experience = {
  title: "Am I good enough?",
  lead: "The honest answer is probably, and we will tell you if not.",
  body: [
    "Most of the drivers we run had never rallied before their first Safari-distance event. The road doesn't demand heroics. It demands discipline, mechanical sympathy, and the sense to drive at eight tenths for days at a time.",
    "You will need a competition licence and a medical, and we guide both. If you can drive a manual car smoothly and take instruction from the person holding the roadbook, the rest is coaching and seat time. That is what the shakedown week is for.",
    "If the assessment drive tells us you would be a danger to yourself or the field, we will say so and return your deposit. Our name is worth more than one hire.",
  ],
  requirements: [
    { k: "LICENCE", v: "Competition licence. We guide the application" },
    { k: "MEDICAL", v: "Standard motorsport medical certificate" },
    { k: "FITNESS", v: "Able to manage long days in heat. No superhuman standard" },
    { k: "DRIVING", v: "Confident with a manual gearbox. Rally experience not required" },
    { k: "AGE", v: "No upper limit. The medical decides, not the birthday" },
  ],
};

export const family = {
  title: "Bring them with you",
  body: "A Safari event is one of the last rallies a family can genuinely follow. We arrange accommodation, spectating points with our own people, and proper days out between the service halts. Partners and children have stood on our finish ramps before. It is better that way.",
};

export const packages = {
  note: "The 2027 Safari Classic seat is priced above. Other events and multi-event programmes are put together around the driver and priced on the first call, always in writing.",
  tiers: [
    {
      name: "The Finish",
      who: "A first Safari. One goal: bring you and the car home.",
      includes: ["MST Escort seat", "Standard shakedown programme", "Full crew and logistics", "Co-driver pairing", "Family coordination"],
      from: TODO("'from' price, The Finish"),
    },
    {
      name: "The Result",
      who: "Licensed and hungry. Built for a competitive placing.",
      includes: ["Everything in The Finish", "Extended test programme", "Senior co-driver", "Data review between legs", "Priority spares strategy"],
      from: TODO("'from' price, The Result"),
    },
    {
      name: "The Programme",
      who: "Multi-event, brand or family office. A season, not a start.",
      includes: ["Everything in The Result", "Multi-event calendar", "Hospitality and guest programme", "Media and content package", "Partnership branding"],
      from: TODO("'from' price, The Programme"),
    },
  ],
};

export const faqs = [
  {
    q: "What happens if the car breaks?",
    a: "It is rallying, so things break. That is why the crew, the chase cars and three sets of spares exist. Most failures are fixed at the next service halt, and the serious ones are why we carry what we carry. If the car genuinely cannot continue, what happens next is already written into your agreement. Nothing gets invented at the roadside.",
  },
  {
    q: "How safe is it, honestly?",
    a: "It is motorsport on real roads and we won't pretend otherwise. The car carries a current-spec cage, seats, harnesses and extinguisher systems. The event carries medical and rescue cover. The biggest safety factor is the pace you choose, and that gets coached all week.",
  },
  {
    q: "What about insurance?",
    a: "Personal accident and travel cover is yours to arrange, and we can point you at brokers who actually understand motorsport. The car is covered by the damage provisions and agreed excess in your agreement, in writing, before you commit.",
  },
  {
    q: "What if I can't continue mid-event?",
    a: "Then you stop. It is your week. Whether it is fatigue, family or a change of heart, the crew brings the car home and nobody makes a face about it. Rejoining a later leg is often possible under event rules, and we handle that conversation with the officials.",
  },
  {
    q: "I've never rallied. Am I being naive?",
    a: "No. You are exactly who this programme was designed for. The shakedown week exists to turn an experienced road driver into a competent rally crew. What we won't do is put someone unready on a start line, and the assessment drive is honest in both directions.",
  },
  {
    q: "Can my partner or friend co-drive?",
    a: "If they can hold a licence and do the work, yes, and we will train you both. Otherwise we pair you with an experienced co-driver who knows these roads and how to keep a first-timer calm at speed.",
  },
  {
    q: "Do you guarantee event entry?",
    a: "No, and you should be wary of anyone who says otherwise. Entries are granted by the organisers, and the events are independently run. What we guarantee is an entry that is professionally prepared, submitted properly, and backed by a team the organisers know.",
  },
];

export const packCta = {
  title: "The brief, in writing",
  body: "A short pack with the programme outline, the car specification and the timeline. We send it by email and follow up once.",
};
