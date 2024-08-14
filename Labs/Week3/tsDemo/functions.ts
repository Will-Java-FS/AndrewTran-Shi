// Function
function doSomething(fn: (a: string) => void) {
    fn("Hello!");
}

function printToConsole(s: string) {
    console.log(s);
}

doSomething(printToConsole);