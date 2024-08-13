// return true or false if leap year

// leap year = divisable by 4

function isLeapYear(year: number): boolean {
    return ((year % 4 == 0) &&
        ((year % 100 != 0) || (year % 400 == 0)))
}

console.log(`1992 is a leap year? ${isLeapYear(1992)}`);
console.log(`1990 is a leap year? ${isLeapYear(1991)}`);
console.log(`2000 is a leap year? ${isLeapYear(2000)}`);
console.log(`2000 is a leap year? ${isLeapYear(2002)}`);
console.log(`1996 is a leap year? ${isLeapYear(1996)}`);
console.log(`2024 is a leap year? ${isLeapYear(2024)}`);
