//Step 1

let randNumb = Math.random(0,1);

//Step 2
const range = 33 - 3 + 1;

//Q1

//so that it inclusive wit h31 possible numbers between 3 and 33

//Step 3
let numInRange = range * randNumb;

// Q2 

// Since multiplying the range with the random number it will give a value within the range

//Step 4
num = Math.floor(numInRange);

// Q3 
// floor is when you want to round down instead of round up as a default.
//Math.round() could five a out of bounds round up

// Step 5
const shiftVal = num + 3;

// Q4 
// since num is a number between - and the range - 1 adding 3 shifts it up thus allowing it to be in rage of 3 to 33
