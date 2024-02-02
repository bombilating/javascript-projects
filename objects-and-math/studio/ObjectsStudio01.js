// Code your selectRandomEntry function here:

function selectRandomEntry(arr){
  let randomEntry = Math.floor(Math.random()*arr.length);
  return arr[randomEntry];
}

// Code your buildCrewArray function here:

function buildCrewArray(idNums,candids){
  let crewArray = [];
  for(i=0;i<idNums.length;i++){
    for(j=0;j<candids.length;j++) {
    if(candids[j].astronautID === idNums[i]){
      crewArray.push(candids[j]);
      }
    } 
  }
  console.log(`${crewArray[0].name}, ${crewArray[1].name}, and ${crewArray[2].name} are going to space`)
  return crewArray;
}


let idNumbers = [291, 414, 503, 599, 796, 890];

let randomArray = []
while(randomArray.length < 3) {
  let randomEntry = selectRandomEntry(idNumbers);
  if(randomArray.includes(randomEntry)) {
    continue
  } else {
  randomArray.push(randomEntry)
  }
};

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

buildCrewArray(randomArray,animals);
// Code your template literal and console.log statements:
