// Decorators have functionality that is executed
// Annotations just provide labels for your code.


// the export keyword allows us to import this into another file
export function classDecorator(constructor: Function) {
    console.log("This class decorator was called from " + constructor.name)
}