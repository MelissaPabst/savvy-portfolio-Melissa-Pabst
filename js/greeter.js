var userName = prompt( "What's your name?" );

var checkUserName = function checkUserName(){
    if( !userName ){
        userName = prompt( "What's your name REALLY???" );

        checkUserName();
    }
};

checkUserName();

alert( "Hello " + userName );
