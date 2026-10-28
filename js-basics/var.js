console.log('Hello World');

let firstName = 'Warren';
let lastName = 'Abayon';

console.log('My name is ' + firstName + " " + lastName);

let myAge = '18';
console.log(myAge);

myAge = '34';
console.log(myAge);


const pi = 3.14;

// pi = 10; /connot pass the value

console.log(pi);

/***Assignment***/

console.log(2+5);
console.log((4 + 9 + 7) / 77);


let a = 10;
console.log(a);

a = 20;
console.log(a);

let b =  7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);



function updateName() {
    const name = prompt('What is your name?');
    btnName.textContent = `Player 1: ${name}`;
    
}

const btnName = document.querySelector('button');
btnName.addEventListener("click", updateName)

/* 
using Capital letter for constant is suggested for 
hard-coded values, or already been available or processed like:

const COLOR_RED: #123466;
*/

/*TASK */

const 
name = 'John',
admin = name;

console.log(admin);



const 
planetName = 'Earth',
currentUserName = 'John';


/*Numbers */

const myInt = 5 ;
const myFloat = 6.667;

myInt;
myFloat;

console.log(typeof(myFloat));

/**
 * Number Methods
 */

const lotsOfDecimal = 1.76600258754;
console.log(lotsOfDecimal.toFixed(2)); /*1.77*/

const MyNum = '100';
const myHeight = 34;
console.log(Number(MyNum) + myHeight); /* Number() converts string number to numbers */


/*increment and decrement operator */

let num1 = 7;
num1++;
console.log(num1); 


/*Assignment Operators */

let x = 3;
let y = 4;
x *= y;
console.log(x);

