class Sling 
{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length:300
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(255,255,255)
            strokeWeight(2)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}