import { classDecorator } from "./classDecorator";
@classDecorator
class basicClass {
    private message: string;

    constructor(message: string) {
        this.message = message;

    }
    greeting() {
        console.log(this.message);
    }
}

const basic = new basicClass("Hell World!");
basic.greeting();