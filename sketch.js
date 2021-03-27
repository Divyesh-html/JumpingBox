var canvas;
var music;
var box;
var fixedbox,fixedbox2, fixedbox3, fixedbox4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,500);

    //create 4 different surfaces
    fixedbox = createSprite(100,500,190,20);
    fixedbox2 = createSprite(300,500,190,20);
    fixedbox3 = createSprite(500,500,190,20);
    fixedbox4 = createSprite(700,500,190,20);


    //create box sprite and give velocity
    box = createSprite(random(20,750),400,20,20);
    box.velocityY = 10;
    box.velocityX = 10;

}

function draw() {
    background("black");

    edges=createEdgeSprites();
    box.bounceOff(edges);

    fixedbox.shapeColor = "blue";
    fixedbox2.shapeColor = "yellow";
    fixedbox3.shapeColor = "green";
    fixedbox4.shapeColor = "red";

    if(fixedbox.isTouching(box) && box.bounceOff(fixedbox))
    {
        box.shapeColor = "blue"
        music.play();
    }
    if(fixedbox2.isTouching(box) && box.bounceOff(fixedbox2))
    {
        box.shapeColor = "yellow"
        music.play()
    }
    if(fixedbox3.isTouching(box) && box.bounceOff(fixedbox3))
    {
        box.shapeColor = "green"
        music.play()
    }
    if(fixedbox4.isTouching(box) && box.bounceOff(fixedbox4))
    {
        box.shapeColor = "red"
        music.stop()

        
    }
    drawSprites();
    //add condition to check if box touching surface and make it box
}
