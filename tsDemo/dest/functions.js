"use strict";
// Function
function doSomething(fn) {
    fn("Hello!");
}
function printToConsole(s) {
    console.log(s);
}
doSomething(printToConsole);
