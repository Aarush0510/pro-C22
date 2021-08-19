class Rope
{
	constructor(body1, body2, pointA, pointB)	
	{
		this.pointA = pointA
		this.pointB = pointB

		var options = {
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB},
			}
	//create rope constraint here
	
	this.body = Constraint.create(options);
    World.add(world, this.body);

	}


    //create display() here 
	display() {
		
		var pointA=this.body.bodyA.position;
		var pointB=this.body.bodyB.position;

		var pos=this.body.position;

		
		//translate(pos.body1,pos.body2,pos.pointA,pos.pointB);
		strokeWeight(2);
		//stroke(255);
		line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y,this.pointB);
	
	  }
}
