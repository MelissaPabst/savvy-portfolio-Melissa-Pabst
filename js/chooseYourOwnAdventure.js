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
        "prompt": "You chose the green door, where a beach awaits.",
    },
    "castle": {
        "prompt": "You enterened the castle and it is old and dusty.",
    },
    "beach": {
        "prompt": "Congrats! The beach option is pristine and you can relax!"
    }
};

var response = prompt( story.intro.prompt );

var outputToUser = function outputToUser( choice ){
    document.querySelector( "#output" ).textContent = story[choice].prompt;
};

var responseFromUser = function responseFromUser( choice ){
    response = prompt( story[choice].prompt );
};

var runAdventure = function runAdventure(){
    if( response === "red" ){
        responseFromUser( "red" );

        if( response === "yes" ){
            responseFromUser( "castle" );
        }
        else if( response === "no" ){
            outputToUser( "beach" );
        }
        else{
            responseFromUser( "red" );

            runAdventure();
        }
    }
    else if( response === "green" ){
        outputToUser( "green" );
    }
    else{
        response = prompt( story.intro.prompt );

        runAdventure();
    }
};

runAdventure();
