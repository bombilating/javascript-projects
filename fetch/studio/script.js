//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
        const container = document.getElementById("container");
        container.innerHTML += `<div class="count">
        <h3>Total number of Astronauts: ${json.length}`
        let sortedjson = json.sort(function(astr1,astr2) {
            return astr2.hoursInSpace-astr1.hoursInSpace
        })
        for(i=0;i<sortedjson.length;i++) {
        if(sortedjson[i].active) {
        activeColor = ` style = "color:green"`}
        else{activeColor = ""}
        container.innerHTML += `<div class="astronaut">
        <div class="bio">
            <h3>${sortedjson[i].firstName} ${sortedjson[i].lastName}</h3>
            <ul>
            <li>Hours in space: ${sortedjson[i].hoursInSpace}</li>
            <li${activeColor}>Active: ${sortedjson[i].active}</li>
            <li>Skills: ${sortedjson[i].skills}</li>
            </ul>
        </div>
        <img class="avatar" src=${sortedjson[i].picture}>
        </div>`
        }
        })
    })
});