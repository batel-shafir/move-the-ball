

//ball.style.left= '0px';

//console.log('1'==1); //compares content
//console.log('1'==='2'); // compare contsnt + type
var field;
var ball;
var color;

window.onload = function() {
    field = document.getElementById('field');
    ball = document.getElementById('ball');
    color = 'red';
    init();
  }

  function init() {
    ball.style.left='0px';
    ball.style.top='0px';
    // ball.style.backgroundColor = '#D93600';
  }

function pressLeft() {

    if (parseInt(ball.style.left) - 50 > 0 ){
        console.log(ball.style.left);
        ball.style.left = parseInt(ball.style.left) - 50 + 'px';
    }
    else {
        ball.style.left = 0 + 'px';
        setTimeout(function(){console.log('in to'); ball.style.backgroundColor = color ? "#000000":"#D93600";  color = !color;},600);


    }
}

function pressRight() {

    if( parseInt(ball.style.left) + 50 < (field.clientWidth - ball.clientWidth )){
    ball.style.left = parseInt(ball.style.left) + 50 + 'px';
    }
    else {
        ball.style.left = field.clientWidth - ball.clientWidth + 'px';
        setTimeout(function(){console.log('in to'); ball.style.backgroundColor = (color == 'red')? "#000000":"#D93600";  color = !color;},600);
      
    }
}


function pressUp() {

    if( parseInt(ball.style.top) - 50 > 0)
        ball.style.top = parseInt(ball.style.top) - 50 + 'px';
    else{
        ball.style.top = 0;
        setTimeout(function(){console.log('in to'); ball.style.backgroundColor = color? "#000000":"#D93600";  color = !color;},600);
    } 
}

function pressDown() {

    if( parseInt(ball.style.top) + 50 < field.clientHeight - ball.clientHeight)
    ball.style.top = parseInt(ball.style.top) + 50 + 'px';
    else{
        ball.style.top = field.clientHeight - ball.clientHeight + 'px';
        setTimeout(function(){console.log(color); ball.style.backgroundColor = color ? "#000000":"#D93600";  color = !color;},600);
    } 
}

/*if (field != null && ball != null){ 
 field.onclick = function(event) {

    // window-relative field coordinates
    let fieldCoords = field.getBoundingClientRect();

    // the ball has position:absolute, the field: position:relative
    // so ball coordinates are relative to the field inner left-upper corner
    let ballCoords = {
      top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
      left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    // prevent crossing the top field boundary
    if (ballCoords.top < 0) ballCoords.top = 0;

    // prevent crossing the left field boundary
    if (ballCoords.left < 0) ballCoords.left = 0;


    // // prevent crossing the right field boundary
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
      ballCoords.left = field.clientWidth - ball.clientWidth;
    }

    // prevent crossing the bottom field boundary
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
      ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
  }}*/
 
/*
  window.addEventListener('keyup', (e)=> {
    let fieldCoords = field.getBoundingClientRect();
    switch(e.key){
        case "ArrowLeft":
            //console.log(ball.style.left);
            if( parseInt(ball.style.left) - 10 > 0 )
            ball.style.left = parseInt(ball.style.left) - 10 + 'px';
            ball.style.left = 0;
            break;
        case "ArrowRight":
            if( parseInt(ball.style.left) + 10 < (field.clientWidth - ball.clientWidth ))
            ball.style.left = parseInt(ball.style.left) + 10 + 'px';
            else ball.style.left = field.clientWidth - ball.clientWidth + 'px';
            break;
        case "ArrowDown":
            if( parseInt(ball.style.top) + 10 < field.clientHeight - ball.clientHeight)
            ball.style.top = parseInt(ball.style.top) + 10 + 'px';
            else ball.style.top = field.clientHeight - ball.clientHeight + 'px';

            break;
        case "ArrowUp":
            if( parseInt(ball.style.top) + 10 > 0)
            ball.style.top = parseInt(ball.style.top) - 10 + 'px';
            else ball.style.top = 0;
            break;
    }
})*/