
let game=document.getElementById('canvas');
let context=game.getContext('2d');
const Stext =document.querySelector('.score');
let UNIT= 25
let xvel=25;
let yvel=0;
let score=0
let active=true
let started=false
let s=[
    {x:UNIT*2,y:0},
    {x:UNIT,y:0},
    {x:0,y:0}
];
window.addEventListener('keyup',control)

star()
function star(){
    context.fillStyle='black';
    context.fillRect(0,0,600,400);
    createFood();
    displayFood();
    drawSnake();

}
function clear(){
    context.fillStyle='black';
    context.fillRect(0,0,600,500);

}
function createFood(){
   foodX= Math.floor(Math.random()*600/UNIT)*25
   foodY=Math.floor(Math.random()*400/UNIT)*25

}
function displayFood(){
    context.fillStyle="red";
    context.fillRect(foodX,foodY,UNIT,UNIT);

}
function drawSnake(){
    context.fillStyle='green';
    context.strokeStyle='red';
    s.forEach((snakePart)=>{
        context.fillRect(snakePart.x,snakePart.y,UNIT,UNIT)
        context.strokeRect(snakePart.x,snakePart.y,UNIT,UNIT)
            
        



    })
}
function moveSnake(){
    const head={x:s[0].x+xvel,
    y:s[0].y+yvel}
    s.unshift(head)
    if(s[0].x==foodX && s[0].y==foodY){
        createFood()
        score++;
        Stext.innerText=`score:0${score}`;
    }
    else
        s.pop()
}
function timeBase(){
    if(active){
    setTimeout(()=>{
        clear();
        displayFood();
        moveSnake();
        drawSnake();
        gameover();
        timeBase();
    
}, 300)
    
}
else{
    clear();
    context.font="bold", "100px";
    context.fillStyle="white";
    context.textAlign="center";
    context.fillText("Game Over!",600/2,400/2)

}
}

 function control(e){
    if(!started){
        started=true;
        timeBase()


    }
    
   else if(e.key=='ArrowLeft'&& xvel!=UNIT){
        xvel=-UNIT
        yvel=0
        console.log("arrow")
   }
        
    else if(e.key=='ArrowRight' && xvel!=-UNIT){
        xvel=UNIT
        yvel=0
        console.log("right")
    }
    
    else if(e.key=='ArrowUp'&& yvel!=UNIT){
        yvel=-UNIT
        xvel=0
        console.log("up")
    }
    else if(e.key=='ArrowDown'&&yvel!=-UNIT){
        yvel=UNIT
        xvel=0
        console.log("down")
        
        }
    
    }
    function gameover(){
    if(s[0].x<0){
        active=false
}
else if(s[0].x>=600){
    active=false

}
else if(s[0].y<0){
    active=false

}
else if(s[0].y>=500){
    active=false

}

    }

   