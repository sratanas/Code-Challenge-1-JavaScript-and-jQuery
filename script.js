console.log('js');

var clickCounter = 0;
$(document).ready(readyNow) 
    function readyNow(){
    console.log('JQ');
    $('#generateButton').on('click', generateButtonPush);
    $(this).on('click', ".swapButton", swapButtonColorChanger);
    $(this).on('click', '.deleteButton', deleteFunction);
    
    }

 
function generateButtonPush(){
    console.log('in generate button push function');

    clickCounter ++;
    $('body').append('<div>' + 
    '<p>'+ clickCounter + '</p>' +
    '<button class = "swapButton">Swap</button>'+
    '<button class = "deleteButton">Delete</button></div>');
}

function swapButtonColorChanger(  ){
    console.log('in swapbuttoncolor changer function');
        $(this).parent().toggleClass('yellow');
};



function deleteFunction(){
    console.log('in delete function');
    $(this).parent().remove();
}

