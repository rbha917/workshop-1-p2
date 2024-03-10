# workshop-1-p2

## Functions & Loops
	random (0, width) means generate a random number between 0 and width
	X ++ means x + 1
	for (x = 0; x < 30; x ++){
		lollipop(random(0,width), random(0,height), random (0, 200), color(255, 0, 0));
}
	
 function lollipop(x, y, size, colour){
  fill (255)
	rect (x, y - size, 10, size);
	fill(colour)
	ellipseMode(CORNER)
	circle(x - 10, y - size - 30, 30);
}

## Shapes
	triangle (x, y, y + 25, y - 20, x + 50, y) switch the - to + for an upside down triangle
 
- Error fixing using chatgpt for random numbers: removed background under draw function because it was erasing the image and redrawing over it
