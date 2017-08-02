var colors = {
    "header": "green",
    "list": "blue"
};


var headerAnimate = {
    "font-size": "250%"
};

var chooseliColor = function chooseliColor(){
    colors.list = prompt( "What color would you like the list to be?" ) || colors.list;

    $( "li" ).css( "color", colors.list );
};

colors.header = prompt( "What color would you like to use for the header?" );

var chooseHeaderColor = function chooseHeaderColor(){
    colors.header = prompt( "What color would you like the header to be?" ) || colors.header;
};

$( "h1" )
    .animate( headerAnimate, 500, chooseliColor )
    .css( "color", colors.header );
