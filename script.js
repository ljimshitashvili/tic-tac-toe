const choiceX = document.querySelector('.choose-x');
const choiceO = document.querySelector('.choose-o');
const vsCPU = document.querySelector('#cpu');
const vsPlayer = document.querySelector('#player');
const entryMode = document.querySelector('.new-game');
const gameMode = document.querySelector('.game');
const box = document.querySelectorAll('.box');
const reset = document.querySelector('.reset');
const resetWindow = document.querySelector('.restart-confirm');
const xTurn = document.querySelector('.x-turn');
const oTurn = document.querySelector('.o-turn');
const noCancel = document.querySelector('#quit');
const yesRestart = document.querySelector('#next-round');

function choice(){

    choiceX.addEventListener('click', function(){

        choiceX.classList.toggle('jhover');

        if(choiceO.classList.contains('jhover')){

            choiceO.classList.remove('jhover');
        }

    });

    choiceO.addEventListener('click', function(){

        choiceO.classList.toggle('jhover');

        if(choiceX.classList.contains('jhover')){

            choiceX.classList.remove('jhover');

        }

    });

}

function openGameMode(){
    restart();

    vsPlayer.addEventListener('click', function(){

        if(choiceX.classList.contains('jhover') || choiceO.classList.contains('jhover')){

            entryMode.style.display = 'none';
            gameMode.style.display = 'block';
            playPlayerMode();

        }else{

            alert('Choose X or O')
        
        }

    });

    vsCPU.addEventListener('click', function(){

        if(choiceX.classList.contains('jhover') || choiceO.classList.contains('jhover')){

            entryMode.style.display = 'none';
            gameMode.style.display = 'block';
            playCPUMode();

        }else{

            alert('Choose X or O')
        
        }
    });
}
    
    


function playPlayerMode(){
    
    if(choiceX.classList.contains('jhover') && !choiceO.classList.contains('jhover')){

        var counter = 1;

    }else if (!choiceX.classList.contains('jhover') && choiceO.classList.contains('jhover')){

        var counter = 2;
        
    }
    
    for(let i = 0; i < box.length; i++){

        box[i].addEventListener('click', (event) => {

            counter++;
            if(counter % 2 === 0){
                    let currentBox = event.currentTarget;
                    
                    currentBox.classList.add('x-icon');
                    xTurn.style.display = 'none';
                    oTurn.style.display = 'block';

            }else if(!box[i].classList.contains('x-icon')){
                    let currentBox = event.currentTarget;
                    
                    currentBox.classList.add('o-icon');
                    xTurn.style.display = 'block';
                    oTurn.style.display = 'none';
            }
        });
    }
    
}

function playCPUMode(){
    // This if/else conditions detects which mark is selected
    if(choiceX.classList.contains('jhover') && !choiceO.classList.contains('jhover')){

    }else if (!choiceX.classList.contains('jhover') && choiceO.classList.contains('jhover')){

    }
}

function restart(){
    reset.addEventListener('click', () => {
        resetWindow.style.display = 'flex';
    });
    
    
    noCancel.addEventListener('click', () => {
        resetWindow.style.display = 'none';
    });
    yesRestart.addEventListener('click', () => {
        location.reload();
    });

}

choice();
openGameMode();


