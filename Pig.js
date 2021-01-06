class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,80,80);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255
  }

  display() 
  {
    if(this.body.speed < 3) 
    { super.display();
     
    }else{ 
      World.remove(world, this.body); 
      push();
      tint(255,this.Visibility)
      this.Visibility = this.Visibility - 5
      image(this.image, this.body.position.x, this.body.position.y, 80,80)
      pop();
    }
  }

};