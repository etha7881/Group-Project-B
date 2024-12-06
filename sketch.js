let StandardmapButton,SataliteButton;

let mapcolor;
let mapcolorsize;
let mapcolorgradient;
let mapterrain;
let mapstandard;

function preload() {
	mapcolor=loadImage('Map Colored.png')
	
	}
function setup() 
{
	createCanvas(1920, 1080);
	
	mapColor();
	drawFire(90,255, 40);
	drawFire(145,460, 40);
	drawFire(118,680, 40);
	drawFire(155,879, 40);
	drawFire(283,925, 40);
	drawFire(770,920, 40);
	drawFire(665,720, 40);
	drawFire(788,750, 40);
	drawFire(896,650, 40);
	drawFire(657,140, 40);
	drawFire(588,240, 40);
	drawFire(505,235, 40);
	drawFire(388,405, 40);
	drawFire(278,100, 40);
	drawFire(235,120, 40);
	drawFire(479,130, 40);
	drawFire(520,55, 40);
	drawFire(485,50, 40);
	drawFire(1243,94, 40);
	drawFire(1350,935, 40);
}

function createButtons(){
	const buttonWidth = 100;
  const buttonHeight = 35;
  const buttonMargin = 5;

  StandardButton = createButton('Standard');
  StandardButton.size(buttonWidth, buttonHeight);
  StandardButton.position(5,1090);

  SataliteButton = createButton('Satalite');
  SataliteButton.size(buttonWidth, buttonHeight);
  SataliteButton.position(110,1090);







}
function mousePressed() {
	// Check for shape selection buttons
	if (dist(mouseX, mouseY, width - 180, 180) < 20) {
	  selectedShape = 'circle'; // Change selected shape to circle
	} else if (mouseX > width - 165 && mouseX < width - 145 && mouseY > 170 && mouseY < 190) {
	  selectedShape = 'triangle'; // Change selected shape to triangle
	} else if (mouseX > width - 138 && mouseX < width - 118 && mouseY > 170 && mouseY < 190) {
	  selectedShape = 'square'; // Change selected shape to square
	}
}
function mapColor(){

image(mapcolor, 0, 0);

}
function drawFire(x, y, size) {
	noStroke();
  
	// Draw the outer flame (red)
	fill(255, 69, 0); // Red-orange color
	beginShape();
	vertex(x, y);
	bezierVertex(x - size, y - size, x - size * 0.3, y - size * 1.5, x, y - size * 1.8);
	bezierVertex(x + size * 0.3, y - size * 1.5, x + size, y - size, x, y);
	endShape(CLOSE);
  
	// Draw the inner flame (orange)
	fill(255, 140, 0); // Orange color
	beginShape();
	vertex(x, y);
	bezierVertex(x - size * 0.6, y - size * 0.6, x - size * 0.2, y - size * 1.2, x, y - size * 1.4);
	bezierVertex(x + size * 0.2, y - size * 1.2, x + size * 0.6, y - size * 0.6, x, y);
	endShape(CLOSE);
  
	// Draw the core flame (yellow)
	fill(255, 215, 0); // Yellow color
	beginShape();
	vertex(x, y);
	bezierVertex(x - size * 0.3, y - size * 0.3, x, y - size * 0.8, x, y - size);
	bezierVertex(x, y - size * 0.8, x + size * 0.3, y - size * 0.3, x, y);
	endShape(CLOSE);
  }
function draw(){
	createButtons();

}

  
	
//hello yooo