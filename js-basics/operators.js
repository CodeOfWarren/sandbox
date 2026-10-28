let apples = '3';
let orange = '4';

let fruits = orange + apples; // = 43 both are string

let fruits2 = +apples + +orange; // the plus + before the variable converts the string to numbers so the result is 7;

console.log(`${fruits} and ${fruits2}`);