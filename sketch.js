const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;

function setup(){
    createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    bob1=new Bob(300,250,50);
    bob2=new Bob(400,250,50);
    bob3=new Bob(500,250,50);
    bob4=new Bob(600,250,50);
    bob5=new Bob(700,250,50);

    sling1= new Sling(bob1.body,{x:300,y:100});
    sling2= new Sling(bob2.body,{x:400,y:100});
    sling3= new Sling(bob3.body,{x:500,y:100});
    sling4= new Sling(bob4.body,{x:600,y:100});
    sling5= new Sling(bob5.body,{x:700,y:100});
}

function draw(){
    background("black");

    Engine.update(engine);

    bob1.display();
    sling1.display();

    bob2.display();
    sling2.display();

    bob3.display();
    sling3.display();

    bob4.display();
    sling4.display();

    bob5.display();
    sling5.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
}