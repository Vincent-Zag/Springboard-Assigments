const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const firstWaterType = mythicalCreatures.find(function(mythicalCreatures){
	return mythicalCreatures.type === "Water";
});

const griffin = mythicalCreatures.findIndex(function (mythicalCreatures){
	return mythicalCreatures.name === "Griffin";
});

const forestLoc = mythicalCreatures.find(function(mythicalCreatures){
	return mythicalCreatures.lastSeen === "Enchanted Forest";
});



console.log(firstWaterType);
console.log(griffin);
console.log(forestLoc);
