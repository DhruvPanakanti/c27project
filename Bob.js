class bob {
    constructor(x,y){
        var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
    
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(world,this.body);
    }
    display(){
        var ban=this.body.position; 
        var angle=this.body.angle;
        push()
        translate(ban.x,ban.y);
        rotate(angle);
        rectMode(RADIUS);

        fill ("red");
        pop ();
    }
    
    }
