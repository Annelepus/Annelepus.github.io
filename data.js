// data.js

const Characters = [
  {
    id: "0016",
    name: "Laevatain",
    gender: "Female",
    race: "Sarkaz",
    faction: "Rhodes Island",
    class: "Striker",
    weapon: "Sword",
    height: "162 cm",
    dob: "January 22nd",
    rarity: 6,

    attributes: {
    // Base stats at levels 1, 20, 40, 60 and 80 respectively.
    hp: [500, 1556, 2689, 3811, 4934],
    atk: [30, 91, 156, 221, 285],
    strength: [14, 37, 61, 85, 109],
    agility: [9, 29, 49, 70, 90],
    intellect: [22, 56, 91, 125, 160],
    will: [9, 26, 44, 63, 81]
    },

    skills: {
      
        // Basic Attack
        basicAttack: {
            name: "Flaming Cinders",
            description: `Basic Attack: <br> An attack with up to 5 sequences that deals Heat DMG. 
            As the controller operator, Final Strike also deals 18 stagger. <br>
            Dive attack: <br> Basic attack performed in mir-air becomes a dive attack that deals Heat DMG to nearby enemies. <br>
            Finisher: <br> Basic attack performed near a Staggered enemy becomes a finisher attack that deals massive Heat DMG and recovers some SP.
            `,
        basicmult: [
          [0.29, 0.33, 0.48, 0.52, 0.71],
          [0.31, 0.37, 0.52, 0.57, 0.78],
          [0.34, 0.40, 0.57, 0.63, 0.86],
          [0.37, 0.43, 0.63, 0.68, 0.93],
          [0.40, 0.47, 0.67, 0.73, 1.00],
          [0.43, 0.50, 0.71, 0.78, 1.07],
          [0.46, 0.53, 0.76, 0.84, 1.14],
          [0.48, 0.57, 0.81, 0.89, 1.21],
          [0.51, 0.60, 0.86, 0.94, 1.28],
          [0.55, 0.64, 0.91, 1.01, 1.37],
          [0.59, 0.69, 0.99, 1.08, 1.48],
          [0.64, 0.75, 1.07, 1.18, 1.60]
        ],
        dodgemult: [0.59, 0.64, 0.70, 0.76, 0.82, 0.88, 0.93, 0.99, 1.05, 1.13, 1.21, 1.32],
        finishermult: [2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00, 4.25, 4.50, 4.81, 5.19, 5.63],
        divemult: [0.55, 0.61, 0.66, 0.72, 0.77, 0.83, 0.88, 0.94, 0.99, 1.06, 1.14, 1.24],
            icon: "images/Operators/Laevatain/Skills/Sviga Laevi Basic.png",
      },

        battleSkill:{
            name: "Blade of Conflagration",
            description: `Summons a Magma fragment to continuously attack enemies and deal Heat DMG. 
            Hitting the enemy grants 1 stack of Melting Flame. <br>
            If Laevatain already has 4 stack(s) of Melting Flame when casting the skill, she then consumes all the stacks and performs <br>
            an additional attack that deals Heat DMG and forcibly triggers temporary Combustion to all enemies in a large area. <br>
            When the additional attack hits the enemy, restore additional Ultimate Energy. <br>
            The skill's effects are enhanced while Laevatain's ultimate is active.`,
            spCost: 100,
            atkmult: [4.00, 4.40, 4.80, 5.20, 5.60, 6.00, 6.40, 6.80, 7.20, 7.70, 8.30, 9.00],            
            icon: "images/Operators/Laevatain/Skills/Blade of Conflagration BattleSkill.png",
        },

        comboSkill:{
            name: "Smouldering Thorns",
            description: `Fire erupts beneath the feet of any enemy with Combustion or Corrosion, dealing Heat DMG to them. <br>
            If the skill hits the enemy, Laevatain gains 1 stack of Melting Flame and furhter gains Ultimate Energy per enemy hit. <br>
            Trigger: When an enemy suffers Combustion or Corrosion.`,
            atkmult: [4.04, 4.44, 4.85, 5.25, 5.66, 6.06, 6.46, 6.84, 7.27, 7.78, 8.38, 9.09],
            heatresreductionmult: [0.10, 0.12, 0.12, 0.14, 0.14, 0.14, 0.16, 0.16, 0.16, 0.17, 0.18, 0.20],
            icon: "images/Operators/Laevatain/Skills/Smouldering_ThornsCombo.png",
        },
        Ultimate: {
            name: "Ring of Twilight",
            description: `Laevatain summons her Sviga Lævi and becomes the controlled operator. For a certain duration, 
            her basic attacks (BATK) are enhanced and the Sviga  Lævi strikes together with Laevatain, with each attack dealing Heat DMG. 
            BATK sequence 3 also applies Heat Infliction.`,
        ultextramult: [
          [0.68, 0.81, 1.22, 1.80],
          [0.74, 0.89, 1.34, 1.98],
          [0.81, 0.97, 1.46, 2.16],
          [0.88, 1.05, 1.58, 2.34],
          [0.95, 1.13, 1.70, 2.52],
          [1.01, 1.22, 1.82, 2.70],
          [1.08, 1.30, 1.94, 2.88],
          [1.15, 1.38, 2.07, 3.06],
          [1.22, 1.46, 2.19, 3.24],
          [1.30, 1.56, 2.34, 3.47],
          [1.40, 1.68, 2.52, 3.74],
          [1.52, 1.82, 2.73, 4.05]
        ],
            ultEnergyCost: 130,
            icon: "images/Operators/Laevatain/Skills/Ring_of_TwilightUltimate.png",
        }
    },

    talents: {
        baseTalent1: {
            name: "Memory Crucible",
            description: `Assign to Manufacturing Cabin to grant operator EXP material production efficiency +10/20%`,
        },

        baseTalent2: {
            name: "Undying Flames",
            description: `Assign to Manufacturing Cabin to slow down Mood Drop of all operators in it by 14/18%.`,
        },

        combatTalent1: {
            name: "Scorching Heart",
            description: `When the controlled operator's Final Strike or Finisher hits the enemy, Laevatain absorbs Heat Infliction from nearby enemies. 
            Every stack of Heat Infliction absorbed gives Laevatain 1 stack of Melting Flame (max 4 stacks).<br>
            At 4 stacks, DMG dealt by Laevatain ignores 10/15/20 Heat Resistance of the enemy for 20s. <br>
            Laevatain also absorbs Heat Infliction from enemies defeated nearby.`,
        },

        combatTalent2: {
            name: "Re-Ignition",
            description: `When HP drops below 40%, gain 90% Protection and restore 5% Max HP per second for 4/8s. <br> 
            This effect can be triggered once every 120s.`,
        },

    },

    potentials: {
        pot1: {
            name: "Heart of Melting Flame",
            description: `Battle skill "Blade of Conflagration" improved: Additional attack multiplier is increased to 1.2 times the original, <br>
            and scoring a hit returns 20 SP.`,
        },

        pot2: {
            name: "Pursuit of Memories",
            description: `Intellect +20, Basic Attack DMG dealt +15%.`,
        },

        pot3: {
            name: "Fragments from the Past",
            description: `Battle skill "Blade of Conflagration" improved: Combustion duration +50% and Status Level +1.`,
        },

        pot4: {
            name: "Ice Cream Furnace",
            description: `Ultimate "Ring of Twilight" improved: Ultimate Energy cost -15%`,
        },

        pot5: {
            name: "Proof of Existence",
            description: `Ultimate "Ring of Twilight" improved: Enhanced basic attack DMG multiplier is increased to 1.2 times the original; <br>
            during the ultimate, every enemy defeated by Laevatain extends ultimate duration by +1s (max +7s).`,
        }
    },

    promotion: [
        {
        elite: 1,
        materials: [
          { name: "Material A", amount: 8 },
          { name: "Material B", amount: 3 },
          { name: "T-Creds", amount: 1600 }
        ]
        },
        {
        elite: 2,
        materials: [
          { name: "Material A", amount: 25 },
          { name: "Material B", amount: 5 },
          { name: "T-Creds", amount: 6500 }
        ]
        },
        {
        elite: 3,
        materials: [
          { name: "Material A", amount: 8 },
          { name: "Material B", amount: 3 },
          { name: "T-Creds", amount: 25000 }
        ]
        },
        {
        elite: 4,
        materials: [
          { name: "Material A", amount: 75 },
          { name: "Material B", amount: 3 },
          { name: "Material C", amount: 8 },
          { name: "T-Creds", amount: 225000 }
        ]
      },
    ],

    images: {
      splashart: "images/Laevatain/Laevatain_Splash_Art.png",
      icon: "images/Laevatain/Laevatain_card.png",
    },

    lore: "Need to expand on Laevatain's lore later. too much work rn."
  }
];

export default Characters;
