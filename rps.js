    const body = document.querySelector('body');
    const DOMcontainer = document.createElement('div');
    DOMcontainer.style.display = 'flex';
    DOMcontainer.classList.add('flex-container');
    body.appendChild(DOMcontainer);

    const rockCreator = document.createElement('button');
    const paperCreator = document.createElement('button');
    const scissorsCreator = document.createElement('button');
    rockCreator.setAttribute('id', 'rock');
    paperCreator.setAttribute('id', 'paper');
    scissorsCreator.setAttribute('id', 'scissors');
    rockCreator.textContent = "Rock";
    paperCreator.textContent = "Paper";
    scissorsCreator.textContent = "Scissors";
    DOMcontainer.appendChild(rockCreator);
    DOMcontainer.appendChild(paperCreator);
    DOMcontainer.appendChild(scissorsCreator);

    const trackCount = document.createElement('div');
    trackCount.textContent = "Here you should see your results once you start playing";
    body.appendChild(trackCount); 

    let winCountPlayer = 0;
    let winCountComputer = 0;
    let drawCount = 0;

    const countContainer = document.createElement('div');
    countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
    body.appendChild(countContainer);

    const endresults = document.createElement('div');
    body.appendChild(endresults);




function computerPlay() {
    let choice = ["Rock", "Paper", "Scissors"];
    return choice[Math.floor(Math.random()*choice.length)]; 
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    if(playerSelection === "rock") {
        switch(computerSelection) {
            case "Rock":
                drawCount++;
                trackCount.textContent = "Draw! Rock versus Rock";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Paper":
                winCountComputer++;
                trackCount.textContent = "You lose! Rock versus Paper";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Scissors":
                winCountPlayer++;
                trackCount.textContent = "You win! Rock versus Scissors";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
                
        }
    }
    else if(playerSelection === "paper") {
        switch(computerSelection) {
            case "Rock":
                winCountPlayer++;
                trackCount.textContent = "You win! Paper versus Rock";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Paper":
                drawCount++;
                trackCount.textContent = "Draw! Paper versus Paper";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Scissors":
                winCountComputer++;
                trackCount.textContent = "You lose! Paper versus Scissors";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
        }
    } else if(playerSelection === "scissors") {
        switch(computerSelection) {
            case "Rock":
                winCountComputer++;
                trackCount.textContent = "You lose! Scissors versus Rock";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Paper":
                winCountPlayer++;
                trackCount.textContent = "You win! Scissors versus Paper";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
            case "Scissors":
                drawCount++;
                trackCount.textContent = "Draw! Scissors versus Scissors";
                countContainer.textContent = "Your wins: " + winCountPlayer + "  Computer wins: " + winCountComputer + "  Draw count :" + drawCount;
                if(winCountPlayer === 5) {
                    endresults.textContent = "You win with 5 wins!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(winCountComputer === 5) {
                    endresults.textContent = "Your complete defeat!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                } else if(drawCount === 5) {
                    endresults.textContent = "A complete draw! Quite rare!";
                    drawCount = 0;
                    winCountPlayer = 0;
                    winCountComputer = 0;
                }
                break;
        }
    }
}
  


const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {

    button.addEventListener('click', () => {
      playRound(button.id);
    });
  });


