let sketch = function (p) {
    let rows = 35;
    let radius = 200;
    let minLength = 1;
    let maxLength = 122;
    let space = 'SQUARE';
    let outerStrokeWeight = 14;
    let innerStrokeWeight = 14;
    let randomSeed = 1230;
    let stripes = [];
  
    p.setup = function () {
      generatePattern();
    };
  
    function generatePattern() {
      p.randomSeed(randomSeed);
      console.log(randomSeed);
      p.createCanvas(400, 400); // Set canvas size to 400x400 for simplicity
      p.stroke(0);
      p.strokeWeight(5);
      p.noLoop();
  
      let enhancedRows = rows + 2;
      for (var i = 0; i < enhancedRows; i++) {
        let yPos = (i / (enhancedRows - 1)) * (radius * 2) - radius;
        let rowLength = 2 * p.sqrt(radius * radius - yPos * yPos);
        drawRow(yPos, rowLength);
      }
  
      p.randomSeed(randomSeed);
    }
  



p.draw = function () {
    p.background('#fff');
    p.translate(p.width / 2, p.height / 2);
    p.scale((1.3 * p.width) / 1500);
    p.strokeCap(p[space]);
    let angleDegrees = 0;
    p.rotate((angleDegrees * p.PI) / 180);
  
    for (let s = 0; s < stripes.length; s++) {
      let stripe = stripes[s];
      p.randomSeed(randomSeed); // Reset the random seed for each stripe
      let randomColor = p.color(
        p.random(255),
        p.random(255),
        p.random(255)
      );
      console.log(randomColor.levels);
      p.strokeWeight(outerStrokeWeight);
      p.stroke(randomColor);
      p.line(stripe.start, stripe.y, stripe.end, stripe.y);
      p.strokeWeight(innerStrokeWeight);
      p.stroke(randomColor);
      p.line(stripe.start, stripe.y, stripe.end, stripe.y);
    }
  };

  

    function drawRow(yPos, rowLength) {
      let length = p.random(minLength, maxLength);
      let start = -0.5 * rowLength;
      let end = start + length;
      while (end < rowLength / 2 - space - minLength) {
        stripes.push({ y: yPos, start: start, end: end });
        length = p.random(minLength, maxLength);
        start = end + space;
        end = start + length;
      }
      stripes.push({ y: yPos, start: start, end: rowLength / 2 });
    }
  
    p.keyPressed = function () {
      if (p.keyCode === 83) {
        // Initialize the list of indices
        savingIndices = [0, 1, 2, 3, 4]; // For the resolutions
        saveNextResolution();
      }
    };
  
    function saveNextResolution() {
      if (savingIndices.length === 0) return; // No more indices left
  
      let i = savingIndices.shift(); // Get the next index
      let resolutions = [
        { name: '5x5', width: 1500, height: 1500 },
        { name: '8x8', width: 2400, height: 2400 },
        { name: '11x11', width: 3300, height: 3300 },
        { name: '16x16', width: 4800, height: 4800 },
        { name: '10x10', width: 3000, height: 3000 },
      ];
      let selectedResolution = resolutions[i];
      p.createCanvas(selectedResolution.width, selectedResolution.height);
      generatePattern(selectedResolution.width, selectedResolution.height);
      p.draw();
      p.saveCanvas(selectedResolution.name, 'jpg');
  
      // Wait for a delay, then continue saving the next resolution
      setTimeout(saveNextResolution, 500); // 500ms delay for example
    }
  };
  
  new p5(sketch);
  