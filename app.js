


document.addEventListener('click',function(evt){


    const MainElement = document.querySelector('.container');
    const Display = document.querySelector('.display');
    const isClicked = !MainElement.contains(evt.target);
    if(isClicked){
        console.log('outside');
        Display.textContent = "Outside";
    }else{
        console.log('inside');
        Display.textContent = "Inside";
    }


})