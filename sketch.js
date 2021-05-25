const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,boxx,boxy;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
 
  fill("blue")
  ground = new Ground(600, 600, 1600, 50);

  hero = new Hero(400,800,200);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,500,300);
 
  box1 = new Box(600, 100, 70, 70);
  boxx = new Box(600, 170, 70, 70);
  boxy = new Box(600, 250, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
   
  box5 = new Box(800, 100, 70, 70);
  box6 = new Box(800, 170, 70, 70);
  box7 = new Box(800, 250, 70, 70);
  box8 = new Box(800, 320, 70, 70);

  box9 = new Box(700, 100, 70, 70);
  box10 = new Box(700, 170, 70, 70);
  box11= new Box(700, 250, 70, 70);
  box12= new Box(700,320, 70, 70);
  box13= new Box(700,490, 70, 70);
  box14= new Box(700,560, 70, 70);



}

function draw() {
  
 
  background(bg);
  Engine.update(engine);
  fill("blue")
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  boxx.display();
  boxy.display();
 


  hero.display();
  rope.display();
  monster.display();
fill("red")
  text("KILL THE MONSTER!!!!",600,60);
fill("black");
  text("I'AM HEAR TO DISTORY YOU",250,190);
  fill("yellow");
  text("LETS SAVE THE WORLD",600,600);


  text(mouseX+","+mouseY,10,10);
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  attach.fly();
}
