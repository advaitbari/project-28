const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var ground1,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,polygon1;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new ground(600,height,1200,20);
    
    polygon1 = new polygon(400,500);


        block1 = new  block(315,505,180,10);
        var scale=0.5;
        block2 = new block(500,285,30,30);
        var scale=0.5;
        block3 = new block(280,285,30,30);
        var scale=0.5;
        block4 = new block(315,285,30,30);
        var scale=0.5;
        block5 = new block(350,285,30,30);
        var scale=0.5;
        block6= new block(385,285,30,30);
        var scale=0.5;
        block7 = new block(367.5,255,30,30);
        var scale=0.5;
        block8 = new block(332.5,255,30,30);
        var scale=0.5;
        block9 = new block(297.5,255,30,30);
        var scale=0.5;
        block10 = new block(262.5,255,30,30);
    var scale=0.5;

}
function draw(){
    background("black");
    Engine.update(engine);
    ground1.display();
    polygon1.display();
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
    
}
