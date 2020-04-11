const World = Matter.World;
const Engine =Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1;
var ground;
var balls = [];


function setup(){

  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var other = null;
  for (var x=50;x<340;x=x+20){

var fixed = false;

if(!other){

  fixed = true;
}

  ball1 = new Ball(200,x,10,fixed);
  balls.push(ball1);

if(other){
  var options = {
  bodyA: ball1.body,
  bodyB: other.body,
  length : 20,
  stiffness : 0.4
 }
 var thread = Constraint.create(options)
 World.add(world,thread);
}
  

  other = ball1
  }
  ground = new Ground(200,390,400,20);
}

function draw(){

background(0);

Engine.update(engine);

for(var i=0;i<balls.length;i++){
  balls[i].display();
}
ball1.display();
ground.display();

//strokeWeight(4);
//line(balls[0].body.position.x,balls[0].body.position.y,balls[1].body.position.x,balls[1].body.position.y)


}

