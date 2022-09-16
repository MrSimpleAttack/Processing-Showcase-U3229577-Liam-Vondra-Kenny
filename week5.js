function setup() {
    createCanvas(550, 300);
      frameRate(2);
  }
  
  function draw() {
    background(225);
      
      if(frameCount%2 == 0) {
          textSize(72);
  text('Hello World', 10, 100);
          }
      else {
          textSize(72);
  text('Goodbye World', 10, 200);
          }
  }