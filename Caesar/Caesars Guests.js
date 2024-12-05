const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

// Step1
guests.unshift('BRUTUS');

// Question1
guests[0];

// Step 2
guests.push('AUGUSTUS', 'LUCIA');

// Step 3
const sparticusIdx = guests.indexOf('SPARTICUS');

// Question 2
// it would be -1

// Step 4
guests.splice(guests.indexOf('CASSIUS'),1);

// Step 5
const specInv = guests.slice(0,3);

// Step 6
const specialGuest = guests.slice(0,1);
const others = guests.slice(1);
others.sort();
const newOrder = specialGuest.concat(others);