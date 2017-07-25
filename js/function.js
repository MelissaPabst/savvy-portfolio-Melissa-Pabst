var setTextBySelector = function setTextBySelector( selector, banana ){
    var element = document.querySelector( selector );

    if( element ){
        element.textContent = banana;
    }
};

setTextBySelector( "li", "Here it is!" );
