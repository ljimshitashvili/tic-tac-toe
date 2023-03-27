const choiceX = document.querySelector('.choose-x');
const choiceO = document.querySelector('.choose-o');
const vsCPU = document.querySelector('#cpu');
const vsPlayer = document.querySelector('#player');
const entryMode = document.querySelector('.new-game');
const gameMode = document.querySelector('.game');
const box = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
const resetWindow = document.querySelector('.restart-confirm');
const background = document.querySelector('.background');
const xTurn = document.querySelector('.x-turn');
const oTurn = document.querySelector('.o-turn');
const noCancel = document.querySelector('#quit');
const yesRestart = document.querySelector('#next-round');
const homePage = document.querySelector('#homepage');
const winX = document.querySelector('.pl-2');
const winO = document.querySelector('.pl-1');
const roundTied = document.querySelector('.tied');
const nextRound = document.querySelectorAll('.next-round');
const quit = document.querySelectorAll('.quit');
const scoreYellow = document.querySelector('.score-yellow');
const scoreTie = document.querySelector('.score-tie');
const scoreSky = document.querySelector('.score-sky');
const yellowBox = document.querySelector('.yellow-box');
const blueBox = document.querySelector('.blue-box');




let countX = 0;
let countO = 0;
let countTie = 0;
let player1;
let turn = 'x';
let freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let xArray = [];
let oArray = [];
let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];




const differPlayers = () => {
    if(player1 === 'x'){
        yellowBox.innerHTML = "X (P1)";
        blueBox.innerHTML = "O (P2)";
    }else if(player1 === 'o'){
        blueBox.innerHTML = "O (P1)";
        yellowBox.innerHTML = "X (P2)";
    }else if(player1 !== 'x' && player1 !== 'o'){
        entryMode.style.display = "flex";
        gameMode.style.display = "none";
    }
}

const expressTurn = () => {
    if(turn === 'x'){
        xTurn.style.display = "flex";
        oTurn.style.display = "none";
    }else{
        oTurn.style.display = "flex";
        xTurn.style.display = "none";
    }
}

const resetGameView = () => {
    turn = 'x';
    oArray = [];
    xArray = [];
    freeButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    drawIcons();
    makeHovers();
}

const buttons = () =>{
    for (let i = 0; i < quit.length; i++) {
        quit[i].addEventListener('click', () => {
            location.reload();
        });
    }

    for (let i = 0; i < quit.length; i++) {
        nextRound[i].addEventListener('click', () => {
            winX.style.display = "none";
            winO.style.display = "none";
            roundTied.style.display = "none";
            scoreTie.textContent = countTie;
            scoreSky.textContent = countO;
            scoreYellow.innerHTML = countX;
            background.style.display = 'none';
            
            for (let e = 0; e < box.length; e++) {
                box[e].classList.remove('o-winner-active');
                box[e].classList.remove('x-winner-active');
            }
        


            turn = 'x';
            expressTurn();
            for (let index = 0; index < box.length; index++) {
                if(box[index].hasChildNodes()){
                    resetGameView();
                    box[index].innerHTML = "";       
                }
            }
        });
    }
}

const winCheck = () => {
    for (let i = 0; i < winCombinations.length; i++){
        const [a, b, c] = winCombinations[i];
        if (xArray.includes(a) && xArray.includes(b) && xArray.includes(c)) {
            box[a].classList.add('x-winner-active');
            box[b].classList.add('x-winner-active');
            box[c].classList.add('x-winner-active');

            box[a].innerHTML = "";
            box[b].innerHTML = "";
            box[c].innerHTML = "";

            background.style.display = "flex";
            winX.style.display = "flex";
            buttons();
            countX++;
        }else if(oArray.includes(a) && oArray.includes(b) && oArray.includes(c)){
            box[a].classList.add('o-winner-active');
            box[b].classList.add('o-winner-active');
            box[c].classList.add('o-winner-active');

            box[a].innerHTML = "";
            box[b].innerHTML = "";
            box[c].innerHTML = "";

            winO.style.display = "flex";
            background.style.display = "flex";
            buttons();
            countO++;
        }
    }
    if(freeButtons.length === 0){
        roundTied.style.display = "flex";
        background.style.display = "flex";
        buttons();
        countTie++;
    }
}


const drawIcons = () => {
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = (event) => {
            event.target.classList.remove('xHover');
            event.target.classList.remove('oHover');

            const spliceIndex = freeButtons.indexOf(i);
            freeButtons.splice(spliceIndex, 1);

            const icon = document.createElement('img');
            icon.classList.add('icon-design');


            if(turn === 'x'){
                icon.src = './tic-tac-toe/tic-tac-toe/starter-code/assets/icon-x.svg';
                event.target.append(icon);
                turn = 'o';
                xArray.push(i);
                oTurn.style.display = "flex";
                xTurn.style.display = "none";
            }else{
                icon.src = './tic-tac-toe/tic-tac-toe/starter-code/assets/icon-o.svg';
                event.target.append(icon);
                oArray.push(i);
                turn = 'x';
                xTurn.style.display = "flex";
                oTurn.style.display = "none";
            }

            makeHovers();
            event.target.onclick = null;
            winCheck();

        }
            
    }
}

const makeHovers = () => {
    for (let i = 0; i < freeButtons.length; i++) {
        const boxIndex = freeButtons[i];

        if(turn === 'x'){
            box[boxIndex].classList.add('xHover');
            box[boxIndex].classList.remove('oHover');
        }else{
            box[boxIndex].classList.remove('xHover');
            box[boxIndex].classList.add('oHover');
        }
    }
}

const restartButton = () => {
    reset.addEventListener('click', () => {
        resetWindow.style.display = "flex";
        background.style.display = 'flex';
    });

    noCancel.addEventListener('click', () => {
        resetWindow.style.display = "none";
        background.style.display = 'none';
    });

    yesRestart.addEventListener('click', () => {
        for (let index = 0; index < box.length; index++) {
            if(box[index].hasChildNodes()){
                resetGameView();
                box[index].innerHTML = "";
            }
        }
        background.style.display = 'none';
        resetWindow.style.display = "none";
        scoreTie.textContent = 0;
        scoreSky.textContent = 0;
        scoreYellow.innerHTML = 0;
        turn = 'x';
        resetGameView();
        expressTurn();
        
    });
}

const openPlayerMode = () => {
        entryMode.style.display = "none";
        gameMode.style.display = "block";
        differPlayers();
        makeHovers();
        drawIcons();
}

const chooseIcon = () => {
    choiceX.addEventListener('click', () => {
        choiceX.classList.add('jhover');
        choiceO.classList.remove('jhover');
        player1 = 'x';
    });
    choiceO.addEventListener('click', () => {
        choiceX.classList.remove('jhover');
        choiceO.classList.add('jhover');
        player1 = 'o';
    });
}
chooseIcon();
restartButton();
homePage.addEventListener('click', () => {
    location.reload();
});


vsPlayer.addEventListener('click', openPlayerMode);

vsCPU.addEventListener('click', CPU);