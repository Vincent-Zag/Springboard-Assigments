const friend = "BRUTUS";
const shiftValue = 3;

// step1

let latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

// step 2

const fLetter = friend[0].toLowerCase();
const idx = latinAlphabet.indexOf(fLetter);

// Q1
// because the index start at 0.
// in a string "hello" the index is counted as [0,1,2,3,4] 
// h = 0, 3 = 1, l = 2 and so on 

// Q2
let encrptedLetter = latinAlphabet[fLetter + idx];


// Q3
// modulo will help wrap the alphabet. it ensures we start at 0 that way it stays in bounds of the scope. 

// Q4
const alphabetLength = latinAlphabet.length();

// Q5
const newIdx = (idx + shiftValue) % alphabetLength;
const encrptedFLetter = alphabet[newIdx];

// Q6
const encriptedMsg = "EUXWXV";
const slicedClue = encriptedMsg.slice(0,3);
