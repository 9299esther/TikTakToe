let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let input1 = document.getElementsByClassName("input1")[0]
let input2 = document.getElementsByClassName("input2")[0]


let playersName = {}
rename()
function rename() {
    playersName = {
        name1: 'player1',
        shape1: '',

        name2: 'player2',
        shape2: ''
    }
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

let timer = document.getElementById('timer')
let Seconds
let Minutes
function ResetTime() {
    Seconds = 0
    Minutes = 0
}
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
    else if (Seconds < 10 )
        timer.innerText =   Minutes + ':' + '0' + Seconds
   /* else
        timer.innerText =  Minutes + ':' + Seconds */
/*}, 1000); */

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

let moves
let allMoves
let xMoves
let oMoves
let allShapesForMove//כול הצורת
ResetMoves()
function ResetMoves() {
    moves = 0//מספר מהלכים
    allMoves = []//מערך עם כול המהלכים
    xMoves = []
    oMoves = []
    allShapesForMove = []
}

let current//מהלך אחרון
board.addEventListener('click', function (ev) {
    if (ev.target.classList.contains("ex") || ev.target.classList.contains("circle"))//האם המיקום תפוס */
    {//אם המשבצת תפוסה
        alert('Please select another location')
        //return false
    }
    else {
        moves++
        let ifEven = turn % 2
        ev.target.classList.add(`${ifEven ? "ex" : "circle"}`)
        current = ev.target.id.slice(-1)
        allMoves.push(current)//רשימת מהלכים
        if (ifEven)
            xMoves.push(current)// x רשימת מהלכים
        else
            oMoves.push(current)// o רשימת מהלכים

        if (moves > 4) {//בדיקת ניצחון
            if (ifEven)
                ifVictory(xMoves)
            else
                ifVictory(oMoves)
        }
        turn++
        ResetTime()
        whosTurnIsIt()
    }

})

// משחק חדש
let newGame = document.getElementById('New')
newGame.onclick = function reset() {
    rename() // בחירת שחקנים
    clear()// ניקוי לוח
    ResetMoves()//איפוס ספירת מהלכים
}
function clear() {
    document.querySelectorAll("#board div.column").forEach((d) => {
        d.className = "column"
    })
}
//פונקציית בדיקת ניצחון?
let minOfMoves = 10
function ifVictory(moves) {

    let a = 0
    for (let i = 0; i < options.length; i++) {
        a = 0
        for (let j = 0; j < moves.length; j++) {
            if (options[i].indexOf(Number(moves[j])) > -1) {//האם J מוכל באופציות
                a++
                if (a = 3) {
                    alert('win')

                    ShowVictory()
                }
            }

        }

    }
}
/* 
            else if (moves == 9)//? 
                alert('טיקו') */
function ShowVictory() {
    for (let i = 0; i < 5; i++) {
        Console.log('kkk')
        //document.getElementById(i).style.backgroundColor = rgb(125, 23, 100)
    }
    board.removeEventListener('click', false)
}










//שמור
let savedAllMoves = []
let savedxMoves = []
let savedoMoves = []
let savedCurrent
let savedPlayersName = {}
let savedMoves

let save = document.getElementById('save')
save.onclick = function () {
    savedxMoves = [...xMoves]//העתקת תוכן ןלא רק מצביע נוסף
    savedoMoves = [...oMoves]
    savedCurrent = current
    savedPlayersName = playersName
    savedAllMoves = [...allMoves]
    savedMoves = moves
}
//טען
let load = document.getElementById('load')
load.onclick = function () {

    clear()//איפוס לוח
    //בניית לוח
    allMoves = [...savedAllMoves]
    xMoves = [...savedxMoves]
    oMoves = [...savedoMoves]
    current = savedCurrent
    playersName = savedPlayersName
    moves = savedMoves
    let a
    savedxMoves.forEach(function (x) {
        a = 'loc' + x
        document.getElementById(a).className = "column ex"
        //הוספת כלאס
    })
    savedoMoves.forEach(function (o) {
        a = 'loc' + o
        document.getElementById(a).className = "column circle"
        //הוספת כלאס
    })
}

//שיא
let record = document.getElementById('record')
record.onclick = function () {
    alert('The record is: ' + minOfMoves + ' moves')
}

//unde
let undo = document.getElementById('undo')
undo.onclick = function () {
    if (allMoves.length == 0)//אם אין מהלכים 
        alert('No moves left')
    else {
        let x = 'loc' + (allMoves[allMoves.length - 1])
        document.getElementById(x).className = "column"

        allMoves.pop()
        moves--
    }
}