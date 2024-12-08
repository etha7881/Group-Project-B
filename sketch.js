let mapcolor;
let StandardButton, SataliteButton;


let fire1 = { x: 90, y: 255, size: 40 };
let fire2 = { x: 145, y: 460, size: 40 };
let fire3 = { x: 118, y: 680, size: 40 };
let fire4 = { x: 155, y: 879, size: 40 };
let fire5 = { x: 283, y: 925, size: 40 };
let fire6 = { x: 770, y: 920, size: 40 };
let fire7 = { x: 665, y: 720, size: 40 };
let fire8 = { x: 788, y: 750, size: 40 };
let fire9 = { x: 896, y: 650, size: 40 };
let fire10 = { x: 657, y: 140, size: 40 };
let fire11 = { x: 588, y: 240, size: 40 };
let fire12 = { x: 505, y: 235, size: 40 };
let fire13 = { x: 388, y: 405, size: 40 };
let fire14 = { x: 278, y: 100, size: 40 };
let fire15 = { x: 235, y: 120, size: 40 };
let fire16 = { x: 479, y: 130, size: 40 };
let fire17 = { x: 520, y: 55, size: 40 };
let fire18 = { x: 485, y: 50, size: 40 };
let fire19 = { x: 1243, y: 94, size: 40 };
let fire20 = { x: 1350, y: 935, size: 40 };
let fire21 = { x: 1200, y: 50, size: 40 };

function preload() {
    mapcolor = loadImage('Map Colored.png')
}

function setup() {
    createCanvas(1920, 1080);
    mapColor();
    drawAllFires();
    createButtons();
}

function mapColor() {
    image(mapcolor, 0, 0);
}

function drawFire(x, y, size) {
    noStroke();

    // Outer flame
    fill(255, 69, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size, y - size, x - size * 0.3, y - size * 1.5, x, y - size * 1.8);
    bezierVertex(x + size * 0.3, y - size * 1.5, x + size, y - size, x, y);
    endShape(CLOSE);

    // Inner flame
    fill(255, 140, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size * 0.6, y - size * 0.6, x - size * 0.2, y - size * 1.2, x, y - size * 1.4);
    bezierVertex(x + size * 0.2, y - size * 1.2, x + size * 0.6, y - size * 0.6, x, y);
    endShape(CLOSE);

    // Core flame
    fill(255, 215, 0);
    beginShape();
    vertex(x, y);
    bezierVertex(x - size * 0.3, y - size * 0.3, x, y - size * 0.8, x, y - size);
    bezierVertex(x, y - size * 0.8, x + size * 0.3, y - size * 0.3, x, y);
    endShape(CLOSE);
}

function drawAllFires() {
    
    drawFire(fire1.x, fire1.y, fire1.size);
    drawFire(fire2.x, fire2.y, fire2.size);
    drawFire(fire3.x, fire3.y, fire3.size);
    drawFire(fire4.x, fire4.y, fire4.size);
    drawFire(fire5.x, fire5.y, fire5.size);
    drawFire(fire6.x, fire6.y, fire6.size);
    drawFire(fire7.x, fire7.y, fire7.size);
    drawFire(fire8.x, fire8.y, fire8.size);
    drawFire(fire9.x, fire9.y, fire9.size);
    drawFire(fire10.x, fire10.y, fire10.size);
    drawFire(fire11.x, fire11.y, fire11.size);
    drawFire(fire12.x, fire12.y, fire12.size);
    drawFire(fire13.x, fire13.y, fire13.size);
    drawFire(fire14.x, fire14.y, fire14.size);
    drawFire(fire15.x, fire15.y, fire15.size);
    drawFire(fire16.x, fire16.y, fire16.size);
    drawFire(fire17.x, fire17.y, fire17.size);
    drawFire(fire18.x, fire18.y, fire18.size);
    drawFire(fire19.x, fire19.y, fire19.size);
    drawFire(fire20.x, fire20.y, fire20.size);
    drawFire(fire21.x, fire21.y, fire21.size);
}

function createButtons() {
    const buttonWidth = 100;
    const buttonHeight = 35;

    StandardButton = createButton('Standard');
    StandardButton.size(buttonWidth, buttonHeight);
    StandardButton.position(5, height - 50);

    SataliteButton = createButton('Satalite');
    SataliteButton.size(buttonWidth, buttonHeight);
    SataliteButton.position(110, height - 50);
}

function Click1 (){
	if(mouseX>fire1.x && mouseX < fire1.y + fire1.size && mouseY > fire1.y && mouseY < fire1.y + fire1.size && mouseIsPressed){
	Text('yo',1800,50)
	
	}
}