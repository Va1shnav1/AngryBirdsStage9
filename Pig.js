class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility=255;
  }
  display() {
    //console.log(this.body.speed);
    
    if(this.body.speed<2.3){
      super.display();
    }else{
      push();
      this.visibility-=2;
      tint(255, this.visibility);
      image(this.image, this.body.position.x,  this.body.position.y, this.width, this.height);
      World.remove(world, this.body);
      if(this.visibility<0 &&
        this.visibility>-400){
        score=score+1;
      }
      /*if(this.visibility<0 &&
        this.visibility>-2){
        score=score+1;
      }*/
      pop();
    }
  }
}