class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.rimage = loadImage("sprites/bird.png");
    this.bimage = loadImage("sprites/bird.png");
    this.yimage = loadImage("sprites/bird.png");
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
}
