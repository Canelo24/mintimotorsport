/**
 * The Arrive & Drive package for the East African Safari Classic Rally 2027.
 * Source: client package sheet supplied 2026-09-01 ("Minti Rally Sport,
 * Arrive & Drive Package, EASCR 2027"). Figures and spec are quoted from
 * that document. Presenting the hire cost publicly is a client decision
 * recorded in DECISIONS.md.
 */

export const eascr2027 = {
  eyebrow: "APPLICATIONS OPEN",
  title: "The 2027 seat",
  event: "East African Safari Classic Rally",
  year: "2027",
  // Hire cost is deliberately not published (client instruction, 2026-09-01).
  // The figure lives in the client package sheet and is given on the call.
  price: "One all-in hire cost",
  priceLabel: "PRICED ON APPLICATION",
  intro:
    "A single hire cost covers the whole campaign. A brand new MST Escort Mk2 is built for you in the UK, freighted to Kenya and run by our crew for the full event. No equipment list to negotiate, no surprise invoices at the finish, and the figure is given plainly on the first call.",
  facts: [
    { k: "EVENT", v: "EAST AFRICAN SAFARI CLASSIC RALLY" },
    { k: "YEAR", v: "2027" },
    { k: "FORMAT", v: "ARRIVE & DRIVE" },
    { k: "CAR", v: "NEW MST ESCORT MK2" },
    { k: "ENGINE", v: "BDG 2.0 · 260+ BHP" },
    { k: "PRICING", v: "ON APPLICATION" },
  ],
  includes: [
    "Full overseas event entry fee",
    "A brand new Ford Escort Mk2, built for you",
    "Three sets of spares for every major assembly, plus a fresh engine",
    "Forty new Dunlop gravel tyres",
    "Management car and service car, both Toyota Land Cruisers",
    "A three-tonne service van for the overnight halts",
    "All fuel, for the rally car and the support fleet",
    "Team manager, five mechanics and three support drivers",
    "Accommodation and meals for the whole team",
  ],
  spec: [
    { k: "BODYSHELL", v: "New Group 4 shell, hand built in the UK, DVLA-registered VIN" },
    { k: "CAGE", v: "Full weld-in WRC-specification roll cage" },
    { k: "ENGINE", v: "BDG 2.0, 260+ bhp, dry sump" },
    { k: "GEARBOX", v: "Hollinger ZF, Safari specification" },
    { k: "AXLE", v: "Fully floating Atlas, Gripper LSD, 4.9 or 5.1" },
    { k: "DAMPERS", v: "Reiger 4-way adjustable, front and rear" },
    { k: "REAR END", v: "Six-linked and turreted live axle, long-travel shell" },
    { k: "BRAKES", v: "AP Racing 4-pot calipers, Tilton bias pedal box" },
    { k: "FUEL", v: "100-litre alloy tank, centrally mounted" },
    { k: "STEERING", v: "Electronic power steering, quick-release wheel" },
    { k: "SAFETY", v: "FIA seats, 6-point harnesses, plumbed-in extinguisher" },
    { k: "WHEELS", v: "Minilite-style 6x15 alloys, Dunlop gravel tyres" },
  ],
  applyHref: "/enquire?e=eascr2027",
  applyCta: "Apply for the seat",
  organiserNote:
    "Entry to the event is granted by its organisers. Minti prepares the car, submits the entry and runs your campaign.",
};
