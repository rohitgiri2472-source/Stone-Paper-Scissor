 let userScore = 0;
 let compScore = 0;

 const userScoreSpan = document.querySelector('#user-score');
    const compScoreSpan = document.querySelector('#comp-score');

 const choices = document.querySelectorAll('.choice');
 const msg = document.querySelector('#msg');


  const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  };

  const drawGame = () => {
    console.log("It's a draw!"); // for console debugging
    msg.innerText = "It's a draw, Play again!";
    msg.style.backgroundColor = "#081b31";
  };

    const showWinner = (userWin, userChoice, compChoice) => {
     if(userWin) {
            userScore++;
            userScoreSpan.innerText = userScore;
            console.log("User wins!"); // for console debugging
            msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScoreSpan.innerText = compScore;
            console.log("Computer wins!"); // for console debugging
            msg.innerText = `Computer wins! ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red";
        }
    }

 const playGame = (userChoice) => {
    console.log("user choice: ", userChoice);

    const compChoice = genCompChoice();
    console.log("computer choice: ", compChoice);

    if(userChoice === compChoice) {
      drawGame();
    } 
    else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        }
        else if(userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        }
        else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
 };

 choices.forEach((choice) => {
    choice.addEventListener('click', () => {
      
   const userChoice = choice.getAttribute('id');
   playGame(userChoice);
});
 }); 

 