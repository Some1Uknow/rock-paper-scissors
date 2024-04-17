var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var userChoice = null;
var reset = document.querySelector("#reset");
var userScore = document.querySelector("#userscore");
var userScoreNumber = 0;
var computerScore = document.querySelector("#computerscore");
var computerScoreNumber = 0;
var userChoiceCard = document.querySelector("#userChoiceCard");
var computerChoiceCard = document.querySelector("#computerChoiceCard");
var result = document.querySelector("#result");
var options = document.querySelector("#options");
var choices = ["rock", "paper", "scissors"];

rock.addEventListener("click", function () {;
  userChoice = "rock";
  userChoiceCard.src = "./public/rock.png";
  gameStart();
});

paper.addEventListener("click", function () {
  userChoice = "paper";
  userChoiceCard.src = "./public/paper.png";
  gameStart();
});

scissors.addEventListener("click", function () {
  userChoice = "scissors";
  userChoiceCard.src = "./public/scissors.png";
  gameStart();
});

const gameStart = () => {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoiceCard.src = `./public/${computerChoice}.png`;
  if (userChoice === computerChoice) {
   result.innerHTML = "Its a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScoreNumber++;
    result.innerHTML = "You win!";
  } else {
    computerScoreNumber++;
    result.innerHTML = "Computer Wins";
  }
  computerScore.innerHTML = computerScoreNumber;
  userScore.innerHTML = userScoreNumber;
  if (userScoreNumber == 3) {
    options.innerHTML = "CONGRATS! You DEFEATED the COMPUTER! 😎😎😎"
  }
  if (computerScoreNumber == 3) {
    options.innerHTML = "Damn.. You got deafeated by a COMPUTER 💀💀💀"
  }

};

reset.addEventListener("click", function () {
  window.location.reload();
});

