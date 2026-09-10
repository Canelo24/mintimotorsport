/**
 * The Arrive & Drive package for the East African Safari Classic Rally 2027.
 * Source: client package sheet supplied 2026-09-01 ("Minti Rally Sport,
 * Arrive & Drive Package, EASCR 2027"). The hire cost is deliberately not
 * published, and the technical car specification was withdrawn from the
 * site on client instruction (2026-09-10) — both live in the package sheet
 * and are given on the call. See DECISIONS.md.
 */

export const eascr2027 = {
  eyebrow: "APPLICATIONS OPEN",
  title: "The 2027 seat",
  event: "East African Safari Classic Rally",
  year: "2027",
  price: "One all-in hire cost",
  priceLabel: "PRICED ON APPLICATION",
  intro:
    "A single hire cost covers the whole campaign. A brand new MST Escort Mk2 is built for you in the UK, freighted to Kenya and run by our crew for the full event. No equipment list to negotiate, no surprise invoices at the finish, and the figure is given plainly on the first call.",
  facts: [
    { k: "EVENT", v: "EAST AFRICAN SAFARI CLASSIC RALLY" },
    { k: "YEAR", v: "2027" },
    { k: "FORMAT", v: "ARRIVE & DRIVE" },
    { k: "CAR", v: "NEW MST ESCORT MK2" },
    { k: "PRICING", v: "ON APPLICATION" },
  ],
  includes: [
    "Full overseas event entry fee",
    "A brand new Ford Escort Mk2, built for you",
    "Three sets of spares for every major assembly, plus a fresh engine",
    "Forty new gravel tyres",
    "Management car and service car, both Toyota Land Cruisers",
    "A three-tonne service van for the overnight halts",
    "All fuel, for the rally car and the support fleet",
    "Team manager, five mechanics and three support drivers",
    "Accommodation and meals for the whole team",
  ],
  applyHref: "/enquire?e=eascr2027",
  applyCta: "Apply for the seat",
  organiserNote:
    "Entry to the event is granted by its organisers. Minti prepares the car, submits the entry and runs your campaign.",
};
