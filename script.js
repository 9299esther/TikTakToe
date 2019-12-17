
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

let name1 = 'player1'
let name2 = 'player2'


if (!name1 || !name2) {
    b1.onclick = function () {
        name1 = input1.value
        player1.innerHTML = `<div>${name1}</br> <b>O</b></div>`
    }
    b2.onclick = function () {
        name2 = input1.value
        player2.innerHTML = `<div>${name2}</br> <b>X</b></div>`
    }
}
else {
    player1.innerHTML = `<div>${name1}</br> O</div>`
    player2.innerHTML = `<div>${name2}</br> X</div>`
}
let turn = 1

/* let column = document.getElementsByClassName('column')
 */
var players = document.getElementById('board')
players.addEventListener('click', function (ev) {
    debugger
    ev.target.classList.add(`${turn % 2 ? "ex" : "Circle"}`)

if(turn==1)
    turn=2
else
    turn=1
})
//חדש
let newb = document.querySelector('New')
// ניקוי לוח

// איפוס טיימר
// בחירת שחקנים
// בחירת צורה
// הגרלת מי מתחיל


//שמור
//טען
//שיא
//unde