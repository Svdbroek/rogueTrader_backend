//Origin Path choices
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

  // homeworld extra choices
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

  //Birthright extra choices

  scavenger: {
    Description: "",
    choice: {
      talent: ["Resistance(fear)", "Unremarkable"],
      bonus: ["Willpower", "Agility"],
      damage: ["Corruption", "Insanity"]
    }
  },

  scapegrace: {
    Description: "",
    choice: {
      bonus: ["Intelligence", "Perception"],
      damage: ["Corruption", "Insanity"]
    }
  },
  stubjack: {
    Description: "",
    choice: {
      bonus: ["Weapon Skill", "Ballistic Skill"]
    }
  },

  childOfTheCreed: {
    Description: "",
    choice: {
      bonus: ["Willpower", "Fellowship"]
    }
  },

  savant: {
    Description: "",
    choice: {
      talent: ["Logic (int) trained basic skill", "Peer(acedamic) talent"],
      bonus: ["Intelligence", "Fellowship"]
    }
  },

  vaunted: {
    Description: "",
    choice: {
      bonus: ["Agility", "Fellowship"]
    }
  },

  // Lure of the Void choices

  tainted: {
    //mutant needs subchoices how?
    Description: "",
    choices: ["Mutant", "Insane", "Deviant Philosophy"]
  },

  criminal: {
    //judged needs subjoiches
    Description: "",
    choices: [
      "Wanted Fugitive",
      "Hunted by a Crime Baron",
      "Judged and Found Wanting"
    ]
  },

  renegade: {
    //free-thinker needs subchoices
    Description: "",
    choices: ["Recidivist", "Free-thinker", "Dark Visionaru"]
  },

  dutyBound: {
    // humanity needs subchoices
    Description: "",
    choices: ["Throne", "Humanity", "Dynasty"]
  },

  zealot: {
    Description: "",
    choices: ["Blessed Scars", "Unnerving Clarity", "Favoured of the Faithful"]
  },

  chosenByDestiny: {
    Description: "",
    choices: ["Seeker of Truth", "Xenophile", "Fated for Greatness"]
  },

  // Trails and Travails

  handOfWar: {
    Description: "",
    choice: {
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
    }
  },

  pressGanged: {
    Description: "",
    choice: {
      skill: ["list of no prereq skills here"], //from a different js file?
      commonLore: ["also a big list"]
    }
  },

  calamity: {
    Description: "",
    choice: {
      talent: ["Hardy", "Nerves of Steel"]
    }
  },

  shipLorn: {
    Description: "",
    choice: {
      talent: ["Survival Skill", "Dark Soul Talent"]
    }
  },

  darkVoyage: {
    Description: "",
    choice: {
      notMeantToKnow: ["resistance(Fear) talent", "list of forbidden lore"]
    }
  },

  highVendetta: {
    Description: "",
    choice: {
      talent: ["Die Hard", "Paranoia"]
    }
  },

  //Motivation

  Vengeance: {
    choice: ["list of hatred talents"]
  },

  renown: { choice: ["Air of Authority", "Peer (choice) talent"] },

  pride: { choice: ["toughness", "list of heirlooms"] },

  prestige: { choice: ["Talnted (choice) talent", "Peer (choice) talent"] }
};

module.exports = OriginPath;
