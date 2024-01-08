// Declare and assign the variables below
let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);
// Calculate a space mission below
let distanceToMarsMi = distanceToMarsKm * milesPerKilometer;
let timeToMarsHr = distanceToMarsMi / shuttleSpeed;
let timeToMarsDays= timeToMarsHr / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttle + " will take "+ timeToMarsDays + " days to reach Mars.");
// Calculate a trip to the moon below
let distanceToMoonMi = distanceToMoonKm * milesPerKilometer;
let timeToMoonHr = distanceToMoonMi / shuttleSpeed;
let timeToMoonDays = timeToMoonHr / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttle + " will take "+ timeToMoonDays + " days to reach the Moon.")
