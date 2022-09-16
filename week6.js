function 
setup() {
  createCanvas(500 , 500);
  frameRate(60);
}

function draw() { 
  background(255);
  fill(0)
  
  if (mouseIsPressed == true) {
  strokeWeight(25);
  stroke(255, 0, 255)
  line(mouseX, mouseY, 250, pmouseX, pmouseY, 250);
  print(pmouseX + ' -> ' + mouseX);
  }
}


