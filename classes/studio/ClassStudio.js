//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name,mass,scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }    

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    addScore(newScore) {
        return this.scores.push(newScore);
    }
    
    average() {
        let sum = 0;
        for(let i=0;i<this.scores.length;i++) {
            sum += this.scores[i]
        }
        return Math.round(sum / this.scores.length * 10) / 10
    }

    status() {
        let acceptanceStatus = '';
        let scoreAverage = this.average();
        if(scoreAverage >= 90) {
            acceptanceStatus = 'Accepted';
        } else {
            if(scoreAverage < 90 && scoreAverage >= 80) {
                acceptanceStatus = 'Reserve';
            } else {
                if(scoreAverage < 80 && scoreAverage >= 70) {
                    acceptanceStatus = 'Probationary';
                } else {
                    acceptanceStatus = 'Rejected';
                }
            }
        }
        return acceptanceStatus;
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62]);

console.log(bear);
console.log(maltese);
console.log(gator);
bear.addScore(83);
console.log(bear.scores);
console.log(maltese.average());


console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
while(gator.status() != 'Reserve') {
    gator.addScore(100);
}
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);
