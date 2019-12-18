
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

let name1 = 'player1'
let name2 = 'player2'

if (!name1 || !name2) {//שמות שחקנים
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
let players = document.getElementById('board')
if(turn%2){//תור מי

}

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


players.addEventListener('click', function (ev) {
    
    ev.target.classList.add(`${turn % 2 ? "ex" : "Circle"}`)
    turn++
    Seconds = 0
    Minutes = 0
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
