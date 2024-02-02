// Code your crewMass function here:

function calculateCrewMass(crewArr) {
  let crewMass = 0;
  for(i=0;i<crewArr.length;i++) {
    crewMass += crewArr[i].mass;
  }
  return Math.round(crewMass*10)/10;
}

// Code your fuelRequired function here:
function calculateTotalMass(crewArr) {
  let totalMass = calculateCrewMass(crewArr) + 75000;
  for(i=0;i<crewArr.length;i++){
    if(crewArr[i].species === "cat" || crewArr[i].species === "dog") {
      totalMass += 200;
    } else {
      totalMass += 100
    }
  return totalMass
  }
}
function calculateFuelRequired() {
  let fuelRequired = Math.ceil(calculateTotalMass(crew) * 9.5); 
  return fuelRequired;
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 
console.log(`The mission has a launch mass of ${calculateTotalMass(crew)} kg and requires ${calculateFuelRequired()} kg of fuel.`)