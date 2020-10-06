
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, stone, ground, launcher;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;
var world, boy;
var launchingForce=100;

function preload(){
  boy=loadImage("boy.png");
  }

function setup() {
  createCanvas(1300, 600);
  engine = Engine.create();
  world = engine.world;

  stone=new Stone(235,420,30); 

  m1=new Mango(1100,100,30);
  m2=new Mango(1170,130,30);
  m3=new Mango(1010,140,30);
  m4=new Mango(1000,70,30);
  m5=new Mango(1100,70,30);
  m6=new Mango(1000,230,30);
  m7=new Mango(900,230,40);
  m8=new Mango(1140,150,40);
  m9=new Mango(1100,230,40);
  m10=new Mango(1200,200,40);
  m11=new Mango(1120,50,40);
  m12=new Mango(900,160,40);

  tree=new Tree(1050,580);
  ground=new Ground(width/2,600,width,20);
  launcher=new Launcher(stone.body,{x:235,y:420})

  Engine.run(engine);
}

function draw() {

  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  

  tree.display();
  stone.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m6.display();
 m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  stone.display();

  ground.display();
  launcher.display();
  detectollision(stone,m1);
  detectollision(stone,m2);
  detectollision(stone,m3);
  detectollision(stone,m4);
  detectollision(stone,m5);
  detectollision(stone,m6);
  detectollision(stone,m7);
  detectollision(stone,m8);
  detectollision(stone,m9);
  detectollision(stone,m10);
  detectollision(stone,m11);
  detectollision(stone,m12);
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  launcher.fly();
    // distance=int(dist(stone.x,stone.y,mango1.x,mango1.y));
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
    launcher.attach(stone.body);
  }
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

    if(distance<=lmango.r+lstone.r)
    {

      Matter.Body.setStatic(lmango.body,false);
    }

  }

