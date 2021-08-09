const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1, playerbase
var computer1, computerbase
var computerarcher, playerarcher
var computerarrow, playerarrow, arrow

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
player1 = new Player(300, 230, 100, 200)
playerbase = new PlayerBase(300, 400, 200, 200)
computer1 = new ComputerPlayer(1000, 230, 100, 200)
computerbase = new ComputerBase(1000, 400, 200, 200)
computerarcher = new ComputerArcher(width - 340,computerbase.body.position.y-180,120,120)
playerarcher = new PlayerArcher(340,playerbase.body.position.y-180,120,120)
arrow = new PlayerArrow(playerarcher.body.position.x,playerarcher.body.position.y,100,10)

 }

function draw() {

  background(180);

  Engine.update(engine);
  player1.display();
  playerbase.display();
  computer1.display();
  computerbase.display();
  computerarcher.display();
  playerarcher.display();
  arrow.display();
  if(keyCode==32)
  {
  arrow.shoot(playerarcher.display.body.angle)
  }
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
