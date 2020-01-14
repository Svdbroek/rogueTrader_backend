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
    "Void-Master",
    "Explorator",
    "Missionary",
    "Seneschal",
    "Navigator",
    "Rogue Trader"
  ],

  // homeworld extra choices
  "Death World": {
    description: `Death world characters are those who have travelled offworld and have left behind the danger and ferocity of their
    home. They are rugged, uncomplicated individuals for the
    most part, often drawn to the bold lifestyle of the Archmilitant or the Void-master. Unfortunately, death worlders
    are uncomfortable in the complex social situations common
    to civilised worlds and rarely find themselves able to relax
    amongst the decadence and intrigues of noble society. Death
    worlders are renowned for their resilience and exemplify the
    concept of survival of the fittest.
    `,

    effects: [
      {
        "Characteristic Modifiers": ` +5 Strength, +5 Toughness,
    –5 Willpower, –5 Fellowship`
      },
      {
        "Starting Skills": `Gain
    the Survival Skill.`
      },
      {
        Hardened: {
          description: `Death worlders are accustomed to violence.
      In addition, many death worlds contain many venomous
      predators. Death worlders may choose to start one of the
      following talents: Jaded or Resistance (Poisons)`,
          choice: ["Talent: Jaded", "Talent: Resistance (Poison)"]
        }
      },
      {
        "If It Bleeds, I Can Kill It": `Gain the Melee Weapon Training (Primitive) Talent.`
      },
      {
        Paranoid: `Suffer a –10 penalty to all Interaction Skill Tests made
      in formal surroundings`
      },
      { Survivor: `Gain a +10 bonus to any test to resist Pinning and Shock.` },
      {
        "Starting Wounds": ` Death world characters double their
      starting Toughness Bonus and add 1d5+2 to the result to
      determine their starting number of Wounds.`
      },
      {
        "Starting Fate Points": `: Roll 1d10 to determine a death
      world character’s starting Fate Points. On a 1–5, he begins
      with 2 Fate Points; on a 6–10, he begins with 3 Fate
      Points.`
      }
    ]
  },

  "Void Born": {
    description: `You have called the interior of a huge Imperial vessel or voidstation your home all your life, but now you have been thrust
      into the company of others—people completely unlike your
      peers amongst the void born—and the culture shock gnaws
      at you. You feel awkward in the company of those born upon
      worlds, an outsider, distrusted and strange, in their eyes. You
      come into your own when your expertise is required, however,
      and what to others may be stark terrors are old familiar
      enemies to you. Unlike the world born, you are not blinded
      by ignorance when confronted by psychic phenomena, warp
      anomalies, and the strange technology of void-ships, and as
      such, your kind make the best Void-masters and Astropaths. As
      long as common dirt-dwellers stand in awe or fear of you, they
      will cease trying to make you fit into their strange cultures and
      will leave you to your own ways and your own secrets.`,
    effects: [
      { "Characteristic Modifiers": " –5 Strength, +5 Willpower" },
      {
        "Starting Skills": ` All void born can speak a language unique
      to their home vessel. Void born gain the Speak Language (Ship
      Dialect) Skill.`
      },
      {
        Charmed: `The void born are touched by the fickle powers
      of the warp, making them preternaturally lucky. Whenever a
      void born character spends a Fate Point (though not if he burns
      one), roll a 1d10. On the roll of a natural 9, the Fate Point is
      not lost.`
      },
      {
        "Ill-omened": `Whether because of their strange looks,
      clannish ways, or unwholesome air, the void born are shunned
      and mistrusted by most. In addition, the void born are most
      likely to attract any negative attention that the party of Explorers
      creates—accusations of deceit in trade, disgruntled negotiators,
      mobs armed with stones, and so on. Because of this, void born
      characters suffer a –5 penalty on all Fellowship Tests made to
      interact with non-void born humans.`
      },
      {
        Shipwise: `Birthed in the depths of a voidfaring craft,
      the void born have a natural affinity for such vehicles. As a
      result, Navigation (Stellar) (Int) and Pilot (Spacecraft) (Ag) are
      untrained Basic Skills (instead of Advanced Skills) for void
      born characters.`
      },
      {
        "Void Accustomed": `Due to their strange and unnatural
      childhood, the void born are used to the vagaries of changing
      gravity. They are immune to space travel sickness. In addition,
      zero- or low-gravity environments are not considered Difficult
      Terrain for void born characters.`
      },
      {
        "Starting Wounds": `Void born characters double their starting
      Toughness Bonus and add 1d5 to the result to determine their
      starting number of Wounds.`
      },
      {
        "Starting Fate Points": `Roll 1d10 to determine a void born
      character’s starting Fate Points. On a 1–5, he begins with 3
      Fate Points; on a 6–10, he begins with 4 Fate Points.`
      }
    ]
  },

  "Forge World": {
    description: `Forge worlds are not environments that reward, let alone
      tolerate, weakness in body or in mind. To have survived and
      prospered enough to leave a forge world’s rigid society, a
      character must possess drive, ambition, and good fortune, or
      at the very least be bloody-minded and ruthless enough to
      have endured. You find yourself in a wider Imperial society
      that is at once familiar and strangely alien, where fools either
      fear or profane sacred technology and have no understanding
      of its spiritual mysteries and purity of essence. Nor do they
      seem to grasp that men can only prosper by the teachings
      of the Omnissiah, that survival requires power, and power is
      knowledge incarnate.`,
    effects: [
      {
        "Characteristic Modifiers": ` –5 Weapon Skill, +5
      Intelligence`
      },
      {
        "Starting Skills": `Common Lore (Tech) (Int) and Common
      Lore (Machine Cult) (Int) are untrained Basic Skills for forge
      world characters.`
      },
      {
        "Credo Omnissiah": `Rather than being fully indoctrinated
      into the Imperial Cult, even the lowliest member of a forge
      world’s society is brought up to properly venerate the spirits
      of the machine and taught the basic rites of tech-propitiation.
      All forge world characters begin with the Technical Knock
      Talent.`
      },
      {
        "Fit For Purpose": {
          description: `A forge world inhabitant is tested,
            indoctrinated, and trained from birth for his chosen station
            and role in life. Weakness is not tolerated, and failure brings
            painful incentives to do better. Even those who follow an
            errant path must strive to be better than their peers to survive.
            Because of this, a starting forge world character may increase
            a Characteristic of his choice by +3.`,
          choice: ["WS", "BS", "S", "T", "Ag", "Int", "Per", "WP", "fel"]
        }
      },
      {
        "Stranger to the Cult": `Although forge world born
      citizens know that the Emperor is their god and saviour, they
      see the Imperial Creed through the lens of Cult Mechanicus
      doctrine. As a result, they can be surprisingly—and sometimes
      dangerously—ignorant of the common teachings and practices
      of the Ecclesiarchy, often failing to offer its clerics the level
      of deference they expect. Forge world characters suffer a
      –10 penalty on Tests involving knowledge of the Imperial
      Creed and a –5 penalty on Fellowship Tests to interact with
      members of the Ecclesiarchy in formal settings.`
      },
      {
        "Starting Wounds": `Forge world characters double their
      starting Toughness Bonus and add 1d5+1 to the result to
      determine their starting number of Wounds.`
      },
      {
        "Starting Fate Points": `Roll 1d10 to determine a forge
      world character’s starting Fate Points. On a 1–5, he begins
      with 2 Fate Points; on a 6–9, he begins with 3 Fate Points;
      on a 10, he begins with 4 Fate Points.`
      }
    ]
  },

  "Hive World": {
    description: `Not all hivers are content to serve their world in the traditional
     fashion, toiling until death. Some dream of better lives, driven
     by a desire for wealth, freedom, power, or adventure, or just
     the urge to escape terrible poverty. You are one such hiver—a
     young adventurer, willing to chance all for a taste of wealth,
     prestige, and power. Hivers are resourceful and quick-witted,
     more likely to rely on tech-devices and fast-talking than
     outright confrontation.
     Characteristic Modifiers: –5 Toughness, +5 Fellowship
     Starting Skills: All hive worlders can converse in the
     common cant of their home, each one unique to its hive of
     origin. Hive worlders gain the Speak Language (Hive Dialect)
     (Int) as an untrained Basic Skill.
     Accustomed to Crowds: Hivers grow up surrounded by
     crowds. They are used to weaving through even the densest
     mobs with ease. Crowds do not count as Difficult Terrain for
     hivers, and when Running or Charging through a dense crowd,
     hivers take no penalty to the Agility Test to keep their feet.
     Caves of Steel: To a hiver, surrounded at all times by
     metal, machinery, and industry, the lesser arcane mysteries of
     technology are not so strange. Hivers treat the Tech-Use (Int)
     Skill as an untrained Basic Skill.
     Hivebound: Hivers seldom endure the horrors of the
     open sky or the indignity of the great outdoors. They suffer
     a –10 penalty to all Survival (Int) Tests, and whilst out of a
     “proper hab” (e.g., places without manufactured goods, solid
     ceilings, and electrical power) the hiver suffers a –5 penalty to
     all Intelligence Tests.
     Wary: Hivers are constantly alert for the first hint of trouble,
     be it a gang shoot-out, hab riot, or hivequake. All hivers gain a
     +1 bonus to Initiative rolls.
     Starting Wounds: Hive world characters double their
     starting Toughness Bonus and add 1d5+1 to the result to
     determine their starting number of Wounds.
     Starting Fate Points: Roll 1d10 to determine a hive world
     character’s starting Fate Points. On a 1–5, he begins with 2
     Fate Points; on a 6–8, he begins with 3 Fate Points; on a 9–10,
     he begins with 4 Fate Points.`
  },

  "Imperial World": {
    description: `To have broken away from the dogmatic constraints of Imperial
      life, your character must either be of exceptional spirit or have
      true potential. Perhaps you are an adventurer or soldier, or a
      true believer beginning a long pilgrimage to prove your faith;
      maybe you are a mercenary, brought in to defend a planet
      during wartime. You have undoubtedly seen conflict, madness,
      or perhaps even heresy, and now, for whatever reason, you are
      embarking into unknown voids in the God-Emperor’s name.
      Characteristic Modifiers: +3 Willpower
      Blessed Ignorance: Imperial citizens know that the proper
      ways of living are those tried and tested by the generations that
      have gone before. Horror, pain, and death are the just rewards
      of curiosity, for those that look too deeply into the mysteries
      of the universe are all too likely to find malefic beings looking
      back at them. Their wise blindness imposes a –5 penalty on
      Forbidden Lore (Int) Tests.
      Hagiography: Widespread scriptures describing the
      lives—and, more importantly, the deaths—of the Emperor’s
      blessed saints and warmasters, and the sequence of endless 
      wars, crusades, and terrors that make up history, grant Imperial
      citizens a comparatively wide knowledge of the Imperium of
      Man. Imperial worlders gain Common Lore (Imperial Creed)
      (Int), Common Lore (Imperium) (Int), and Common Lore (War)
      (Int) as untrained Basic Skills.
      Liturgical Familiarity: Surrounded as they are by the
      zealous and the faithful, Imperial citizens are accustomed to
      the tutelage of the Ecclesiarchy. Imperial world characters
      gain Literacy (Int) and Speak Language (High Gothic) (Int) as
      untrained Basic Skills.
      Starting Wounds: Imperial world characters double
      their starting Toughness Bonus and add 1d5 to the result to
      determine their starting number of Wounds.
      Starting Fate Points: Roll 1d10 to determine an Imperial
      world character’s starting Fate Points. On a 1–8, he begins with
      3 Fate Points; on a 9–10, he begin with 4 Fate Points.`
  },

  "Noble Born": {
    description: `You were born into wealth and privilege, educated by tutors, and
      tempered by spiteful intrigues. You know how to move in the
      high circles of Imperial society, you know how to bend others
      to your will, and you have never been touched by the harsh
      life endured by common citizens. You may be an honourable
      and faithful soul, well aware of the duties your station imposes
      on you, or a dissolute, apostate rakehell who cares naught for
      the low-born. Either way, the risk and the power of a Rogue
      Trader’s dynasty beckon to you.
      Characteristic Modifiers: –5 Willpower, +5 Fellowship
      Starting Skills: Noble born characters begin play with
      Literacy (Int), Speak Language (High Gothic) (Int), and Speak
      Language (Low Gothic) (Int) as untrained Basic Skills.
      Etiquette: Nobles are schooled in how to comport
      themselves in all manner of formal situations. They gain a
      +10 bonus on Interaction Skill Tests when dealing with high
      authority and in formal situations.
      Legacy of Wealth: To be born an Imperial noble is to
      inherit a legacy of staggering wealth. Even a scorned scion
      enjoys access to resources beyond the wildest dreams of the
      toiling masses. This adds +1 to the group’s starting Profit
      Factor.
      Supremely Connected: Nobles have extensive connections,
      and they know that dropping the “right” names into a
      conversation can open more doors than a fistful of Thrones.
      A starting noble born character begins play with the Peer
      (Nobility) Talent. Also, to reflect his family’s powerbase, he also
      gains one additional Peer from the following list: Academics,
      Adeptus Mechanicus, Administratum, Astropaths, Ecclesiarchy,
      Government, Mercantile, Military, or Underworld.
      Vendetta: Every noble house has its sworn enemies and
      rivals who would do it and its members harm. Even the
      protection of a Rogue Trader’s mission merely forces those who
      wish you harm to be a bit more cautious and subtle in exacting
      their vengeance. As a result, starting noble born characters have
      powerful enemies, perhaps in the shape of a rival noble house
      or some other powerful group. The details of these enemies
      are left to the player and the Game Master to define, working
      together to create a formidable threat. Whilst they do not
      dog the character’s steps at every turn, these enemies aim to
      inconvenience, harm, or kill him whenever he crosses their
      path. The noble character, of course, is free to return the favour
      when it’s expedient to do so.
      Starting Wounds: Noble born characters double their
      starting Toughness Bonus and add 1d5 to the result to
      determine their starting number of Wounds.
      Fate Points: Roll 1d10 to determine a noble born
      character’s starting Fate Points. On a 1–3, he begins with 2
      Fate Points; on a 4–9, he begins with 3 Fate Points; on a 10 he
      begins with 4 Fate Points.`,
    choice: [
      "Academics",
      "Adeptus Mechanicus",
      "Administratum",
      "Astropaths",
      "Ecclesiarchy",
      "Government",
      "Mercantile",
      "Military",
      "Underworld"
    ]
  },

  //Birthright extra choices

  Scavenger: {
    description: `You became an adult amidst the yearning and poverty of the
    least of the God-Emperor’s flock, one soul amongst countless
    underhivers, renegades, bonepickers, and a thousand other
    outcast castes that exist on the fringes of the Imperium,
    scavenging what they can to survive. All that you owned was
    claimed from the wastes of those far above you in the Imperial
    hierarchy or gleaned from the wreckage and ashes of past war
    and catastrophe—at least, everything that wasn’t taken from
    the bodies of your peers and rivals, of course. Yours was a
    hard life lived upon a knife-edge: the dark abyss of starvation
    on one side and death or worse on the other. A childhood
    where each day of survival was a triumph has hardened and
    honed you, but left its scars on your soul.`,
    effects: [
      {
        "Choose a talent": {
          description: `You gain the Unremarkable Talent or the Resistance (Fear) Talent`,
          choice: ["Talent: Resistance (Fear)", "Talent: Unremarkable"]
        }
      },
      {
        "Choose a bonus": {
          description: `you gain a +3 bonus to your choice of Willpower or Agility`,
          choice: ["Bonus: Willpower +3", "Bonus: Agility +3"]
        }
      },
      {
        "Choose a Affliction": {
          description: ` You suffer your choice of 1d5 Corruption Points or 1d5 Insanity Points`,
          choice: [`Affliction: 1d5 Corruption`, `Affliction: 1d5 Insanity`]
        }
      }
    ]
  },

  Scapegrace: {
    description: `An orphan of the borderland between light and dark, you spent
    years living by your wits as a scapegrace amidst entertainers,
    gangers, reclaimators, and other ne’er-do-wells on the fringes
    of Imperial society. Your youth was spent in a grey borderland
    where the near-outcast mingled with shadowed figures risen
    from the depths and thrill-seekers come down from safer
    climes. A good scapegrace knows that the law only applies
    to those caught by the enforcers, that a life is worth only
    as much as is spent on keeping it. You’ve carried these hard
    earned lessons on into later life. Survival is best thought of
    as a game, with pleasure and ease the rewards along the way.
    A body must eat, drink, and live well, for death can come
    calling when it pleases.
    Effect: You gain Sleight of Hand as a trained Basic
    Skill, plus a bonus of +3 to your choice of Intelligence or
    Perception. You suffer your choice of 1d5 Corruption Points
    or 1d5 Insanity Points`,
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

  Tainted: {
    //mutant needs subchoices how?
    description: `You are vile in the eyes of the holy, declared tainted by your
    twisted form or marked by your accursed bloodline or your
    strange demeanour and heretical beliefs. Few look more closely
    than is needed to condemn you, fearing the contagion of evil
    and the judgment of the God-Emperor’s appointed servants.
    But despite the excoriation by the witless fools who have turned
    their hands against you, your soul burns for greatness. You now
    search relentlessly for the place where you might attain even a
    small fraction of what would have been your rightful victories
    were your life not so blighted by fate, and the power to avenge
    yourself on those who would see you suffer.`,
    effects: [
      {
        "Source of your Taint": {
          description: `Choose one of the following results and apply it to
    your character`,
          choice: ["Mutant", "Insane", "Deviant Philosophy"],
          subchoice: {
            Mutant: {
              description: `You must roll once on Table 14-3: Mutations
            (see page 369). If you choose, you may spend 200 xp to
            select one result from the table (must be a result of lower
            than 76–00) instead of rolling randomly.`,
              choices: ["random", "some mutation", "and another"]
            },
            Insane: {
              description: `Insane: You suffer your choice of either –3 Fellowship
            or –1 Fate point. You gain +3 Toughness, the Peer (The
            Insane) Talent, and suffer 2d10 Insanity Points.`,
              choices: ["Bonus: Fellowship -3", "Fate: -1"]
            },
            "Deviant Philosophy": {
              description:
                " You gain +3 Willpower andthe Enemy (Ecclesiarchy) Talent.`"
            }
          }
        }
      }
    ]
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

  "The Hand of War": {
    description: `The Imperium of Man is wracked by war and violence, whilst
    beyond its borders the strife and conflict is even worse in many
    regions. Not all wars, however, are equal, and you were caught
    up in a bitter and terrifying campaign in which starships were
    left as burning hulks and cities were blasted to ruin in a vicious
    series of battles that saw no quarter asked or given. The war
    and the enemy you fought to the death has had a profound
    effect on you, and to the present day, the faces of the dead
    haunt you still when you close your eyes. Now, you count only
    those you have fought and bled with as true allies, and will
    never forgive your old foe. You strive hard for what you
    desire, for you know that death stands never more than
    a heartbeat away.`,
    effects: [
      {
        "The Ashes of War": {
          description: `You gain one Weapon
        Training Talent of your choice, or the Leap Up
        Talent,`,
          choice: ["weapon training 1", "weapon training 2", "Talent: Leap up"]
        }
      },
      {
        Hatred: {
          description: `you gain the Hatred Talent against 
        your foe in the war that defined your past.`,
          choice: [
            `Talent: Hatred (Orks)`,
            `Talent: Hatred (Eldar)`,
            `Talent: Hatred (mutants)`,
            `Talent: Hatred (Chaos worshippers)`,
            `Talent: Hatred (the Imperial Guard)`,
            `Talent: Hatred (the Imperial Navy)`,
            `Talent: Hatred (void pirates)`
          ]
        }
      },
      {
        "The Face of the Enemy": `You will never willingly have
    dealings with your sworn enemy except under the direst
    circumstances, and if you must do so, you suffer –10 to all
    Fellowship Tests in those dealings. Also, if given the slightest
    provocation, you will react violently towards them. (You may
    take a Willpower Test to avert this, modified by the provocation
    and the consequences of succumbing to your hatred.)`
      }
    ]
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

  Endurance: {
    description: `You seek to endure and, in enduring, grow stronger. You
      welcome opposition, risk, setbacks, injury, and pain as old
      friends—for these trials are but a stairway by which you will
      climb to greater heights. Endure, and you shall be made mighty
      in the God-Emperor’s eyes, and a power of the Imperium.
      The virtuous welcome the storm, the Imperial Creed
      teaches, for its fury guides humanity upon the path to strength
      in body and soul. Just as a mighty tree sheds its weakest limbs
      before the tearing winds, and stands the greater for it, so too is
      humanity made sturdy by struggle and want. Others would put
      it more simply: the weak die and only the strong remain, and
      you choose to be the latter.`,
    effects: [{ Tough: "+1 wound" }]
  },

  Vengeance: {
    choice: ["list of hatred talents"]
  },

  renown: { choice: ["Air of Authority", "Peer (choice) talent"] },

  pride: { choice: ["toughness", "list of heirlooms"] },

  prestige: { choice: ["Talnted (choice) talent", "Peer (choice) talent"] },
  //career discriptions

  "Astropath Trancendent": {
    description: `The Astropath Transcendent is a rare individual, indeed. He is a psyker whose powers and very essence has been touched
    by the light of the God-Emperor himself and who is able to form a lifeline of communication across the limitless gulfs of
    space, his soul armoured against the gnawing taint of the warp beyond. Each year, uncounted millions of psykers are born
    across the vast breadth of the Imperium. Most are detected and interred until collected by one of the fearsome Black Ships of
    the Adeptus Astra Telepathica. These vessels travel the galaxy in great circuits, their stygian holds inexorably filling with nascent
    psykers with each stop they make. The fate of the vast majority of the psykers is to fuel the insatiable fires of the Astronomican
    so that the Imperium might be held together for another day. Of those allowed to live, a tiny fraction are judged strong enough
    to undergo tutorage and go on to serve the Imperium in a staggering array of capacities, from Inquisitor to Battle Psyker.
    Those chosen to become Astropaths undergo the ritual of Soul Binding, in which the body and soul are scoured clean of the
    taint of the warp by the searing purity of the Emperor’s beneficence. After months of fasting, prayer, and ritual preparation, the
    psykers are brought into the very depths of the Emperor’s Palace in processions of a hundred at a time, there to undergo a ritual
    that will kill them, drive them insane, or bind them for all eternity to the Emperor. So intense is the ritual that the supplicants’
    sensory organs are almost totally overloaded—leaving them blinded by the experience—with many suffering further nerve
    damage, incurring loss of smell, touch, or hearing.
    Relying as heavily as the Imperium does on the warp for galactic communication, it has a great demand for Astropaths, and
    each newly created Astropath who survives the Soul Binding is inducted into the ranks of the Adeptus Astra Telepathica. There
    he learns to send his thoughts singing across the galaxy via the medium of the warp, adding his psychic voice to entire choirs
    of his fellows, and communicating with others of his kind on planets light years distant.
    It is a rare Astropath indeed who rises beyond his given duties and responsibilities in the ranks of the psychic choirs. Of those
    few who do so, most are placed in charge of Astropathic
    facilities and relay stations dotted across Imperial
    space. Those with the sharpest wits become itinerant
    emissaries or officials of the Adeptus Astra Telepathica
    itself or serve on the staff of Inquisitors or Lord Militants.
    Some of the most self-aware and strong-willed of their
    kind serve their vigils alongside Rogue Traders, casting
    their thoughts out far beyond the realms of Man into the
    great voids beyond the Emperor’s Domains.
    It takes a special type of Astropath to serve on the fringes of
    what is known, and such Astropaths must be both hard-hearted
    and savvy individualists if they are to persevere. Though the
    experiences vary wildly from one Astropath to the next, many are
    driven slowly mad by what they describe as cold, alien thoughts
    echoing in the black gulfs at the edges of the galaxy, while others
    find themselves growing increasingly alone the further out they
    travel, as the psychic voices of their fellows recede into the celestial
    distance. Those few that can endure these rigours are granted the
    title of Astropath Transcendent, and are both respected and a little
    feared by their contemporaries
    The duties of the Astropath Transcendent are a microcosm of those
    performed by the more established and ordinary psychic choirs of the
    Adeptus Astra Telepathica. Most Rogue Trader fleets are accompanied
    by little more than a handful of Astropaths, with perhaps only one being
    stationed on each vessel, and so their position is one of grave responsibility.
    They provide the only means of viable communication between widely scattered
    vessels, not to mention across interstellar distances, and as a consequence are
    highly valued members of the Rogue Trader’s inner circle. Many Rogue
    Traders would not even consider setting foot on the soil of a new world
    without an Astropath Transcendent at their side, ready to summon
    aid at a moment’s notice should disaster strike.`,
    effects: []
  }
};

module.exports = OriginPath;
