class Obstacle {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            density: 1.0,
        }
        this.width = 100;
        this.height = 20;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options, {inertia: Infinity});
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }

}