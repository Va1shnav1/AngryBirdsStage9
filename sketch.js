const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;
var START=0;
var LAUNCHED=1;
var gameState=START;
var END=2;
var score=0;
var bird, bird2, bird3;
var birds = [];
var replay, replayImg;
var birdSound, pigSound;
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    replayImg = loadImage("sprites/rbutton.png");
    birdSound = loadSound("sprites/birdyell.mp3");
    pigSound = loadSound("sprites/pigSound.mp3");
    getDateTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    replay = createButton("Replay");
    replay.position(900, 30);
    replay.style('background-image', 'sprites/rbutton.png');
    replay.style('background-color', 'orange');
    replay.style('color', 'white');
    replay.src="sprites/rbutton.png";

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird2 = new Bird(170,220);
    bird3 = new Bird(150,220);

    birds.push(bird3)
    birds.push(bird2);
    birds.push(bird);
    chain = new Chain(bird.body, {x:200, y:50});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    fill("green");
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    bird.rdisplay();
    bird2.bdisplay();
    bird3.ydisplay();
    bird.displaytrajectory();
    bird2.displaytrajectory();
    bird3.displaytrajectory();
    fill("brown");
    platform.display();
    chain.display();
    push();
    textSize(30);
    fill("black");
    stroke("red");
    strokeWeight(5);
    text("Score: "+score, 1000, 50);
    pop();
    if(score===400){
        gameState=END;
    }
    if(gameState===END){
        textSize(50);
        fill("yellow");
        stroke("black");
        strokeWeight(5);
        text("YOU WIN!", 500, 75);
    }
    replay.mousePressed(()=>{
        location.reload();
    })
}

function mouseDragged(){
    //if(gameState===START){
        Matter.Body.setPosition(birds[birds.length-1].body, {x:mouseX, y:mouseY});
    //}
}

function mouseReleased(){
    if(gameState===START){
        //birdSound.play();
        chain.fly();
        birds.pop(); 
    }
    gameState=LAUNCHED;

}

function keyPressed(){
    if(keyCode===32){
        bird.trajectory = [];
        bird2.trajectory = [];
        bird3.trajectory = [];
        Matter.Body.setPosition(birds[birds.length-1].body, {x:200, y:50});
        chain.attach(birds[birds.length-1].body);
        gameState=START;
    }
}
async function getDateTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13);
    console.log(hour);
    if(hour>=6 && hour<=18){
        backgroundImg = loadImage("sprites/bg.png");
    }else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}