"use strict";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else if (userInput === "win") {
    return userInput;
  } else {
    console.log("Please enter a valid input");
  }
};

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
  return randomNum;
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "win") {
    return "User always wins!";
  }
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won";
    } else {
      return "The user won";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won";
    } else {
      return "The user won";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won";
    } else {
      return "The user won";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("roCk");
  const computerChoice = getComputerChoice();

  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();