const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Step1

function encryptLetter(letter, shift) {
    return alphabet[(alphabet.indexOf(letter.toLowerCase())+ shift) % alphabet.length];    
}

console.log("A",encryptLetter("A",3));
console.log("B",encryptLetter("B",2));
console.log("C",encryptLetter("C",1));

//Step 2

function encryptMessage(word,shift) {
    let message = "";
    for(let i = 0; i < word.length; i++){
        message += encryptLetter(word[i],shift);
    }
    return message;
}

console.log("BRUTUS",encryptMessage(friend,3));


//Step 3
function decryptLetter(encryptLetter,shift) {
    return alphabet[(alphabet.indexOf(encryptLetter.toLowerCase()) - shift + alphabet.length) % alphabet.length];   
}

console.log("d",decryptLetter("d",3));
console.log("d",decryptLetter("d",2));
console.log("d",decryptLetter("d",1));


//Step 4

function decryptMessage(encryptedWord,shift) {
    let message = "";
    for(let i = 0; i < encryptedWord.length; i++){
        message += decryptLetter(encryptedWord[i],shift);
    }
    return message;
}

console.log("euxwxv",decryptMessage("euxwxv",3));

// Question
// it will be "brutus" but not capitalized unless we set it after decrypting it otherswise it will revert to the original message just not capitalized unless toUpperCase is called in the decryption function