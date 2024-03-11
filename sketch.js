function setup() {
  createCanvas(500, 500)
  background(220);
  for (let x = 0; x < 30; x++) {
    icecream(random(0,width), random(0,height), 30, color(0, 255, 255))
  }
}

function icecream(x, y, size, colour) {
  fill(255, 255, 150);
  triangle(x, y, x + 20, y + 40, x + 40, y);
  fill(colour);
  ellipseMode(CENTER);
  ellipse(x + 20, y - 35, 40, 41); 
}
