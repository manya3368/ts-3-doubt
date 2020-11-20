class Box  {
    constructor(x, y, width, height){
     var options={
       restitution:0.4,
       friction:0
     }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.image=loadImage("box.png");
      this.Visiblity=255;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
   score(){
   if(this.Visiblity<0 && this.Visiblity>=105){
     score++;
   }  
  }

    display(){
     // console.log(this.body.speed);
     
      if(this.body.speed < 5){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        /*rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);*/
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
        
         pop();
       }
      
     }
    }

    
  
  
  