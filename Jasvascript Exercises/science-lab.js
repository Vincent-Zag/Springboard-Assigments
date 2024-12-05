/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Dr. John Smith";
const age = 38;
const studyField = "Optometry";

const participant = {
    name,
    age,
    studyField
};

console.log("Participant:",name, "Age:",age,"Field of Expertise:",studyField);

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.

const particiapantInfo = {
    ...participant,
    displayinfo(){
        console.log("Participant:",this.name, "Age:",this.age,"Field of Expertise:",this.studyField);
    }
}

particiapantInfo.displayinfo();


/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
/*
 * Observations:
 * TODO: Explain here.
 * arrow function doesnt have a this function so i takes hte scope from the enclosed one which is the global scope taht leads to undefined
 */

const updatedParticiapantCopy = {
    ...participant,
    displayinfo: () => {
        console.log("Participant:",this.name, "Age:",this.age,"Field of Expertise:",this.studyField);
    }
}

updatedParticiapantCopy.displayinfo();


/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.

function updatedParticipantInfo (participant, key, value){
    return {
        ...participant,
        [key]: value
    };
}

const updatedParticipant = updatedParticipantInfo(participant, "project", "Glaucoma");
console.log(updatedParticipant);