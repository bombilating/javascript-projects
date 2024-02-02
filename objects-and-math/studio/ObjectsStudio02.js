// Code your orbitCircumference function here:

function orbitCircumference(rad) {
  return Math.round(rad * 2 * Math.PI);
}

console.log(orbitCircumference(2000))
// Code your missionDuration function here:

function missionDuration(numorbits,rad = 2000,speed =  28000) {
  let distance = orbitCircumference(rad) * numorbits;
  let time = Math.round(distance / speed * 100) / 100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`)
  return time
}

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  let randomEntry = Math.floor(Math.random()*arr.length);

  return arr[randomEntry];
}

function selectO2EfficientEntry(arr){
  if (arr.length <= 1) {
    return arr[0];
  }
  else {
    if (arr[0].o2Used > arr[1].o2Used) {
        arr.shift();
        return selectO2EfficientEntry(arr);
    }
    if (arr[0].o2Used <= arr[1].o2Used) {
        arr.splice(1,1);
        return selectO2EfficientEntry(arr);
    }
}
}
// Code your oxygenExpended function here:

function oxygenExpended(candid,rad,speed) {
  let duration = missionDuration(3,rad,speed);
  let oxygenUse = Math.round(candid.o2Used(duration)*1000)/1000;
  console.log(`${candid.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUse} kg of oxygen.`)
  return oxygenUse;
}

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 
oxygenExpended(selectO2EfficientEntry(crew))
