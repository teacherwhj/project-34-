class Bob
{
	constructor(x,y)
	{
		var options={
			
			restitution:1.2,
			friction:0,
			
			
			}
		this.x=x;
		this.y=y;
		this.radius=25
		
		this.body=Bodies.circle(this.x, this.y, 25, options)
		World.add(world, this.body);
		

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			fill(255,0,255);
			ellipseMode(CENTER);
			ellipse(0,0,50);
			pop();
			
	}

}
