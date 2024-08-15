"use strict";
let isSunny = true; // this is a boolean
let numberOne = 1; // this is a number type variable
let word = 'Hello, World!'; // TypeScript knows this is a string
// all this is using type inference, it is
// we can manually do it with the ':'
let numbers = [1, 2, 3]; // Array
let words = ["Hello", "World"]; // this is using generics interface
function add(a, b) {
    return a + b;
}
let func = (c) => { return c; };
console.log("Hello Yall");
console.log(word);
console.log(add(1, 4));
console.log(add(3, 4));
let test;
let Test2 = ['piza', 8, true];
Test2.push("new value");
let myTuuple = ['striped', 9, 'sweater'];
// Enum example
var Cities;
(function (Cities) {
    Cities[Cities["Columbus"] = 100] = "Columbus";
    Cities[Cities["NewYork"] = 200] = "NewYork";
    Cities[Cities["Miami"] = 300] = "Miami";
})(Cities || (Cities = {}));
console.log(Cities.Miami);
// Object Creation
const house = {
    type: "single family home",
    bedrooms: 4,
    bathrooms: 3,
    age: 10
};
console.log('house obj', house);
console.log("type :", house.type);
console.log(`Number of bathrooms ${house.bathrooms}`);
console.log(`Number of bedrooms ${house.bedrooms}`);
let car1 = 'Honda';
let car2 = 'Ford';
// const dog: Dog = {
//     size: "large",
//     age: 11,
//     breed: "Husky",
//     color: 'black'
// }
// console.log(dog)
// // { size: 'large', age: 11, breed: 'Husky', color: 'black' }
// Tuples
let myTuuple2;
myTuuple2 = [true, "purple", 14, true];
myTuuple2.push(9);
console.log(`myTuuple2 = `, myTuuple2);
let otherTuple;
otherTuple = ['hello', 1];
// otherTuple.push(true) // will give an error because boolean property not in readonly
function checkType(variable) {
    console.log(`the value is  + ${variable}`);
}
console.log(checkType(false));
console.log(checkType("True"));
// ENUMS
// String Enums
var dropdown;
(function (dropdown) {
    dropdown["IT"] = "IT Department";
    dropdown["HR"] = "Human Resources";
    dropdown["F"] = "Finance";
})(dropdown || (dropdown = {}));
console.log(dropdown.F);
// Enum Numbers
var Zipcode;
(function (Zipcode) {
    Zipcode[Zipcode["SF"] = 94122] = "SF";
    Zipcode[Zipcode["Other"] = 90123] = "Other";
    Zipcode[Zipcode["Texas"] = 90124] = "Texas";
    Zipcode[Zipcode["Miami"] = 0] = "Miami";
    Zipcode[Zipcode["Seattle"] = 1] = "Seattle";
})(Zipcode || (Zipcode = {}));
console.log(Zipcode.SF);
console.log(Zipcode.Other);
console.log(Zipcode.Texas); // 90124 it increments from 90123 , so above it
console.log(Zipcode.Seattle); // 1
// just know if you leave empty, it will auto increment for you.
