function fizzBuzz(n) {
    if( n >= 100 || n < 1){
        console.log("Error");
        return;
    }
    for (let i = 1; i <= n; i++){
        if (n % 5 === 0 && n % 3 === 0){
            console.log('FizzBuzz');
        }else if (n % 5 === 0){
            console.log("Buzz");
        }else if (n % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}

//=======================================

function letterCount(word) {
    const lowerCased = word.toLowerCase();
    const letters = new Map();
    for (let i = 0; i <= lowerCased.length; i++){
        let char = lowerCased[i];
        if(letters.has(char)){
            letters.set(char, letters.get(char) + 1);
        }
        else{
            letters.set(char,1);
        }
    }
    return letters;
}