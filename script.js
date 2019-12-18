let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let input1 = document.getElementsByClassName("input1")[0]
let input2 = document.getElementsByClassName("input2")[0]

/* let location = {
    loc0: document.getElementById("loc0"),
    loc1: document.getElementById("loc1"),
    loc2: document.getElementById("loc2"),
    loc3: document.getElementById("loc3"),
    loc4: document.getElementById("loc4"),
    loc5: document.getElementById("loc5"),
    loc6: document.getElementById("loc6"),
    loc7: document.getElementById("loc7"),
    loc8: document.getElementById("loc8"),
    loc9: document.getElementById("loc9"),
}
let keys = Object.keys(location) */

let playersName = {
    name1: 'player1',
    shape1: '',

    name2: 'player2',
    shape2: ''
}
let random = Math.floor(Math.random() * 2)

if (random % 2) {
    playersName.shape1 = 'O'
    playersName.shape2 = 'X'
}
else {
    playersName.shape1 = 'X'
    playersName.shape2 = 'O'
}
/* let name1 = 'player1'
let name2 = 'player2' */

if (!playersName.name1 || !playersName.name2) {//שמות שחקנים
    b1.onclick = function () {
        playersName.name1 = input1.value
        player1.innerHTML = `<div>${playersName.name1}</br> <b>${playersName.shape1}</b></div>`
    }
    b2.onclick = function () {
        playersName.name2 = input1.value
        player2.innerHTML = `<div>${playersName.name2}</br> <b>${playersName.shape2}</b></div>`
    }
}
else {
    player1.innerHTML = `<div>${playersName.name1}</br>${playersName.shape1}</div>`
    player2.innerHTML = `<div>${playersName.name2}</br>${playersName.shape2}</div>`
}
/* alert(playersName.name1) */



let timer = document.getElementById('timer')
let Seconds = 0
let Minutes = 0

/* setInterval(function () {//טימר
    if (Seconds == 59) {
        Seconds = 0
        if (Minutes == 1) {        
                alert('Time up')
        }
        else
            Minutes++
    }
    else
        Seconds++
     if (Seconds < 10 && Minutes < 10)
        timer.innerText = '0' + Minutes + ':' + '0' + Seconds
    else if (Minutes < 10 )
        timer.innerText =  '0' + Minutes + ':' + Seconds
   else
        timer.innerText =  Minutes + ':' + Seconds
 }, 1000); */
/*  
 */
let turn = 1
if (playersName.shape1 == 'X' && turn == 1)
    turn = 0

let whosTurn = document.getElementById('whosTurn')
whosTurnIsIt()
function whosTurnIsIt() {

    if (turn % 2) {
        whosTurn.innerText = 'Its ' + playersName.name1 + ' turn'
    }
    else
        whosTurn.innerText = 'Its ' + playersName.name2 + ' turn'
}
let board = document.getElementById('board')
let players = document.getElementsByClassName('players')
/*let column = document.getElementsByClassName('column')*/

let moves = 0

board.addEventListener('click', function (ev) {
    moves++
    if (moves == 10)
        alert()
        /*  if ()//האם המיקום תפוס */
        ev.target.classList.add(`${turn % 2 ? "ex" : "Circle"}`)
    /* else
        alert('Please select another location') */
    turn++
    Seconds = 0
    Minutes = 0
    whosTurnIsIt()
})
// משחק חדש
/*
let newGame = document.getElementById('New')

newGame.onclick = function(){
   alert(newGame)
   newGame.classList.remove("ex")
   alert(222)
} */



// ניקוי לוח

// איפוס טיימר
// בחירת שחקנים
// בחירת צורה
// הגרלת מי מתחיל


//שמור
//טען
//שיא
//unde
