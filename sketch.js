let mapcolor;
let firePositions = [
    { x: 90, y: 255, size: 40 },
    { x: 145, y: 460, size: 40 },
    { x: 118, y: 680, size: 40 },
    { x: 155, y: 879, size: 40 },
    { x: 283, y: 925, size: 40 },
    { x: 770, y: 920, size: 40 },
    { x: 665, y: 720, size: 40 },
    { x: 788, y: 750, size: 40 },
    { x: 896, y: 650, size: 40 },
    { x: 657, y: 140, size: 40 },
    { x: 588, y: 240, size: 40 },
    { x: 505, y: 235, size: 40 },
    { x: 388, y: 405, size: 40 },
    { x: 278, y: 100, size: 40 },
    { x: 235, y: 120, size: 40 },
    { x: 479, y: 130, size: 40 },
    { x: 520, y: 55, size: 40 },
    { x: 485, y: 50, size: 40 },
    { x: 1243, y: 94, size: 40 },
    { x: 1350, y: 935, size: 40 },
    { x: 1200, y: 50, size: 40 }
];

function preload() {
    mapcolor = loadImage('Map Colored.png');
}

function setup() {
    createCanvas(1920, 1080);
    mapColor();
    drawAllFires();
}

function mapColor() {
    image(mapcolor, 0, 0);
}

function drawFire(x, y, size, index) {
 
    // Draw the fire
    fill(255, 69, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size, y - size, x - size * 0.3, y - size * 1.5, x, y - size * 1.8);
    bezierVertex(x + size * 0.3, y - size * 1.5, x + size, y - size, x, y);
    endShape(CLOSE);
    
    fill(255, 140, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size * 0.6, y - size * 0.6, x - size * 0.2, y - size * 1.2, x, y - size * 1.4);
    bezierVertex(x + size * 0.2, y - size * 1.2, x + size * 0.6, y - size * 0.6, x, y);
    endShape(CLOSE);
    
    fill(255, 215, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size * 0.3, y - size * 0.3, x, y - size * 0.8, x, y - size);
    bezierVertex(x, y - size * 0.8, x + size * 0.3, y - size * 0.3, x, y);
    endShape(CLOSE);

	   // Check for mouse hover
	   let isHovered = mouseX > x - size && mouseX < x + size && mouseY > y - size && mouseY < y;

	   // Highlight color on hover
	   noStroke();
	   if (isHovered) {
		   fill(255, 255, 0, 150); 
		   beginShape();
	   vertex(x, y);
	   bezierVertex(x - size, y - size, x - size * 0.3, y - size * 1.5, x, y - size * 1.8);
	   bezierVertex(x + size * 0.3, y - size * 1.5, x + size, y - size, x, y);
	   endShape(CLOSE); // Draw highlight
	   }

    // Handle click
    if (isHovered && mouseIsPressed) {
        handleClick(index);
    }
}

function drawAllFires() {
    for (let i = 0; i < firePositions.length; i++) {
        let fire = firePositions[i];
        drawFire(fire.x, fire.y, fire.size, i);
    }
}

function handleClick(index) {
    console.log(`Button Fire${index + 1} clicked!`);
}

function draw() {
    // Redraw the map and fires to keep the visuals persistent
    mapColor();
    drawAllFires();
}