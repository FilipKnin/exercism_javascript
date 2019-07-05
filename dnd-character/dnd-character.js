//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
   const abilityModifierTable = {
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4
  }
  let modifier = abilityModifierTable[ability];

  if (ability < 3) {
    throw 'Ability scores must be at least 3'
  } else if (ability > 18) {
    throw 'Ability scores can be at most 18'
  } else {
    return modifier;
  }
};

export class Character {
  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
  }

  static rollAbility() {
    return Math.floor(Math.random() * 16) + 3;
  }




  get strength() {
    return this._strength;
  }

  set strength(value) {
    this._strength = value;
  }

  get dexterity() {
    return this._dexterity;
  }

  set dexterity(value) {
    this._dexterity = value;
  }

  get constitution() {
    return this._constitution;
  }

  set constitution(value) {
    this._constitution = value;
  }

  get intelligence() {
    return this._intelligence;
  }

  set intelligence(value) {
    this._intelligence = value;
  }

  get wisdom() {
    return this._wisdom;
  }

  set wisdom(value) {
    this._wisdom = value;
  }

  get charisma() {
    return this._charisma;
  }

  set charisma(value) {
    this._charisma = value;
  }

  get hitpoints() {
    return 10 + abilityModifier(this._constitution);
  }
}
