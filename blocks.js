class Block{
  constructor(x, y, width, height) {
      var options = {
         
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
    }

}

if(this.body.speed < 3){
    display()
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
}
 else{
   World.remove(world, this.body);
   push();
   this.Visiblity = this.Visiblity - 5;
   tint(255,this.Visiblity);
   image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   pop();
 }
