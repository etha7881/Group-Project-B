<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Largest Colorado Wildfires Atlas</title>
    <style>
        /* Reset default margin and padding for the page */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            height: 100%; /* Ensure the body takes up the full height */
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
            overflow: hidden; /* Prevent scrolling */
        }

        /* Homepage styles */
        #homepage {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh; /* Full height of the viewport */
            width: 100vw; /* Full width of the viewport */
            text-align: center;
            position: absolute;
            z-index: 10;
            background-color: white; /* White background for homepage */
            padding: 20px; /* Optional: Adds padding to the content */
        }

        .title {
            font-size: 48px;
            color: #3498db;
            margin-bottom: 40px;
        }

        /* Container for buttons */
        .button-container {
            display: flex;
            justify-content: space-evenly; /* Align buttons to the left and right */
            width: 80%; /* Take up most of the available space */
        }

        .btn {
            padding: 20px 30px;
            font-size: 24px;
            background-color: #2ecc71;
            color: white;
            border: none;
            border-radius: 16px;
            cursor: pointer;
            width: 45%; /* Buttons take up equal width */
        }

        .btn:hover {
            background-color: #27ae60;
        }

        #mapCanvas {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>

    <!-- Homepage content -->
    <div id="homepage">
        <div class="title">Largest Colorado Wildfires Atlas</div>
        <!-- Button container with two buttons -->
        <div class="button-container">
            <button class="btn" onclick="showMap()">Satellite Map</button>
            <button class="btn" onclick="showMap()">Standard Map</button>
        </div>
    </div>

    <!-- Map canvas hidden initially -->
    <div id="mapCanvas">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
        <script>
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

            let fireInfo = [
                "Info about Fire 1",
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
                "Info about Fire 21"
            ];

            let infoVisible = false;
            let infoText = '';
            let zoomLevel = 1;
            let zoomIncrement = 0.1;
            let maxZoomLevel = 2;

            function preload() {
                mapcolor = loadImage('Map Colored.png');
				satalitemap=loadImage('Satalite map.png')
            }

            function setup() {
                createCanvas(1920, 1080);  // Ensure the canvas fills the window
                mapColor();
                drawAllFires();
                createZoomButtons();
            }

            function createZoomButtons() {
				
                let zoomInButton = createButton('+');
                zoomInButton.position(20, 20);
                zoomInButton.mousePressed(zoomIn);

                let zoomOutButton = createButton('-');
                zoomOutButton.position(22, 45);
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

            function drawAllFires() {
                for (let i = 0; i < firePositions.length; i++) {
                    let fire = firePositions[i];
                    drawFire(fire.x, fire.y, fire.size, i);
                }
            }

            function handleClick(index) {
                infoText = fireInfo[index];
                infoVisible = true;
            }

            function draw() {
                mapColor();
                drawAllFires();

                if (infoVisible) {
                    fill(205, 200, 255, 240);
                    rect(1450, 100, 460, 850, 10);
                    fill(0);
                    textSize(24);
                    textAlign(LEFT, TOP);
                    text(infoText, 1455, 150);
                    textSize(16);
                    text("Click anywhere to close", 1450, 820);
                }
            }

            function mousePressed() {
                if (infoVisible) {
                    infoVisible = false;
                }
            }

            // Show the map after homepage button is clicked
            function showMap() {
                document.getElementById('homepage').style.display = 'none';
                document.getElementById('mapCanvas').style.display = 'block';
            }
        </script>
    </div>
</body>
</html>

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
=======

function zoomOut() {
    if (zoomLevel > 1) { // Prevent zooming out below the original size
        zoomLevel -= zoomIncrement; // Decrease zoom level
    }
}

function mapColor() {
    push(); // Save the current drawing style settings
    scale(zoomLevel); // Apply scaling for zoom
    image(mapcolor, 0, 0);
    pop(); // Restore the previous drawing style settings
}

function drawFire(x, y, baseSize, index) {
    // Adjust position according to zoom level
    let adjustedX = x * zoomLevel;
    let adjustedY = y * zoomLevel;
    let adjustedSize = baseSize / zoomLevel; // Shrink size proportionally

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

    // Check for mouse hover
    let isHovered = mouseX > adjustedX - adjustedSize && mouseX < adjustedX + adjustedSize && mouseY > adjustedY - adjustedSize && mouseY < adjustedY;

    // Highlight color on hover
    noStroke();
    if (isHovered) {
        fill(255, 255, 0, 150); 
        beginShape();
        vertex(adjustedX, adjustedY);
        bezierVertex(adjustedX - adjustedSize, adjustedY - adjustedSize, adjustedX - adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX, adjustedY - adjustedSize * 1.8);
        bezierVertex(adjustedX + adjustedSize * 0.3, adjustedY - adjustedSize * 1.5, adjustedX + adjustedSize, adjustedY - adjustedSize, adjustedX, adjustedY);
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
    infoText = fireInfo[index];
    infoVisible = true; // Show the info sheet
}

function draw() {
    // Redraw the map and fires to keep the visuals persistent
    mapColor();
    drawAllFires();

    // Draw info sheet if visible
    if (infoVisible) {
        fill(205, 200, 255, 200); // Semi-transparent background
        rect(1450, 150, 460, 700, 10); // Info box
        fill(0);
        textSize(24);
        textAlign(LEFT, TOP);
        text(infoText, 1455, 150);
        textSize(16);
        text("Click anywhere to close", 1450, 820);
    }
}

// Close the info sheet when clicked anywhere
function mousePressed() {
    if (infoVisible) {
        infoVisible = false;
    }
}
>>>>>>> 5048f380c0475647d7245cc5e190b1d3f50ba4c1
//hi