const guests = {
    ANTONY: {
      title: "General",
      region: "Rome",
      dietaryPreference: "Vegetarian",
      pastGifts: ["Golden Laurel", "Chariot"]
    },
    CICERO: {
      title: "Orator",
      region: "Arpinum",
      dietaryPreference: "Omnivore",
      pastGifts: ["Scroll of Proverbs", "Quill"]
    }
  };

  
// Step 1

guests.BRUTUS ={
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
}

// Step 2
guests.CICERO.pastGifts.push("Golden Lyre");

// Step 3
guests.ANTONY.region;

// Step 4
delete guests.CICERO;

// Step 5
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

// Q1
//after executing Step 5 ANTONY's Region will be set to Egypt 
//since it is still referencing the original guest lists data
//since both are using hte same memory if one is changed the other willl be as well