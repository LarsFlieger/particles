let particles = [];

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
}

function draw() {
    background(0);

    for(let j = 0; j < 3; j++) {
        let p = new Particle();
        particles.push(p);
    }

    for(let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if(particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {

    constructor() {
        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-1, 1);
        this.vy = random(-3, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= random(1, 10);
    }

    show() {
        noStroke();
        //stroke(255);
        fill(255, random(0,255), 0, this.alpha);
        ellipse(this.x, this.y, 16)
    }
}

