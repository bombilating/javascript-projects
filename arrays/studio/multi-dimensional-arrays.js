let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
let foodArray;
let equipmentArray;
let petsArray;
let sleepAidsArray;
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodArray = food.split(",").sort();
equipmentArray = equipment.split(",").sort();
petsArray = pets.split(",").sort();
sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray]
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cabinetNumber = input.question("Enter Cabinet Number Between 0 - 3: ");
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinetNumber < 0 || cabinetNumber > 3) {
    console.log("That is an invalid cabinet number.");
} else {
    console.log(`The contents of Cabinet ${cabinetNumber} are \n ${cargoHold[cabinetNumber]}`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cabinetItem = input.question("Enter an item to search for: ");
if (cargoHold[cabinetNumber].includes(cabinetItem)) {
    console.log(`Cabinet ${cabinetNumber} DOES contain ${cabinetItem}.`)
} else {
console.log(`Cabinet ${cabinetNumber} DOES NOT contain ${cabinetItem}.`)
}