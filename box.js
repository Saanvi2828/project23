 class Box{

    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     rect(200,200,10,10);
     translate(this.body.position.x, this.body.position.y);
    }
  }
  