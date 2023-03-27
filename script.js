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

let player;
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

const winCheck = () => {
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i];
        if (xArray.includes(a) && xArray.includes(b) && xArray.includes(c)) {
            winX.style.display = "flex";
        }else if(oArray.includes(a) && oArray.includes(b) && oArray.includes(c)){
            winO.style.display = "flex";
        }else if(freeButtons.length === 0){
            roundTied.style.display = "flex";
        }
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
            }else{
                icon.src = './tic-tac-toe/tic-tac-toe/starter-code/assets/icon-o.svg';
                event.target.append(icon);
                oArray.push(i);
                turn = 'x';
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
}

const openGameMode = () => {
    vsPlayer.addEventListener('click', () => {
        entryMode.style.display = "none";
        gameMode.style.display = "block";
    });
}

const chooseIcon = () => {
    choiceX.addEventListener('click', () => {
        choiceX.classList.add('jhover');
        choiceO.classList.remove('jhover');
        player = 'x';
    });
    choiceO.addEventListener('click', () => {
        choiceX.classList.remove('jhover');
        choiceO.classList.add('jhover');
        player = 'o';
    });
}

chooseIcon();
openGameMode();
restartButton();
homePage.addEventListener('click', () => {
    location.reload();
});
makeHovers();
drawIcons();