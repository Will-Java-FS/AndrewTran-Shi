"use strict";
class DnDCharacter {
    constructor() {
        this.strength = this.generateAbilityscore();
        this.dexterity = this.generateAbilityscore();
        this.constitution = this.generateAbilityscore();
        this.intelligence = this.generateAbilityscore();
        this.wisdom = this.generateAbilityscore();
        this.charisma = this.generateAbilityscore();
        this.hitpoints = 10 + this.getModifer(this.constitution);
    }
    generateAbilityscore() {
        // holds the 4 dice roles that is generated by the randomgenator
        const rolls = [...Array(4)].map(_ => this.generateRandomDiceRollScore());
        // sort our dice rolls in order from greatest to smallest, drops teh lowerst number and addds the rest together
        return rolls.reduce((a, b) => a + b, 0);
    }
    getModifer(numberValue) {
        return Math.floor((numberValue - 10) / 2);
    }
    generateRandomDiceRollScore() {
        return Math.floor(Math.random() * 6) + 1;
    }
}
const wizard = new DnDCharacter();
console.log(DnDCharacter);
console.log(`Your Wizard has the following stats:
Strength: ${wizard.strength}
Dexterity: ${wizard.dexterity}
Constitution: ${wizard.constitution}
Intelligence: ${wizard.intelligence}
Wisdom: ${wizard.wisdom}
Charisma: ${wizard.charisma}
Hit Points: ${wizard.hitpoints}`);
