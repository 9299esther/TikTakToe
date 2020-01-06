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
ResetTime()
function ResetTime() {
    Seconds = 0
    Minutes = 00
}
setInterval(function () {//טימר
    if (Seconds == 59) {
        Seconds = 0
        if (Minutes == 1) {
            alert('Please hurry')
        }
        else
            Minutes++
    }
    else
        Seconds++
    if (Seconds < 10 && Minutes < 10)
        timer.innerText = '0' + Minutes + ':' + '0' + Seconds
    else if (Seconds < 10)
        timer.innerText = Minutes + ':' + '0' + Seconds
    else
        timer.innerText = Minutes + ':' + Seconds
}, 1000);

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
    }
    else {
        moves++
        let ifEven = turn % 2
        ev.target.classList.add(`${ifEven ? "ex" : "circle"}`)
        current = ev.target.id.slice(-1)
        allMoves.push(current)//רשימת מהלכים
        // debugger
        if (ifEven)
            xMoves.push(current)// x רשימת מהלכים
        else
            oMoves.push(current)// o רשימת מהלכים

        if (moves > 4) {//בדיקת ניצחון
            if (ifEven)
                ifVictory(xMoves, ifEven)
            else
                ifVictory(oMoves, ifEven)
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
    document.querySelector('#board').className= ''
}
//פונקציית בדיקת ניצחון
localStorage.minOfMoves = 10
function ifVictory(moves, ifEven) {//מקבל את מערך xMoves או oMoves
    let options = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    let rellavant = options.filter(x => x.includes(Number(current)))

    for (x of rellavant) {
        if ((moves.indexOf((x[0]).toString()) > -1) && (moves.indexOf((x[1]).toString()) > -1) && (moves.indexOf((x[2]).toString()) > -1)) {
            ShowVictory(x, ifEven)
            upmoves(moves.length * 2 - 1)
        }
    }
    if (moves.length == 5)
        return alert('טיקו')
    else
        return 0
}

function ShowVictory(x, ifEven) {
    for (i of x) {
        i = 'loc' + i
        document.getElementById(i).classList.add('win')
    }
    // board.removeEventListener('click')
    //let row = document.getElementsByClassName("row")[0]


    board.classList.add(`${ifEven ? "ex" : "circle"}`)
    ifEven ? alert('x win') : alert('o win')
}

//שמור
let save = document.getElementById('save')
save.onclick = function () {

    localStorage.setItem("savedxMoves", JSON.stringify(xMoves))//העתקת תוכן ןלא רק מצביע נוסף
    localStorage.setItem("savedoMoves", JSON.stringify(oMoves))
    localStorage.savedCurrent = current
    localStorage.savedPlayersName = playersName
    localStorage.savedAllMoves = [allMoves]
    localStorage.savedMoves = moves
}
//טען
let load = document.getElementById('load')
load.onclick = function () {

    clear()//איפוס לוח
    //בניית לוח
    allMoves = [localStorage.savedAllMoves]
    xMoves = JSON.parse(localStorage.getItem("savedxMoves"))
    oMoves = JSON.parse(localStorage.getItem("savedoMoves"))
    current = localStorage.savedCurrent
    playersName = localStorage.savedPlayersName
    moves = localStorage.savedMoves
    let a
    xMoves.forEach(function (x) {
        a = 'loc' + x
        document.getElementById(a).className = "column ex"
    })
    oMoves.forEach(function (o) {
        a = 'loc' + o
        document.getElementById(a).className = "column circle"
    })
    whosTurnIsIt()

}

//שיא
let record = document.getElementById('record')
record.onclick = function () {
    alert('The record is: ' + localStorage.minOfMoves + ' moves')
}
//עדכון שיא
function upmoves(x) {
    if (localStorage.minOfMoves > x)
        localStorage.minOfMoves = x
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