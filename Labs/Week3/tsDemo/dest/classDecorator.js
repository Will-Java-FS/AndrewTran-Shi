"use strict";
// Decorators have functionality that is executed
// Annotations just provide labels for your code.
Object.defineProperty(exports, "__esModule", { value: true });
exports.classDecorator = classDecorator;
// the export keyword allows us to import this into another file
function classDecorator(constructor) {
    console.log("This class decorator was called from " + constructor.name);
}
