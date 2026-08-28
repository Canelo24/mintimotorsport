import { TODO } from "./site";
import { images } from "./images.generated";

export const teamHero = {
  kicker: "SS4 — THE TEAM",
  headline: "A family name, then a crew.",
  sub: "Minti is UK-registered and family-run: founded and run by Joey Ghose, and operated from Nairobi by people who have made careers of finishing rallies.",
};

export const ghose = [
  {
    name: "Joey Ghose",
    role: "Founder & team principal",
    body: "Built Minti from a family obsession into a rally operation, including the years stewarding the East African Safari Classic Rally organisation, and still owns every driver programme personally. When the site says a named person will call you back — this is the name. Decades of knowing exactly which crossing floods first when the long rains come early.",
  },
];

export const familyPhoto = images.teamJoeyGhoseWorkshop;

export const base = {
  title: "Home ground: Nairobi",
  body: [
    "Most international teams freight everything in and hope. Minti's workshop, crew, spares and test roads are already here — this is where the team lives, not where it deploys to.",
    "That changes what we can promise. Cars are prepared and shaken down on the surfaces they'll race on. Local knowledge isn't a consultant's report; it's the crew's commute.",
  ],
  image: images.teamWorkshopBay,
  facts: [
    { k: "WORKSHOP", v: "NAIROBI, KENYA" },
    { k: "COORDINATES", v: "1.2921°S 36.8219°E" },
    { k: "REGISTERED", v: "UNITED KINGDOM" },
    { k: "TEST ROADS", v: "PRIVATE MURRAM" },
    { k: "CREW", v: TODO("service crew headcount") },
  ],
};

export const crew = {
  title: "The 2am department",
  body: "Rallies are won between midnight and scrutineering. The service crew — chief mechanic, fabricator, electrics, logistics — is the part of the programme you'll be gladdest you paid for and the part we're proudest of. Names and faces will sit here once the crew sheet is confirmed for the season.",
  namesTodo: TODO("crew names, roles and photos for the current season"),
  image: images.teamServicePark2am,
};
