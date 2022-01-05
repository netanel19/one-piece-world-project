class Paddle {
  constructor(x) {
    this.width = 20;
    this.height = 80;
    this.x = x;
    this.y = height / 2;
  }
}

function setup() {
  createCanvas(630, 350);
  playerPaddle = new Paddle(26);
}

function draw() {
  background(0);
  playerPaddle.display();
}
