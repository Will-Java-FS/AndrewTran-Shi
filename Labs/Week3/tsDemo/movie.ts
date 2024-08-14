class Movie {
    id: number;
    title: string;
    price: number;
    isAvailable: boolean;
    returnDate: number;

    constructor(id: number, title: string, price: number, isAvailable: boolean, returnDate: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.isAvailable = isAvailable;
        this.returnDate = returnDate;
    }

    // when you declare functions inside a class def, we dont need the function keyword
    checkOut(): void {
        // TS requires you to specify this is an instance member using the `this` keyword
        // sets thhe isAvailable var to false
        this.isAvailable = false;
        this.returnDate = Date.now() + 1000 * 3600 //  we have to do some math becuase the now returns milliseconds
        console.log(this.isAvailable)

        // you have to use the this keyword to reference the function
        // doSomething(){
        //     this.checkOut();
        // }

    }
}


// Unlike Java you can write code outside of the class

let movie1 = new Movie(1, "The Avengers", 10.99, true, 0);
console.log(`Movie is available ? : ${movie1.isAvailable}`) // isAvailable should be true
console.log(movie1.checkOut())
console.log(`Movie is available ? : ${movie1.isAvailable}`) // now isAvailable should be false



