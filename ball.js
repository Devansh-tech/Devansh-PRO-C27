class Ball{
    constructor(x,y,r,fixed){
  var options = {
      restitution :0.9,
      isStatic : fixed
  }

  this.body = Bodies.circle(x,y,r,options);
  this.x=x;
  this.y=y;
  this.r = r;
  World.add(world,this.body)
    }

    display(){

        var pos = this.body.position;
        
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }


}