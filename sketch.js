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
	
//hello yooo
=======


