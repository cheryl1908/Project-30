const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload() {
    }

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var stand= new Stand(340,500,100,20);
   
    var block1= new Blocks(120,275,30,40);
    var block2= new Blocks(150,275,30,40);
    var block3= new Blocks(180,275,30,40);
    var block4= new Blocks(210,275,30,40);
    var block5= new Blocks(240,275,30,40); 
    var block6= new Blocks(270,275,30,40);
    var block7= new Blocks(300,275,40);

    var block8= new Blocks(330,235,30,40);
    var block9= new Blocks(360,235,30,40);
    var block10= new Blocks(390,235,30,40);
    var block11= new Blocks(420,235,30,40);
    var block12= new Blocks(450,235,30,40);

    var block13= new Blocks(360,195,30,40);
    var block14= new Blocks(390,195,30,40);
    var block15= new Blocks(420,195,30,40);

    var block16= new Blocks(390,155,30,40);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();
    block16.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Polygon.fly();
}
function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    }
}