var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var ball = {
     x : 150,
     y : 150,
     dx : 10,
     dy : 5,
     radius : 20
 };
 var paddle = {
     width: 70,
     height: 10,
     x : 0,
     y : canvas.height - 10,
     speed: 15,
     isMovingRight: false,
     isMovingLeft: false
 };
 var isGameOver = false;
 var BrickConfig = {
     offsetX: 25,
     offsetY: 25,
     margin: 25,
     width: 70,
     height: 15,
     totalRow: 3,
     totalCol: 5
 };
 var BrickList = [];
 for( let i = 0; i < BrickConfig.totalRow;i++){
     for(let j = 0; j < BrickConfig.totalCol;j++){
         BrickList.push({
             x: BrickConfig.offsetX + j*(BrickConfig.width + BrickConfig.margin),
             y: BrickConfig.offsetY + i*(BrickConfig.height + BrickConfig.margin),
             isBroken: false
         });
     }
 }
// document.addEventListener('keypress',function (event){
//     console.log(event);
// });

document.addEventListener('keyup',function (event){
    console.log(event);
    console.log(event);
    if(event.keyCode == 37){
        paddle.isMovingLeft = false;
    }
    else if(event.keyCode == 39){
        paddle.isMovingRight = false;
    }
});

document.addEventListener('keydown',function (event){
    console.log('KEY DOWN');
    console.log(event);
    if(event.keyCode == 39){
        paddle.isMovingRight = true;
    }
    else if(event.keyCode == 37){
       paddle.isMovingLeft = true;
    }
});

function drawBall() {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}
function drawPaddle(){
    context.beginPath();
    context.rect(paddle.x,paddle.y,paddle.width,paddle.height);
    //console.log('x: '+paddle.x + 'y : '+paddle.y + 'width: '+ paddle.width);
   // context.fillStyle = 'red';
    context.fill();
    context.closePath();
}
function drawBricks(){
    // 2*offset + 4*margin + 5*width = 500;
    // offset = margin = 25;
    // => width = 70;
    // row =3;
    // col = 5;
    BrickList.forEach(function (b) {
        if (!b.isBroken) {// function forEach need to define later
            context.beginPath();
            context.rect(
                b.x,
                b.y,
                BrickConfig.width,
                BrickConfig.height
            );
            context.fill();
            context.closePath();
        }
    })
}
function handleBallCollideBounds(){
    if(ball.x > canvas.width - ball.radius||ball.x < ball.radius ){
        ball.dx = -ball.dx;
    }
    if(ball.y < ball.radius){
        ball.dy = -ball.dy;
    }
}
function handleBallCollidePaddle(){
    if(ball.x + ball.radius >= paddle.x && ball.x + ball.radius <= paddle.x + paddle.width
        && ball.y + ball.radius >= canvas.height - paddle.height){
        ball.dy = -ball.dy;
    }
}
function handleBallCollineBrick(){
    BrickList.forEach(function(b){
        if(!b.isBroken){
            if(ball.x > b.x && ball.x <= b.x + BrickConfig.width && ball.y + ball.radius >= b.y
            && ball.y - ball.radius <= b.y + BrickConfig.height){
                ball.dy = -ball.dy;
                b.isBroken= true;
            }
        }
    })
}
function updatePosition(){
    ball.x += ball.dx;
    ball.y +=ball.dy;
}
function updatePaddlePosition(){
    if (paddle.isMovingRight) {
        paddle.x += paddle.speed;
    }
    if (paddle.isMovingLeft) {
        paddle.x -= paddle.speed;
    }
    if (paddle.x < 0) {
        paddle.x = 0;
    } else if (paddle.x > canvas.width - paddle.width) {
        paddle.x = canvas.width - paddle.width;
    }
}
function checkGameOver(){
    if(ball.y > canvas.height - ball.radius){
        isGameOver = true;
    }
}
function handleGameOver(){
    alert('Game over!');
}
function draw() {
    if (!isGameOver) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawPaddle();
        drawBricks();
        handleBallCollideBounds();
        handleBallCollidePaddle();
        handleBallCollineBrick();
        updatePosition();
        updatePaddlePosition();
        checkGameOver();
        //console.log(x);
        requestAnimationFrame(draw);
    }
    else {
      handleGameOver();
    }
}
draw();
