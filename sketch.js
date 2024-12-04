let StandardmapButton;
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

}

function createButtons(){
StandardmapButton = createButton("Standard Map");

StandardButton.position(20, 1940);

}
function mapColor(){

image(mapcolor, 0, 0);

}
function draw(){
	createButtons();
}
<<<<<<< Updated upstream
	
//hello yooo
=======
	function setup() {
  createCanvas(400, 400);
  noLoop(); // Stops draw loop to keep it static
}


}

}
fire 
function setup() {
	createCanvas(400, 400);
	noLoop(); // Stops draw loop to keep it static
  }
  
  function draw() {
	background(30); // Dark background for contrast
	
	drawFire(200, 300, 80); // Draw fire symbol at (200, 300) with size 80
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
<<<<<<< HEAD
DXunan
=======
//hello yooo
=======


>>>>>>> e0a04e53d3aa975030dd463d79169db2b76888bc
>>>>>>> Stashed changes
