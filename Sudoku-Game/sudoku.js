let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerDisplay');
let int = null;

document.getElementById('btn-easy').addEventListener('click', ()=>{
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});

// document.getElementById('pauseTimer').addEventListener('click', ()=>{
//     clearInterval(int);
// });

// document.getElementById('resetTimer').addEventListener('click', ()=>{
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// });

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

var numSelected = null;
var tileSelected = null;

var errors = 10;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]
var board2 = [
    "--7--16-5",
    "2---6---9",
    "-----7-1-",
    "---6----4",
    "--3----9-",
    "--62--1--",
    "9-4-----2",
    "-7--3----",
    "81---5---"
]
var board3 = [
    "--7--1--5",
    "----6----",
    "-----7-1-",
    "---6----4",
    "--3----9-",
    "---2-----",
    "9--------",
    "---8-----",
    "-1--4----"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    
    reset();
    // document.getElementById("btn-easy").addEventListener("click", onEasyGame);
    // document.getElementById("btn-med").addEventListener("click", onMediumGame);
    // document.getElementById("btn-diff").addEventListener("click", onDiffGame);
    // document.getElementById("btn-reset").addEventListener("click", reset);


}
function reset() {
    clearInterval(int);
    document.getElementById("errors").innerText = errors;
    document.getElementById("board").innerHTML="";
    document.getElementById("digits").innerHTML="";
    document.getElementById("btn-easy").addEventListener("click", onEasyGame);
    document.getElementById("btn-med").addEventListener("click", onMediumGame);
    document.getElementById("btn-diff").addEventListener("click", onDiffGame);
    document.getElementById("btn-reset").addEventListener("click", reset);
    document.getElementById("btn-sol").addEventListener("click", onSolClick);

}

function onEasyGame(){
    
    errors = 10;
    document.getElementById("errors").innerText = errors;
    document.getElementById("board").innerHTML="";
    document.getElementById("digits").innerHTML="";
    setEasyGame();
   
}
function onMediumGame(){
    clearInterval(int);
    errors = 10;
    document.getElementById("errors").innerText = errors;
    document.getElementById("board").innerHTML="";
    document.getElementById("digits").innerHTML="";
    setMediumGame();
}
function onDiffGame(){
    clearInterval(int);
    errors = 10;
    document.getElementById("errors").innerText = errors;
    document.getElementById("board").innerHTML="";
    document.getElementById("digits").innerHTML="";
    setDiffGame();
}
function onSolClick(){
    errors = 10;
    document.getElementById("errors").innerText = errors;
    document.getElementById("board").innerHTML="";
    document.getElementById("digits").innerHTML="";
    setSol();
}
function setSol(){
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) 
    {
        for (let c = 0; c < 9; c++) 
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(solution[r][c]!="-"){
                tile.innerText=solution[r][c];
                tile.classList.add("tile-start")
            }
            
            if (r == 2 || r == 5) {
                 tile.classList.add("horizontal-line");
            }
             if (c == 2 || c == 5) {
                 tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }

}

function setEasyGame() {
    // Digits 1-9
    errors = 10;
    
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) 
    {
        for (let c = 0; c < 9; c++) 
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c]!="-"){
                tile.innerText=board[r][c];
                tile.classList.add("tile-start")
            }
            
            if (r == 2 || r == 5) {
                 tile.classList.add("horizontal-line");
            }
             if (c == 2 || c == 5) {
                 tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function setMediumGame() {
    // Digits 1-9
    errors = 10;
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) 
    {
        for (let c = 0; c < 9; c++) 
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board2[r][c]!="-"){
                tile.innerText=board2[r][c];
                tile.classList.add("tile-start")
            }
            
            if (r == 2 || r == 5) {
                 tile.classList.add("horizontal-line");
            }
             if (c == 2 || c == 5) {
                 tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function setDiffGame() {
    // Digits 1-9
    errors = 10;
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) 
    {
        for (let c = 0; c < 9; c++) 
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if(board3[r][c]!="-"){
                tile.innerText=board3[r][c];
                tile.classList.add("tile-start")
            }
            
            if (r == 2 || r == 5) {
                 tile.classList.add("horizontal-line");
            }
             if (c == 2 || c == 5) {
                 tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if(numSelected!=null){
        numSelected.classList.remove("number-selected")
    }
    numSelected=this;
    numSelected.classList.add("number-selected")

}

function selectTile(){
    if(numSelected){
        if(this.innerText!=""){
            return;
        }
        
        let cords=this.id.split("-");
        let r=parseInt(cords[0]);
        let c=parseInt(cords[1]);
        if(solution[r][c]==numSelected.id){
            this.innerText=numSelected.id;
        }
        else{
            errors-=1;
            document.getElementById("errors").innerText=errors;
            if(errors==0){
                
                alert("Game Over "+"- You Have taken :"+timerRef.innerHTML)
                
                reset();
                clearInterval(int);
                clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
               
            }
        }
    }
}
 
