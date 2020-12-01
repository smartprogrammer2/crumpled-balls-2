class Paper {
    constructor (x, y, width, height) {
        var options = {
            isStatic: false,
            restitution: 0.6,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paperimage.png")
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, 40, 40);
        pop();
    }


}
