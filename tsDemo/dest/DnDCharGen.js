"use strict";
function rollDice() {
    // empty array to store the rolls
    const rolls = [];
    // we roll the dice four times
    for (let i = 0; i < 4; i++) {
        // in each iteration, we generate a rando number between 0 and 1
        /// this will give us a random number between 1 and 1-6
        rolls.push(Math.floor(Math.random() * 6) + 1);
        // we push the random number into the rolls array
    }
    rolls.sort((a, b) => a - b); // we sort in ascending and only take the top 3
    return rolls[1] + rolls[2] + rolls[3]; // Sum the top 3 rolls
}
// this will give us the score for 1 ability
// find sum of largest 3 dies out of 4 for each ability (so 5 times)
function generateCharacter() {
    // char has 6 abilities that are randomnly distruibted
    const abilities = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom', 'Charisma'];
    // we create an object that stores teh ability and the values
    const character = {};
    // the key can be any string and trhe value is a number
    for (const ability of abilities) {
        character[ability] = rollDice();
        // we iterate over each abilitiy in the abilities array and call teh rollDice function to randomnly give it a value
    }
    const constitution = character['Constitution'];
    const constitutionModifier = Math.floor((constitution - 10) / 2);
    // hit poiints =
    // we find the char constitution from (10 + (constition -10/2))
    const hitPoints = 10 + constitutionModifier;
    character['Constitution Modifier'] = constitutionModifier;
    character['Hit Points'] = hitPoints;
    return character;
}
const character = generateCharacter();
for (const [ability, score] of Object.entries(character)) {
    console.log(`${ability}: ${score}`);
}
