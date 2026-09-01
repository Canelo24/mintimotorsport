import { TODO } from "./site";
import { images } from "./images.generated";

export const teamHero = {
  kicker: "SS4 · THE TEAM",
  headline: "A family name, then a crew.",
  sub: "Minti is UK registered and family run. Joey Ghose founded it and still runs it, and the crew in Nairobi have made careers out of finishing rallies.",
};

export const ghose = [
  {
    name: "Joey Ghose",
    role: "Founder & team principal",
    body: "Joey built Minti from a family obsession into a rally operation, including the years spent stewarding the East African Safari Classic Rally organisation. He still owns every driver programme personally, and he knows which crossing floods first when the long rains come early.",
  },
];

export const familyPhoto = images.teamCrewWorking;

export const base = {
  title: "Home ground: Nairobi",
  body: [
    "Most international teams freight everything in and hope. Our workshop, crew, spares and test roads are already here. This is where the team lives, not somewhere it deploys to.",
    "That changes what we can promise. Cars are prepared and shaken down on the surfaces they will race on. Local knowledge here is not a consultant's report. It is the crew's commute.",
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
  body: "Rallies are won between midnight and scrutineering. The service crew is the part of the programme you will be gladdest you paid for, and the part we are proudest of. Names and faces will sit here once the crew sheet is confirmed for the season.",
  namesTodo: TODO("crew names, roles and photos for the current season"),
  image: images.teamCrewService,
};
