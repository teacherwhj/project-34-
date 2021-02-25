class Rope{
    constructor(bodyA, bodyB, offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:1,
            angularStiffness:1,
            length:220,
            pointB:{x:this.offsetX,y:this.offsetY}
           }
       
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
  

    display(){
      
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        var A1X=pointA.x;
        var A1Y=pointA.y;

        var A2X=pointB.x+this.offsetX;
        var A2Y=pointB.y+this.offsetY;
        line(A1X, A1Y-25,A2X,A2Y);
    }
}
