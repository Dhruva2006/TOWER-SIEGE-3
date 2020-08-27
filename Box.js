class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution':1,
            'friction':1,
            'density':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      //super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
      this.visibility = 255;
    }
    display(){
      var pos =this.body.position;
      
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);

      if(this.body.speed < 3) {
        tint(255, this.visibility);
      }
      else {
        World.remove(world, this.body);
        push();
        tint(255, this.visibility);
        this.visibility = this.visibility - 5;
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
    }
    

   score() {
      if(this.visibility < 0 &&  this.visibility > -105) {
        score++;
      }
   }
  }
  
  