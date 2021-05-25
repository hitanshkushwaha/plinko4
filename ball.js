class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.4
        }
       this.r=r
       this.body = Bodies.circle(x,y,this.r,options);
       this.color=color(random(0,225),random(0,225),random(0,225));
       World.add(this.body,world);
    
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
        

 
    }

    

}