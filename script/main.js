let a = 100
let b = 100




// Async function sleep of 500ms
async function sleep() {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    });
}

// Usage for sleep function
async function myAsyncFunction() {
    console.log("Before sleep");
    await sleep();
    console.log("After sleep");
}
myAsyncFunction();



// KeyInput pressing
document.addEventListener("keydown", function (event) {
    if (event.key === "d" || event.key === "D") {
        burstAttackPlayer1();
    }
    if (event.key === "ArrowLeft") {
        burstAttackPlayer2();
    }
    if (event.key === "w" || event.key === "W") {
        energySpherePlayer1();
    }
    if (event.key === "ArrowUp") {
        energySpherePlayer2();
    }
});


// P1 attack anmations
function burstAttackPlayer1() {
    document.getElementById("player1").style = "width: 500px; height: 500px;"
    document.getElementById("player1").src = "image/kenshiro-fist-of-the-north-star.gif"
    // Damage
    b -= 15
    document.getElementById("hp2").innerHTML = b
    setTimeout(idlePlayer1, 500);
    checkVictory()
}

function energySpherePlayer1() {
    document.getElementById("player1").style = "width: 800px; height: 500px;"
    document.getElementById("player1").src = "image/energySphere.gif"
    // Damage
    b -= 20
    document.getElementById("hp2").innerHTML = b
    setTimeout(idlePlayer1, 2000);
    checkVictory()
}


// P2 attack anmations
function burstAttackPlayer2() {
    document.getElementById("player2").style = "width: 500px; height: 500px;"
    document.getElementById("player2").src = "image/kenshiro-fist-of-the-north-star.gif"
    // Damage
    a -= 15
    document.getElementById("hp1").innerHTML = a
    setTimeout(idlePlayer2, 500);
    checkVictory()
}

function energySpherePlayer2() {
    document.getElementById("player2").style = "width: 800px; height: 500px;"
    document.getElementById("player2").src = "image/energySphere.gif"
    // Damage
    a -= 20
    document.getElementById("hp1").innerHTML = a
    setTimeout(idlePlayer2, 2000);
    checkVictory()
}


// P1 idle animation
function idlePlayer1() {
    document.getElementById("player1").src = "image/kenshiro-hokuto-no-ken-stance-animation.gif"
    document.getElementById("player1").style = "width: 300px; height: 500px;"
}


// P2 idle animation
function idlePlayer2() {
    document.getElementById("player2").src = "image/kenshiro-hokuto-no-ken-stance-animation.gif"
    document.getElementById("player2").style = "width: 300px; height: 500px;"
}


// Check victory
function checkVictory() {
    if (a <= 0) {
        document.getElementById("hp1").innerHTML = "SKILL ISSUE"
        document.getElementById("hp2").innerHTML = "YOU WIN"
        document.getElementById("player1").src = "image/BOMBAa.gif"
        document.getElementById("player2").src = "image/kenshir-hokuto-no-ken-glow.gif"
    } else if (b <= 0) {
        document.getElementById("hp1").innerHTML = "YOU WIN"
        document.getElementById("hp2").innerHTML = "SKILL ISSUE"
        document.getElementById("player1").src = "image/kenshir-hokuto-no-ken-glow.gif"
        document.getElementById("player2").src = "image/BOMBAa.gif"
    }
}

// Reset
function reset() {
    document.getElementById("hp1").innerHTML = "100"
    a = 100
    document.getElementById("hp2").innerHTML = "100"
    b = 100
    document.getElementById("player1").src = "image/kenshiro-hokuto-no-ken-stance-animation.gif"
    document.getElementById("player2").src = "image/kenshiro-hokuto-no-ken-stance-animation.gif"
}