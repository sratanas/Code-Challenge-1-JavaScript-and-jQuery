console.log('js');

var clickCounter = 0;
$(document).ready(readyNow) 
    function readyNow(){
    console.log('JQ');
    $('#generateButton').on('click', generateButtonPush);
    $(this).on('click', "#swapButton", swapButtonColorChanger);
    $(this).on('click', '#deleteButton', deleteFunction);
    
    }

 
function generateButtonPush(){
    console.log('in generate button push function');

    // $('body').append('<div id = "firstDiv"><p id = "generateButtonClicks"></p><p><button id = "swapButton">Swap</button></p><p><button id = "deleteButton">Delete</button></p></div>');
    
    $('body').append('<div id = "firstDiv"><p><button id = "swapButton">Swap</button><button id = "deleteButton">Delete</button></p></div>');
    clickCounter++;
    // document.getElementById("generateButtonClicks").innerHTML = clickCounter;
    $('body').append(clickCounter);
    // clickCounter++
    // $("p").html() = clickCounter;
}

function swapButtonColorChanger(  ){
    console.log('in swapbuttoncolor changer function');
    
    $(this).parent().css('background-color','yellow');
    // $().parent().css('background-color','yellow');
    // $('#generateButtonClicks').parent().css('background-color','yellow');
    
}
  
function deleteFunction(){
    console.log('in delete function');
    $(this).parent().empty();
    // $('#swapButton').parent().empty();
  // $('body').remove(clickCounter);
}