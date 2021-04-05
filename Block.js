class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.visiblity = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        this.width = width;
        this.height = height;
        this.image= loadImage("block.png")
        World.add(world, this.body);
        
      }
     
      display(){
        if(this.body.speed <3){
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
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
        pop();
      }
    }
}