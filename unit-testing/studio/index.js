
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"]
}

function launchOutput(num) {
    let statement = '';
    if(num%2 != 0 && num%3 != 0 && num%5 != 0) {
        statement = "Rutabagas! That doesn't work.";
        return statement
    }
    if((num%2 == 0 || num%3 == 0) && num%5 == 0) {
        if(num%3 != 0) {
            statement = "Launch Rocks! (CRASH!!!!)"
            return statement
        }
        if(num%2 == 0) {
            statement += 'Launch';
        }
        if(num%3 == 0) {
            statement += 'Code';
        } 
        statement += ' Rocks!';
        return statement
    }
    if(num%2 == 0) {
        statement += 'Launch';
    }
    if(num%3 == 0) {
        statement += 'Code';
    } 
    if(num%5 == 0) {
        statement += 'Rocks';
    }
    statement += "!"
    return statement
}

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput
};

