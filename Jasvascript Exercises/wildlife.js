/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animals){
	animals.forEach(element => {
		console.log(element);
	});
}
sightings("dog","cat","fox","parrot","tiger","lion");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const habitats = [...forestHabitats, ...savannahHabitats];
console.log(habitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const updatedRhino = {
	...rhinoStatus,
	population: 1000,
	status: "Invasive"
};

console.log(updatedRhino);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * when its is a nested property shallow copy works as modifying the traits would also change the traits of the first profile since they have the same reference
 */

const shallowLionProfile = {
	...lionProfile,
	genetics: 'Linear'
};

console.log(lionProfile);
console.log(shallowLionProfile);

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 * since its referencing the same memory the shallow copy also affects the original 
 */

const changedEcosystem = {
	...ecosystemHealth, 
	foodSupply: {
		...ecosystemHealth.foodSupply, herbivores: "Extinct", carnivores: "Abundant"
	}
};
console.log(ecosystemHealth);
console.log(changedEcosystem);