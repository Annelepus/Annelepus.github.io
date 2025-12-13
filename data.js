// data.js

const Characters = {
  "0016": {
    id: "0016",
    name: "Laevatain",
    gender: "Female",
    race: "Sarkaz",
    faction: "Rhodes Island",
    class: "Striker",
    weapon: "Sword",
    element: "Heat",
    height: "162 cm",
    dob: "January 22nd",
    age: "Unknown",
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
        description: `An attack with up to 5 sequences that deals <span style="color: rgb(255, 136, 119)">Heat DMG</span>. 
            As the controller operator, Final Strike also deals 27 <span style="color: #DFBB92">stagger</span>. <br>
            <span style="font-weight: bold">Dive attack:</span> <br> Basic attack performed in mir-air becomes a dive attack that deals <span style="color: rgb(255, 136, 119)">Heat DMG</span> to nearby enemies. <br>
            <span style="font-weight: bold">Finisher:</span> <br> Basic attack performed near a Staggered enemy becomes a finisher attack that deals massive <span style="color: rgb(255, 136, 119)">Heat DMG</span> and recovers some SP.
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

      battleSkill: {
        name: "Smouldering Fire",
        description: `Summons a Magma fragment to continuously attack enemies and deal <span style="color: rgb(255, 136, 119)">Heat DMG</span>. 
            Hitting the enemy grants 1 stack of Melting Flame. <br>
            If Laevatain already has 4 stack(s) of Melting Flame when casting the skill, she then consumes all the stacks and performs <br>
            an additional attack that deals <span style="color: rgb(255, 136, 119)">Heat DMG</span> and forcibly triggers temporary <span style="color: rgb(255, 136, 119)">Combustion</span> to all enemies in a large area. <br>
            When the additional attack hits the enemy, restore additional Ultimate Energy. <br>
            The skill's effects are enhanced while Laevatain's ultimate is active.`,
        spCost: 100,
        atkmult: [4.00, 4.40, 4.80, 5.20, 5.60, 6.00, 6.40, 6.80, 7.20, 7.70, 8.30, 9.00],
        icon: "images/Operators/Laevatain/Skills/Blade of Conflagration BattleSkill.png",
      },

      comboSkill: {
        name: "Seethe",
        description: `Fire erupts beneath the feet of any enemy with <span style="color: rgb(255, 136, 119)">Combustion</span> or <span style="color: #aad531">Corrosion</span>, dealing <span style="color: rgb(255, 136, 119)">Heat DMG</span> to them. <br>
            If the skill hits the enemy, Laevatain gains 1 stack of Melting Flame and further gains Ultimate Energy per enemy hit. <br>
            Trigger: When an enemy suffers <span style="color: rgb(255, 136, 119)">Combustion</span> or <span style="color: #aad531">Corrosion</span>.`,
        atkmult: [4.04, 4.44, 4.85, 5.25, 5.66, 6.06, 6.46, 6.84, 7.27, 7.78, 8.38, 9.09],
        heatresreductionmult: [0.10, 0.12, 0.12, 0.14, 0.14, 0.14, 0.16, 0.16, 0.16, 0.17, 0.18, 0.20],
        icon: "images/Operators/Laevatain/Skills/Smouldering_ThornsCombo.png",
      },
      Ultimate: {
        name: "Twilight",
        description: `Laevatain summons her Sviga Lævi and becomes the controlled operator. For a certain duration, her basic attacks (BATK) are enhanced<br>
        and the Sviga Lævi strikes together with Laevatain, with each attack dealing <span style="color: rgb(255, 136, 119)">Heat DMG</span>.
        BATK sequence-3 also applies <span style="color: rgb(255, 136, 119)">Heat Infliction</span>.`,
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
        ultEnergyCost: 300,
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
        description: `Assign to Manufacturing Cabin to slow down Mood Drop of all operators in it by 10/14%.`,
      },

      combatTalent1: {
        name: "Scorching Heart",
        description: `When the controlled operator's Final Strike or Finisher hits the enemy, Laevatain absorbs <span style="color: rgb(255, 136, 119)">Heat Infliction</span> from nearby enemies. 
            Every stack of <span style="color: rgb(255, 136, 119)">Heat Infliction</span> absorbed gives Laevatain 1 stack of Melting Flame (max 4 stacks).<br>
            At 4 stacks, DMG dealt by Laevatain ignores 10/15/20 Heat Resistance of the enemy for 20s. <br>
            Laevatain also absorbs <span style="color: rgb(255, 136, 119)">Heat Infliction</span> from enemies defeated nearby.`,
      },

      combatTalent2: {
        name: "Re-Ignition",
        description: `When HP drops below 40%, gain 90% <span style="color #44b7ff">Protection</span> and restore 5% Max HP per second for 4/8s. <br> 
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
  },

  "0003": {
    id: "0001",
    name: "Endministrator",
    gender: "[data_missing]",
    race: "[data_missing]",
    faction: "Endfield Industries",
    class: "Striker",
    weapon: "Sword",
    element: "Physical",
    height: "?",
    dob: "[data_missing]",
    age: "[data_missing]",
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
        name: "Destructive Sequence",
        description: `An attack with up to 5 sequences that deals <span style="color: rgb(135, 135, 135)">Physical DMG</span>. 
            As the controller operator, Final Strike also deals 18 <span style="color: #DFBB92">stagger</span>. <br>
            <span style="font-weight: bold">Dive attack:</span> <br> Basic attack performed in mir-air becomes a dive attack that deals <span style="color: rgb(135, 135, 135)">Physical DMG</span> to nearby enemies. <br>
            <span style="font-weight: bold">Finisher:</span> <br> Basic attack performed near a Staggered enemy becomes a finisher attack that deals massive <span style="color: rgb(135, 135, 135)">Physical DMG</span> and recovers some SP.`,
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
        icon: "images/Operators/Endmin/Skills/Destructive_Sequence.png",
      },

      battleSkill: {
        name: "Constructive Sequence",
        description: `A forceful burst of Originium Arts that attacks enemies within the area of effect. Deals <span style="color: rgb(135, 135, 135)">Physical DMG</span> and applies <span style="color: rgb(135, 135, 135)">Crush</span>`,
        spCost: 100,
        atkmult: [4.00, 4.40, 4.80, 5.20, 5.60, 6.00, 6.40, 6.80, 7.20, 7.70, 8.30, 9.00],
        icon: "images/Operators/Endmin/Skills/Constructive_Sequence.png",
      },

      comboSkill: {
        name: "Sealing Sequence",
        description: ` When another operator in the team deals DMG with combo skills.
        SKILL DESCRIPTION: Rushes to the enemy's side to deal <span style="color: rgb(135, 135, 135)">Physical DMG</span> and attach Originium Crystals that temporarily seals them. 
        Applying <span style="color: rgb(135, 135, 135)">Physical Status</span> or <span style="color: #DFBB92">Vulnerable</span> to the sealed energy consumes the Originium Crystals and deals additional <span style="color: rgb(135, 135, 135)">Physical DMG</span>. `,
        atkmult: [4.04, 4.44, 4.85, 5.25, 5.66, 6.06, 6.46, 6.84, 7.27, 7.78, 8.38, 9.09],
        heatresreductionmult: [0.10, 0.12, 0.12, 0.14, 0.14, 0.14, 0.16, 0.16, 0.16, 0.17, 0.18, 0.20],
        icon: "images/Operators/Endmin/Skills/Sealing_Sequence.png",
      },
      Ultimate: {
        name: "Bombardment Sequence",
        description: `Bombards the ground with Originium Arts, dealing massive <span style="color: rgb(135, 135, 135)">Physical DMG</span> to all enemies within a fan-shaped area. 
        If the enemy has Originium Crystals on them, this skill consumes the Originium Crystals and deals one more hit of <span style="color: rgb(135, 135, 135)">Physical DMG</span>. `,
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
        icon: "images/Operators/Endmin/Skills/Bombardment_Sequence.png",
      }
    },

    talents: {
      baseTalent1: {
        name: "[Data-missing]",
        description: `The Endministrator does not possess any Base Skill`,
      },

      baseTalent2: {
        name: "[Data-missing]",
        description: `The Endministrator does not posses any Base Skill`,
      },

      combatTalent1: {
        name: "Essence Disintegration",
        description: `When the Originium Crystals attached to the enemy is consumed, the Endministrator gains <span style="color: #DFBB92">ATK</span> +15/30% for 15s. This effect cannot stack.`,
      },

      combatTalent2: {
        name: "Realspace Stasis",
        description: `Enemies with attached Originium Crystals suffer <span style="color: rgb(135,135,135)">Physical DMG</span> Taken +10/20%.`,
      },

    },

    potentials: {
      pot1: {
        name: "Final Awakening",
        description: `<b>Final Awakening</b><br>Battle skill Constructive Sequence improved: Consuming Originium Crystals returns 50 SP.`,
      },

      pot2: {
        name: "Reflection of Authority",
        description: `<b>Reflection of Authority</b><br>Talent Essence Disintegration improved: When the Endministrator gains the ATK buff, other allied operators gain half of this ATK buff.`,
      },

      pot3: {
        name: "???",
        description: `???`,
      },

      pot4: {
        name: "???",
        description: `???`,
      },

      pot5: {
        name: "???",
        description: `???`,
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
      splashart: "images/Endmin/Endministrator_Splash_Art.png",
      icon: "images/Endmin/Endministrator_card.png",
    },

    lore: "Need to expand on Laevatain's lore later. too much work rn."
  },
  "0022": {
    id: "0022",
    name: "Verana",
    gender: "Female",
    race: "Phidia",
    faction: "Endfield Industries",
    class: "Caster",
    weapon: "Handcannon",
    element: "Nature",
    height: "?",
    dob: "June 21st",
    age: "[data_missing]",
    rarity: 4,

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
        name: "Signature Gun Kata",
        description: `An attack with up to 4 sequences that deals <span style="color: #9CD54A">Nature DMG</span>. 
            As the controlled operator, Final Strike also deals 15 <span style="color: #DFBB92">stagger</span>. <br>
            <span style="font-weight: bold">Dive attack:</span> <br> Basic attack performed in mid-air becomes a dive attack that deals <span style="color: #9CD54A">Nature DMG</span> to nearby enemies. <br>
            <span style="font-weight: bold">Finisher:</span> <br> Basic attack performed near a Staggered enemy becomes a finisher attack that deals massive <span style="color: #9CD54A">Nature DMG</span> and recovers some SP.
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
        icon: "images/Operators/Fluorite/Skills/Signature_Gun_Kata.png",
      },

      battleSkill: {
        name: "Tiny Surprise",
        description: `Kicks an Improvised Explosive that sticks to the target, applying <span style="color: #9CD54A">Slow</span> and exploding after a short duration. The explosion deals <span style="color: #9CD54A">Nature DMG</span> and <span style="color: #9CD54A">Nature Infliction</span> to enemies in the area of effect.
        <br>Defeating the target also sets off the Improvised Explosive immediately.<br>
        Only 1 Improvised Explosive can be present in the battlefield.<br>`,
        spCost: 100,
        atkmult: [4.00, 4.40, 4.80, 5.20, 5.60, 6.00, 6.40, 6.80, 7.20, 7.70, 8.30, 9.00],
        icon: "images/Operators/Fluorite/Skills/Tiny_Surprise.png",
      },

      comboSkill: {
        name: "Free Giveaway",
        description: `Shoots the target enemy to trigger a special explosion that deals <span style="color: #9CD54A">Nature DMG</span> and applies another
        <span style="color: #9CD54A">Arts Infliction</span> of the element already on the enemy.<br>
        <b>Trigger:</b> When an enemy has 2 or more stacks of <span style="color: #2fa5b1">Cryo Infliction</span> or <span style="color: #9CD54A">Nature Infliction</span>.`,
        atkmult: [4.04, 4.44, 4.85, 5.25, 5.66, 6.06, 6.46, 6.84, 7.27, 7.78, 8.38, 9.09],
        heatresreductionmult: [0.10, 0.12, 0.12, 0.14, 0.14, 0.14, 0.16, 0.16, 0.16, 0.17, 0.18, 0.20],
        icon: "images/Operators/Fluorite/Skills/Free_Giveaway.png",
      },
      Ultimate: {
        name: "Apex Prankster",
        description: `Fluorite quickly moves in an arc and rapidly fires at the target within the arc to deal 4 sequences of <span style="color: #9CD54A">Nature Dmg</span>. <br>If an Improvised Explosive has been stuck to the target, the skill detonates it immediately and increases the DMG and size of the explosion`,
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
        ultEnergyCost: 80,
        icon: "images/Operators/Fluorite/Skills/Apex_Prankster.png",
      }
    },

    talents: {
      baseTalent1: {
        name: "Wildlands Trekker",
        description: `Assign to Growth Chamber to grant rare mineral growth rate +10/20%`,
      },

      baseTalent2: {
        name: "Reader of Emotions",
        description: `Assign to Control Nexus to grant all operators' Mood Regen +8/12%`,
      },

      combatTalent1: {
        name: "Scorching Heart",
        description: `Fluorite gains DMG Dealt +10/20% against Slowed targets.`,
      },

      combatTalent2: {
        name: "Unpredictable",
        description: `Grants 20% chance of Arts DMG immunity and grants Fluorite ATK +10/20% for 10s. This effect cannot stack.`,
      },

    },

    potentials: {
      pot1: {
        name: "Ten-Finger Smith",
        description: `<b>Ten-Finger Smith</b><br>Agility +10, Intellect +10.`,
      },

      pot2: {
        name: "Mind Reading Technique",
        description: `<b>Mind Reading Technique</b><br>Talent Unpredictable improved: Chance to ignore Arts DMG +10%.`,
      },

      pot3: {
        name: "Triple Surprise",
        description: `<b>Triple Surprise</b><br>Battle skill Tiny Surprise improved: Explosion of the Improvised Explosive now Slow icon.pngslows all enemies hit for 6s.`,
      },

      pot4: {
        name: "Prank Master",
        description: `<b>Prank Master</b><br>Ultimate Apex Prankster improved: Ultimate Energy cost -10%.`,
      },

      pot5: {
        name: "Craver of Chaos",
        description: `<b>Craver of Chaos</b><br>Combo skill Free Giveaway improved: Whenever <span style="color: #2fa5b1">Cryo Infliction</span> or <span style="color: #9CD54A">Nature Infliction</span> is applied to the enemy, cooldown is shortened by 1s. Effect can only trigger once every 1s.`,
      },
    },

    promotion: [
      {
        elite: 1,
        materials: [
          { name: "Protodisk", amount: 8 },
          { name: "Pink Bolete", amount: 3 },
          { name: "T-Creds", amount: 1600 }
        ]
      },
      {
        elite: 2,
        materials: [
          { name: "Protodisk", amount: 25 },
          { name: "Red Bolete", amount: 5 },
          { name: "T-Creds", amount: 6500 }
        ]
      },
      {
        elite: 3,
        materials: [
          { name: "Protoset", amount: 8 },
          { name: "Ruby Bolete", amount: 3 },
          { name: "T-Creds", amount: 25000 }
        ]
      },
      {
        elite: 4,
        materials: [
          { name: "Protoset", amount: 75 },
          { name: "x", amount: 3 },
          { name: "Bloodcap", amount: 8 },
          { name: "T-Creds", amount: 225000 }
        ]
      },
    ],

    images: {
      splashart: "images/Fluorite/Fluorite_Splash_Art.png",
      icon: "images/Fluorite/Fluorite_card.png",
    },

    lore: "Need to expand on Fluorite's lore later. too much work rn."
  }
};

export default Characters;
