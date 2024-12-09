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
			let fireTitle = [
                "PLATEAU Fire",
                "SILVER CREEK Fire",
                "DEAD DOG Fire",
                "BADGER HOLE Fire",
                "PINE GULTCH Fire",
                "GRIZZLY CREEK Fire",
                "MIDDLE FORK Fire",
                "MM 117",
                "BEAVER CREEK Fire",
                "HAYDEN PASS Fire",
                "SPRING CREEK Fire",
                "416 AND BURRO COMPLEX Fire",
                "RYAN Fire",
                "EAST TROUBLESOME Fire",
                "BULL DRAW Fire",
                "JUNKINS",
                "CAMERON PEAK FIRE",
                "DIVIDE Fire",
                "LOGAN Fire",
                "ALKALI Fire",
                
            ];
            let fireInfo = [
                "Containment Date/Time: 2018-09-06 23:00:00 Control Date/Time: 2018-10-09 14:00:00 Incident Size: 19,634 acres Estimated Cost To Date: 3,801,000 Fire Behavior General: Minimal Fire Cause: Natural Fire Discovery Date/Time: 2018-07-22 21:18:00 Fire Out Date/Time: 2018-10-17 16:00:00 Primary Fuel Model: Timber (Litter and Understory) Secondary Fuel Model: Timber (Grass and Understory)",
                "Details: Increased fire activity was reported over two days, with the fire remaining entirely within the Sarvis Creek Wilderness   Containment Date/Time: 2018-10-24 19:30:00   Control Date/Time: 2018-11-06 15:30:00   Incident Size: 20,120 acres   Estimated Cost To Date: $28,120,000   Fire Behavior General: Minimal   Fire Cause: Natural   Fire Discovery Date/Time: 2018-07-19 20:33:00   Fire Out Date/Time: 2018-12-13 19:30:00   Primary Fuel Model: Timber (Litter and Understory)   Secondary Fuel Model: Brush (2 feet)",
                "Details: This fire, which burned nearly 18,000 acres near Rangely, was determined to be human-caused   Containment Date/Time: 2017-06-19 02:00:00   Control Date/Time: 2017-07-16 17:00:00   Incident Size: 18,804 acres   Estimated Cost To Date: $0   Fire Behavior General: Minimal   Fire Cause: Human   Fire Discovery Date/Time: 2017-06-11 20:48:00   Fire Out Date/Time: 2017-07-26 16:00:00   Primary Fuel Model: Brush (2 feet)   Secondary Fuel Model: Chaparral (6 feet)",
                "Details: Originating in Baca County, this fire burned approximately 50,858 acres across Colorado and Kansas, with multiple homes, outbuildings, livestock, and infrastructure losses reported Containment Date/Time: N/A Control Date/Time: N/A Incident Size: 50,671 acres Estimated Cost To Date: 106,036 Fire Behavior General: Extreme Fire Cause: Human Fire Discovery Date/Time: 2018-04-18 02:49:00 Fire Out Date/Time: 2018-04-21 00:00:00 Primary Fuel Model: Short Grass (1 foot) Secondary Fuel Model: Tall Grass (2.5 feet)",
,
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

            let infoVisible = false;
            let infoText = '';
            let zoomLevel = 1;
            let zoomIncrement = 0.1;
            let maxZoomLevel = 2;

            function preload() {
    mapcolor = loadImage('Map Colored.png');
    satalitemap=loadImage('Satalite map.png')
    i1=loadImage('1.png')
    i2=loadImage('2.png')
    i3=loadImage('3.png')
    i4=loadImage('4.png')
    i5=loadImage('5.png')
    i6=loadImage('6.png')
    i7=loadImage('7.png')
    i8=loadImage('8.png')
    i9=loadImage('9.png')
    i10=loadImage('10.png')
    i11=loadImage('11.png')
    i12=loadImage('12.png')
    i13=loadImage('13.png')
    i14=loadImage('14.png')
    i15=loadImage('15.png')
    i16=loadImage('16.png')
    i17=loadImage('17.png')
    i18=loadImage('18.png')
    i19=loadImage('19.png')
    i20=loadImage('20.png')
}

            function setup() {
                createCanvas(windowWidth, windowHeight);  // Ensure the canvas fills the window
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
                infoTitle = fireTitle[index];
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
    text(infoTitle, 1455, 100);
    textSize(16);
    text(infoText, 1455, 130, 330);
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