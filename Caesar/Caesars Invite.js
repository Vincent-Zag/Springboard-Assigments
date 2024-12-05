const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

//Step 1:

let loc = "";

if (emblemClue1 === "Eagle"){
    loc = "Forum";
}else if(emblemCLue1 === "Lion"){
    loc = "Colosseum";
}else{
    loc = "Villa";
}

//Step 2:

if (emblemClue2 === "Laurel" &&  loc === "Forum" ){
    loc += " of Augustus";
}else if(emblemClue1 === "Grapes" || loc === "Villa"){
    loc += " of Pompey";
}else{
    loc = "Villa";
}

//Step 3: 

switch (emblemClue3){
case 7:
    loc += " North";
    break;
case 3:
    loc += " South";
    break;
case 9:
    loc += " East";
    break;
case 4:
    loc += " West";
    break;
}

//Question:
// It is important to be careful when using ==  or === in our conditionals because of the importance of type conversions. 
// === is strictly seeing if the value and type is the same while == is only value so when comparing 5 and "5" 
// with == it will count as equal even though one is a string and the other is a number.