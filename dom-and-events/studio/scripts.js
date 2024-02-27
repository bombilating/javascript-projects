// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {


    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    rocket.style.position = "absolute"
    rocket.style.bottom = "-20px"
    rocket.style.left = "340px"
    takeoff.addEventListener("click", function() {
        input = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(input) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;

        }
    })

    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.")
        flightStatus.innerHTML = "The shuttle has landed."
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0    
        rocket.style.position = "absolute"
        rocket.style.bottom = "-20px"
        rocket.style.left = "340px"
    })

    missionAbort.addEventListener("click", function() {
        input = window.confirm("Confirm that you want to abort the mission.")
        if(input) {
            flightStatus.innerHTML = "Mission aborted."
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0
            rocket.style.position = "absolute"
            rocket.style.bottom = "-10px"
            rocket.style.left = "340px"
        }
    })

    up.addEventListener("click", function() {
        if(Number(rocket.style.bottom.replace("px","") > 250)) {
            window.alert("Ship can not go any higher.");
        } else {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000
            rocket.style.bottom = String(Number(rocket.style.bottom.replace("px","")) + 10) + "px"
            console.log(rocket.style.bottom)
        }
    })
    down.addEventListener("click", function() {
        if(Number(rocket.style.bottom.replace("px","") < -20)) {
            window.alert("Ship can not go any lower.");
        } else {
            shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 10000
            rocket.style.bottom = String(Number(rocket.style.bottom.replace("px","")) - 10) + "px"
            console.log(rocket.style.bottom)
        }
    })
    
    left.addEventListener("click", function() {
        if(Number(rocket.style.left.replace("px","") < -20)) {
            window.alert("Ship can not go any further left.");
        } else {
        rocket.style.left = String(Number(rocket.style.left.replace("px","")) - 10) + "px"
        }
    })

    right.addEventListener("click", function() {
        if(Number(rocket.style.left.replace("px","") > 710)) {
            window.alert("Ship can not go any further right.");
        } else {
            rocket.style.left = String(Number(rocket.style.left.replace("px","")) + 10) + "px"
        }
    })

})