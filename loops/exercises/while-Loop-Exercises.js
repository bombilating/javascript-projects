//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let numberOfAstronauts = 0;
let altitudeKm = 0;

const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

fuelLevel = Number(input.question("Enter starting fuel level: "));
while(fuelLevel < 5001 || fuelLevel > 29999) {
  fuelLevel = Number(input.question("That is an invalid input. Please enter an amount greater than 5000 but less than 30000: "))
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
numberOfAstronauts = Number(input.question("Enter number of astronauts: "));
while(numberOfAstronauts > 7 || numberOfAstronauts < 1) {
  numberOfAstronauts = Number(input.question("That is an invalid input. Please enter an amount that does not exceed the maximum of 7: "));
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while(fuelLevel>=0) {
  fuelLevel -= numberOfAstronauts * 100;
  altitudeKm += 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitudeKm} km.`)

if(altitudeKm >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.")
}