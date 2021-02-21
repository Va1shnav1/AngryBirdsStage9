class Chain{
    constructor(bodya, pointb){
        var options = {
            bodyA: bodya,
            pointB: pointb,
            length:10,
            stiffness:0.01
        }
        this.pointB=pointb;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.slingImg1 = loadImage("sprites/sling1.png");
        this.slingImg2 = loadImage("sprites/sling2.png");
        this.slingImg3 = loadImage("sprites/sling3.png");
    }
    display(){
        image(this.slingImg1, 200, 20);
        image(this.slingImg2, 170, 20);

        if(this.chain.bodyA){
            var pointA, pointB;
            pointA=this.chain.bodyA.position;
            pointB=this.pointB;
            stroke(48, 22, 8);
            push();
            if(pointA.x<220){
                strokeWeight(6);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
                image(this.slingImg3, pointA.x-30, pointA.y-10, 15, 30);
            }else{
                strokeWeight(3);
                line(pointA.x+20,pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20,pointA.y, pointB.x+20, pointB.y);
                image(this.slingImg3, pointA.x+20, pointA.y-10, 15, 30);
            }
            pop();
        } 
    }
    fly(){
        this.chain.bodyA=null;
    }
    attach(body){
        this.chain.bodyA=body;
    }
}