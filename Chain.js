class Chain{
    constructor(bodya, bodyb){
        var options = {
            bodyA: bodya,
            bodyB: bodyb,
            length:70,
            stiffness:0.4
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
        var pointA, pointB;
        pointA=this.chain.bodyA.position;
        pointB=this.chain.bodyB.position;
        stroke("black");
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        
    }
}