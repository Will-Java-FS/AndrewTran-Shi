class Animal {
    name: string;
    size: string;

    // the constructor keyword initializes our Animal class
    constructor(name: string, size: string) {
        this.name = name;
        this.size = size;
    }

    sound() {
        console.log(`The ${this.name} makes a loud sound!`);
    }
}

const animal = new Animal('dog', 'large');


