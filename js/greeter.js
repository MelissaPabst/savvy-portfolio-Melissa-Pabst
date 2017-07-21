var userName = prompt( "What's your name?" );
var titleElement = document.querySelector( "h1" );
var titleText = titleElement.textContent;

var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "What's your name REALLY???" );

        checkUserName();
    }
};

checkUserName();

titleElement.textContent = titleText + "Dontcha know, " + userName;
