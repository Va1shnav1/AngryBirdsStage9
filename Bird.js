class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.rimage = loadImage("sprites/rbird.png");
    this.bimage = loadImage("sprites/bbird.png");
    this.yimage = loadImage("sprites/ybird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory=[];
  }
  rdisplay() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.rimage, 0, 0, this.width, this.height);
        pop();
  }
  bdisplay() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.bimage, 0, 0, this.width, this.height);
        pop();
  }
  ydisplay() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.yimage, 0, 0, this.width, this.height);
        pop();
  }
  displaytrajectory() {
    //console.log(this.body.velocity);
    if(this.body.velocity.x>10 &&
      this.body.position.x>200){
        var pos = [this.body.position.x, this.body.position.y];
        this.trajectory.push(pos);
      }
    for(var i=0;i<this.trajectory.length;i++){
      image(this.smokeImg, this.trajectory[i][0], this.trajectory[i][1])
    }
  }
}
