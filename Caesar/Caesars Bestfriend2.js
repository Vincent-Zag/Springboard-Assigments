const friend = "BRUTUS";
const shiftValue = 3;

// Step 1:
const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

// Step 2:
let encrptFriend = "";

for (let i = 0; i < friend.length; i++){    
    const currLetter = friend[i];
    const newIdx = (latinAlphabet.indexOf(currLetter.toLowerCase()) + shiftValue) % latinAlphabet.length;
    encrptFriend += latinAlphabet[newIdx].toUpperCase();
}

// Q1
// Using a for loop is advantageous over manually encrypting each letter because you can 
// scale the number of letters needed to be converted so the loop does all the work for 100 
// characters while you have to manually type 100 conversions.
// the scale is what gives the edge for 'for' loops and repetitiveness 

// Q2
// the % alphabet.length is the edge case to see if the letters go out of bounds that was it 
// wraps right back to the start.