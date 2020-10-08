  
    class Box{
        constructor(x, y, width, height) {
            super(x,y,width,height); 
            this.Visibility=255;
            }
  
          
      display(){
          if(this.body.speed<3){
              super.display();
          }
          else{
              World.remove(world, this.body)
          push();
          this.Visibility=this.Visibility-5;
          tint(255,this.Visibility)
          var angle = this.body.angle;
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          pop();
      }
    }
  }