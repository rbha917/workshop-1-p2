function setup() {
  createCanvas(500, 500)
  for (let x = 0; x < 30; x++) {
    icecream(random(0, width), random(0, height), random(0, 200), color(255, 0, 0));
  }
}

function draw() {
  
}

function icecream(x, y, size, colour) {
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);
  fill(colour);
  ellipseMode(CENTER);
  ellipse(x + 20, y - 35, 40, 41); 
}
