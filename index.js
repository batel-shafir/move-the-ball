


var field;
var ball;
var color;
var movement = 50;

var isColliding = {
  x: true,
  y: true
}

window.onload = function() {
    field = document.getElementById('field');
    ball = document.getElementById('ball');
    init();
  }
  function changeColor() {
    ball.style.backgroundColor = color ? "#000000":"#D93600" ;
    color = !color;
  }

  function init() {
    ball.style.left='0px';
    ball.style.top='0px';
    color = true;
    isColliding.x = true;
    isColliding.y = true;
  }

function pressLeft() {
    if (parseInt(ball.style.left) - movement > 0 ){
        ball.style.left = parseInt(ball.style.left) - movement + 'px';
        isColliding.x = false;
    }
    else {
        ball.style.left = 0 + 'px';
        (!isColliding.x) && (changeColor());
        isColliding.x = true;
    }
}

function pressRight() {
    if( parseInt(ball.style.left) + movement < (field.clientWidth - ball.clientWidth )){
        ball.style.left = parseInt(ball.style.left) + movement + 'px';
        isColliding.x = false;
    }
    else {
        ball.style.left = field.clientWidth - ball.clientWidth + 'px';
        (!isColliding.x) && (changeColor());
        isColliding.x = true;    
    }      
    
}


function pressUp() {
    if( parseInt(ball.style.top) - movement > 0){
        ball.style.top = parseInt(ball.style.top) - movement + 'px';
        isColliding.y = false;
    }
    else{
        ball.style.top = 0;
        (!isColliding.y) && (changeColor());
        isColliding.y = true;
    } 
}

function pressDown() {
    if( parseInt(ball.style.top) + movement < field.clientHeight - ball.clientHeight){
        ball.style.top = parseInt(ball.style.top) + movement + 'px';
        isColliding.y = false;
    }
    else{
        ball.style.top = field.clientHeight - ball.clientHeight + 'px';
        (!isColliding.y) && (changeColor());
        isColliding.y = true;
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