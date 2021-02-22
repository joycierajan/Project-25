class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("images/paper.png")
        World.add(world, this.body);
        

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push()
        //fill("red");
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        //ellipse(pos.x, pos.y,this.radius, this.radius)
        image(this.image, 0,0, this.radius*2, this.radius*2)
        pop()

        
    }
}