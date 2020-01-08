//Origin Path Choises
//probably add descriptions to all of these
const OriginPath = {
  Homeworld: [
    "Death World",
    "Void Born",
    "Forge World",
    "Hive World",
    "Imperial World",
    "Noble Born"
  ],
  Birthright: [
    "Scavenger",
    "Scapegrace",
    "Stubjack",
    "Child of the Creed",
    "Savant",
    "Vaunted"
  ],
  Lure: [
    "Tainted",
    "Criminal",
    "Renegade",
    "Duty Bound",
    "Zealot",
    "Chosen By Destiny"
  ],
  Trails: [
    "The Hand of War",
    "Press-ganged",
    "Calamity",
    "Ship-lorn",
    "Dark Voyage",
    "High Vendetta"
  ],
  Motivation: [
    "Endurance",
    "Fortune",
    "Vengeance",
    "Renown",
    "Pride",
    "Prestige"
  ],
  Career: [
    "Astropath Trancendent",
    "Arch-Militant",
    "Explorator",
    "Missionary",
    "seneschal",
    "Navigator",
    "Rogue Trader"
  ],

  // homeworld extra choises
  deathWorld: ["Jaded", "Resistance: Poison"],

  forgeWold: ["WS", "BS", "S", "T", "Ag", "Int", "Per", "WP", "fel"],

  nobleBorn: [
    "Academics",
    "Adeptus Mechanicus",
    "Administratum",
    "Astropaths",
    "Ecclesiarchy",
    "Government",
    "Mercantile",
    "Military",
    "Underworld"
  ],

  //Birthright extra choises

  scavenger: {
    Description: "",

    talent: ["Resistance(fear)", "Unremarkable"],
    bonus: ["Willpower", "Agility"],
    damage: ["Corruption", "Insanity"]
  },

  scapegrace: {
    Description: "",

    bonus: ["Intelligence", "Perception"],
    damage: ["Corruption", "Insanity"]
  },
  Stubjack: {
    Description: "",

    bonus: ["Weapon Skill", "Ballistic Skill"]
  },

  childOfTheCreed: {
    Description: "",

    bonus: ["Willpower", "Fellowship"]
  },

  savant: {
    Description: "",

    talent: ["Logic (int) trained basic skill", "Peer(acedamic) talent"],
    bonus: ["Intelligence", "Fellowship"]
  },

  vaunted: {
    Description: "",

    bonus: ["Agility", "Fellowship"]
  },

  // Lure of the Void choises

  tainted: {
    //mutant needs subchoises how?
    Description: "",
    Choises: ["Mutant", "Insane", "Deviant Philosophy"]
  },

  criminal: {
    //judged needs subjoiches
    Description: "",
    Choises: [
      "Wanted Fugitive",
      "Hunted by a Crime Baron",
      "Judged and Found Wanting"
    ]
  },

  renegade: {
    //free-thinker needs subchoises
    Description: "",
    Choises: ["Recidivist", "Free-thinker", "Dark Visionaru"]
  },

  dutyBound: {
    // humanity needs subchoises
    Description: "",
    Choises: ["Throne", "Humanity", "Dynasty"]
  },

  zealot: {
    Description: "",
    Choises: ["Blessed Scars", "Unnerving Clarity", "Favoured of the Faithful"]
  },

  chosenByDestiny: {
    Description: "",
    Choises: ["Seeker of Truth", "Xenophile", "Fated for Greatness"]
  },

  // Trails and Travails

  handOfWar: {
    Description: "",

    weaponTalent: ["list of talents here"], //probably create a weapon talent list somewhere
    Hatred: [
      "Orks",
      "Eldar",
      "mutants",
      "Chaos worshipers",
      "Imperial Guard",
      "Imperial Navy",
      "void pirates"
    ]
  },

  pressGanged: {
    Description: "",

    skill: ["list of no prereq skills here"], //from a different js file?
    commonLore: ["also a big list"]
  },

  calamity: {
    Description: "",

    talent: ["Hardy", "Nerves of Steel"]
  },

  shipLorn: {
    Description: "",

    talent: ["Survival Skill", "Dark Soul Talent"]
  },

  darkVoyage: {
    Description: "",

    notMeantToKnow: ["resistance(Fear) talent", "list of forbidden lore"]
  },

  highVendetta: {
    Description: "",

    talent: ["Die Hard", "Paranoia"]
  },

  //Motivation

  Vengeance: ["list of hatred talents"],

  renown: ["Air of Authority", "Peer (choise) talent"],

  pride: ["toughness", "list of heirlooms"],

  prestige: ["Talnted (choise) talent", "Peer (choise) talent"]
};

module.exports = OriginPath;