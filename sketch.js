let mapcolor;
let mapX = 0, mapY = 0;
//array of fire positions as objects
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
    
];
//Array of fire titles
let fireTitle = [
    "PLATEAU FIRE",
    "SILVER CREEK FIRE",
    "DEAD DOG FIRE",
    "BADGER HOLE FIRE",
    "PINE GULTCH FIRE",
    "GRIZZLY CREEK FIRE",
    "MIDDLE FORK FIRE",
    "MM 117 FIRE",
    "BEAVER CREEK FIRE",
    "HAYDEN PASS FIRE",
    "SPRING CREEK FIRE",
    "416 AND BURRO COMPLEX FIRE",
    "RYAN FIRE",
    "EAST TROUBLESOME FIRE",
    "BULL DRAW FIRE",
    "JUNKINS FIRE",
    "CAMERON PEAK FIRE",
    "DIVIDE FIRE",
    "LOGAN FIRE",
    "ALKALI FIRE",
    
];
//Unused array for Fire Info, ended up calling images instead 
let fireInfo = [
    "Info about Fire 2",
    "Info about Fire 2",
    "Info about Fire 3",
    "Info about Fire 4",            
    "Info about Fire 5",
    "Info about Fire 6",
    "Info about Fire 7",
    "Info about Fire 8",
    "Info about Fire 9",
    "Info about Fire 10",
    "Info about Fire 11",
    "Info about Fire 12",
    "Info about Fire 13",
    "Info about Fire 14",
    "Info about Fire 15",
    "Info about Fire 16",
    "Info about Fire 17",
    "Info about Fire 18",
    "Info about Fire 19",
    "Info about Fire 20",
    
];

fireImg=[]
let infoVisible = false;
let infoText = '';
let zoomLevel = 1;
let zoomIncrement = 0.1;
let maxZoomLevel = 2;
fireImg = []

function preload() {
mapcolor = loadImage('Map Colored.png');
satalitemap=loadImage('Satellite map.png')
//loads images into an array using a for loop
for (let i = 1; i <= 20; i++) {
fireImg.push(loadImage(`${i}.png`));
//Below is fire info call individually
// i1=loadImage('1.png')
// i2=loadImage('2.png')
// i3=loadImage('3.png')
// i4=loadImage('4.png')
// i5=loadImage('5.png')
// i6=loadImage('6.png')
// i7=loadImage('7.png')
// i8=loadImage('8.png')
// i9=loadImage('9.png')
// i10=loadImage('10.png')
// i11=loadImage('11.png')
// i12=loadImage('12.png')
// i13=loadImage('13.png')
// i14=loadImage('14.png')
// i15=loadImage('15.png')
// i16=loadImage('16.png')
// i17=loadImage('17.png')
// i18=loadImage('18.png')
// i19=loadImage('19.png')
// i20=loadImage('20.png')

}}

function setup() {
    createCanvas(1920, 1080); 
    mapColor();
    drawAllFires();
    createZoomButtons();
    
    
}

function createZoomButtons() {
const buttonWidth = 50;
const buttonHeight = 50;

    let zoomInButton = createButton('+');
    zoomInButton.position(160, 1070);
    zoomInButton.size(buttonWidth, buttonHeight);
    zoomInButton.mousePressed(zoomIn);

    let zoomOutButton = createButton('-');
    zoomOutButton.position(160, 1120);
    zoomOutButton.size(buttonWidth, buttonHeight);
    zoomOutButton.mousePressed(zoomOut);
}

function zoomIn() {
    if (zoomLevel < maxZoomLevel) {
        zoomLevel += zoomIncrement;
    }
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel -= zoomIncrement;
    }
}

function mapColor() {
    push();
    scale(zoomLevel);
    image(mapcolor, 0, 0);
    pop();
}

function drawFire(x, y, baseSize, index) {
    let adjustedX = x * zoomLevel;
    let adjustedY = y * zoomLevel;
    let adjustedSize = baseSize / zoomLevel;

    fill(255, 69, 0);
    beginShape();
    vertex(adjustedX, adjustedY);
    bezierVertex(adjustedX - adjustedSize, adjustedY - adjustedSize, adjustedX - adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX, adjustedY - adjustedSize * 1.8);
    bezierVertex(adjustedX + adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX + adjustedSize, adjustedY - adjustedSize, adjustedX, adjustedY);
    endShape(CLOSE);

    fill(255, 140, 0);
    beginShape();
    vertex(adjustedX, adjustedY);
    bezierVertex(adjustedX - adjustedSize * 0.6, adjustedY - adjustedSize * 0.6, adjustedX - adjustedSize * 0.2, adjustedY - adjustedSize * 1.2, adjustedX, adjustedY - adjustedSize * 1.4);
    bezierVertex(adjustedX + adjustedSize * 0.2, adjustedY - adjustedSize * 1.2, adjustedX + adjustedSize * 0.6, adjustedY - adjustedSize * 0.6, adjustedX, adjustedY);
    endShape(CLOSE);

    fill(255, 215, 0);
    beginShape();
    vertex(adjustedX, adjustedY);
    bezierVertex(adjustedX - adjustedSize * 0.3, adjustedY - adjustedSize * 0.3, adjustedX, adjustedY - adjustedSize * 0.8, adjustedX, adjustedY - adjustedSize);
    bezierVertex(adjustedX, adjustedY - adjustedSize * 0.8, adjustedX + adjustedSize * 0.3, adjustedY - adjustedSize * 0.3, adjustedX, adjustedY);
    endShape(CLOSE);

    let isHovered = mouseX > adjustedX - adjustedSize && mouseX < adjustedX + adjustedSize && mouseY > adjustedY - adjustedSize && mouseY < adjustedY;

    noStroke();
    if (isHovered) {
        fill(255, 255, 0, 150);
        beginShape();
        vertex(adjustedX, adjustedY);
        bezierVertex(adjustedX - adjustedSize, adjustedY - adjustedSize, adjustedX - adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX, adjustedY - adjustedSize * 1.8);
        bezierVertex(adjustedX + adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX + adjustedSize, adjustedY - adjustedSize, adjustedX, adjustedY);
        endShape(CLOSE);
    }

    if (isHovered && mouseIsPressed) {
        handleClick(index);
    }
}
//array
function drawAllFires() {
    for (let i = 0; i < firePositions.length; i++) {
        let fire = firePositions[i];
        drawFire(fire.x, fire.y, fire.size, i);
    }
}

function handleClick(index) {
    infoTitle = fireTitle[index];
    infoText = fireInfo[index];
    infoImg= fireImg[index];
    infoVisible = true;
}
function theTitle(){
//Title 
fill('black');
    textSize(35);
    text("20 Largest Colorado Wildfires", 1452, 30);
}
function draw() {
    mapColor();
    drawAllFires();
    theTitle();
   
    


if (infoVisible) {

fill(205, 200, 255, 240);
rect(1450, 100, 460, 850, 10);
fill(0);
textSize(30);
textAlign(LEFT, TOP);
text(infoTitle, 1455, 100); // Display the title

textSize(16);
text(infoText, 1455, 430, 330); // Adjust to avoid overlapping the image
textSize(16);
text("Click anywhere to close", 1450, 820);
if (infoImg) {
        image(infoImg, 1455, 140, 450, 600,); // Adjust position and size
    }
}
}

function mousePressed() {
    if (infoVisible) {
        infoVisible = false;
    }
}

// Show the map after homepage button is clicked
function showMap(isSatellite) {
document.getElementById('homepage').style.display = 'none';
document.getElementById('mapCanvas').style.display = 'block';

// Boolean condition for the map type
if (isSatellite) {
console.log('Displaying Satellite Map');
// Use satellite map image
mapcolor = satalitemap;
} else {
console.log('Displaying Standard Map');
// Use standard map image
mapcolor = loadImage('Map Colored.png');
}

}
function returnToHomepage() {
document.getElementById('homepage').style.display = 'block';
document.getElementById('mapCanvas').style.display = 'none';
}
