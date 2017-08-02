var story = {
    "intro": {
        "prompt": "Welcome to your next adventure! Would you like to open the red or green door? Please type red or green.",
        "options": [ "red", "green" ]
    },
    "red": {
        "prompt": "You opened the red door and encountered a castle! Do you enter? Please type yes or no.",
        "options": [ "yes", "no" ]
    },
    "green": {
        "prompt": "You chose the green door, where a beach awaits. You panic and make friends with Wilson, as you are now stranded on a deserted island.",
    },
    "yes": {
        "prompt": "You entered the castle and it is old and dusty. You get a respiratory infection and die.",
    },
    "no": {
        "prompt": "You did not enter the castle and kept walking, getting eaten by wolves ten minutes later.",
    },
};

var response;
// global variable. undefinied.

var outputToUser = function outputToUser( choice ){
    document.querySelector( "#output" ).textContent = story[choice].prompt;
    // names variable outputToUser as function that finds the next prompt for the user.
    // result placed in choice local variable
};

var responseFromUser = function responseFromUser( choice ){
    response = prompt( story[choice].prompt );
    // names responseFromUser as the response the fxn gathers from the prompt
};

var runAdventure = function runAdventure( branch ){
    var options = branch.options;

    responseFromUser( branch );
    // calls responseFromUser and places result of fxn in branch local variable

    if( response === story[branch].options[0] ){
        responseFromUser( story[branch].options[0] );
    }
    else if( response === story[branch].options[1] ){
        outputToUser( story[branch].options[1] );
    }
    else{
        runAdventure( branch );
    }
};

runAdventure( "intro" );
