/* eslint-disable no-unused-vars */

function generateComputerChoice( num ){
    var choice = "scissors";

    if( num <= 0.33 ){
        choice = "rock";
    }
    else if( num >= 0.66 ){
        choice = "paper";
    }

    return choice; // rock, paper, or scissors
}

function checkForComputerWins( user, computer ){
    var rockPaper = user === "rock" && computer === "paper";
    var paperScissors = user === "paper" && computer === "scissors";
    var scissorsRock = user === "scissors" && computer === "rock";

    return rockPaper || paperScissors || scissorsRock;
}

function compareChoices( user, computer ){
    var result = "user wins!";

    if( user === computer ){
        result = "Tie!";
    }
    else if( checkForComputerWins( user, computer ) ){
        result = "Computer wins!";
    }

    return result; // someone wins
}

function playRockPaperScissors(){
    var input = prompt( "It's a battle! Choose Rock, Paper, or Scissors." );
    var random = Math.random();
    var computer = generateComputerChoice( random );
    var result = compareChoices( input, computer );

    document.querySelector( "#output" ).textcontent = result;
}
