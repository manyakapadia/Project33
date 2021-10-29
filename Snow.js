class Snow{
    constructor(x,y){
        this.radius = 20;
        this.body = Bodies.circle(x,y, this.radius);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        this.image = loadImage("snow4.webp");
    }

    display(){
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    }



}