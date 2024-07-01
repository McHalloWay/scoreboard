let score1 = 1
let score2 = 2
let score3 = 3
let homePoints = 0
let guestPoints = 0

document.getElementById("home-Score").textContent = homePoints
document.getElementById("guest-Score").textContent = guestPoints

let homeScore = document.getElementById("home-Score")
let guestScore = document.getElementById("guest-Score")

function home1() {
    homePoints += score1
    homeScore.textContent = homePoints
}

function home2() {
    homePoints += score2
    homeScore.textContent = homePoints
}
function home3() {
    homePoints += score3
    homeScore.textContent = homePoints
}

function guest1() {
    guestPoints += score1
    guestScore.textContent = guestPoints
}
function guest2() {
    guestPoints += score2
    guestScore.textContent = guestPoints
}
function guest3() {
    guestPoints += score3
    guestScore.textContent = guestPoints
}
