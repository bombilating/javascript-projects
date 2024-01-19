const input = require('readline-sync');
let str = input.question("Type Anything ");
let amountOfLetters = input.question("How many letters would you like moved? ")
let movingLetters;
if (str.length < amountOfLetters){
    movingLetters = str.slice(0,3);
    console.log("There is not enough letters to move so only 3 will be moved by default")
} else {
    movingLetters = str.slice(0,amountOfLetters);
}
newStr = str.replace(movingLetters, "")
newStr += movingLetters;
console.log(`${str} is rearranged to become ${newStr}` )

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
