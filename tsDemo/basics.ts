let isSunny = true; // this is a boolean
let numberOne = 1; // this is a number type variable
let word: string = 'Hello, World!'; // TypeScript knows this is a string
// all this is using type inference, it is
// we can manually do it with the ':'

let numbers: number[] = [1, 2, 3]; // Array
let words: Array<string> = ["Hello", "World"]; // this is using generics interface

function add(a: number, b: number) {
    return a + b;
}

let func = (c: number): number => { return c };

console.log("Hello Yall");
console.log(word);
console.log(add(1, 4));
console.log(add(3, 4));



let test: [string, number, boolean];
let Test2: (string | number | boolean)[] = ['piza', 8, true];
Test2.push("new value");

let myTuuple: readonly [string, number, string] = ['striped', 9, 'sweater'];

// Enum example
enum Cities {
    Columbus = 100,
    NewYork = 200, // Add a comma after the enum member name
    Miami = 300,
}

console.log(Cities.Miami);

// Object Creation
const house: { type: string, bedrooms: number, bathrooms: number, age: number } = {
    type: "single family home",
    bedrooms: 4,
    bathrooms: 3,
    age: 10

}

console.log('house obj', house);
console.log("type :", house.type);
console.log(`Number of bathrooms ${house.bathrooms}`)
console.log(`Number of bedrooms ${house.bedrooms}`)

type car = 'Toyota' | 'Ford' | 'Honda';
let car1: car = 'Honda';
let car2: car = 'Ford';
// let car3:car = 'BMW' // this gives us an error because BMW not part of type car

interface Animal {
    size: string;
    age: number
}
interface Dog extends Animal {
    breed: String;
    color: string;
}

// const dog: Dog = {
//     size: "large",
//     age: 11,
//     breed: "Husky",
//     color: 'black'

// }
// console.log(dog)
// // { size: 'large', age: 11, breed: 'Husky', color: 'black' }

// Tuples
let myTuuple2: [boolean, string, number, boolean]
myTuuple2 = [true, "purple", 14, true]
myTuuple2.push(9)
console.log(`myTuuple2 = `, myTuuple2)


let otherTuple: readonly [string, number];
otherTuple = ['hello', 1]
// otherTuple.push(true) // will give an error because boolean property not in readonly

function checkType(variable: string | boolean) {
    console.log(`the value is  + ${variable}`)
}
console.log(checkType(false));
console.log(checkType("True"));


// ENUMS

// String Enums

enum dropdown {
    IT = "IT Department",
    HR = "Human Resources",
    F = "Finance"
}
console.log(dropdown.F)

// Enum Numbers
enum Zipcode {
    SF = 94122,
    Other = 90123,
    Texas,
    Miami = 0,
    Seattle
}
console.log(Zipcode.SF)
console.log(Zipcode.Other)
console.log(Zipcode.Texas) // 90124 it increments from 90123 , so above it
console.log(Zipcode.Seattle) // 1
// just know if you leave empty, it will auto increment for you.