/*
    Paste the code for your week 4 exercise below.
*/


function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

background (255)
//Inner Letter O
beginShape();
vertex(0, 35);
vertex(35, 0);
vertex(0, -35);
vertex(-35, 0);
vertex(0,35)
endShape();
//Outer Letter O
beginShape();
vertex(0, 70);
vertex(70, 0);
vertex(0, -70);
vertex(-70, 0);
vertex(0,70)
endShape();
//Letter D
beginShape();
vertex(0, 70);
vertex(30, 70);
vertex(100, 0);
vertex(30, -70)
vertex(0, -70)
endShape()
//Letter E
beginShape();
vertex(0, -70)
vertex(120, -70)
vertex(150, -45)
vertex(100, -45)
vertex(100, -15)
vertex(150, -15)
vertex(150, 15)
vertex(100, 15)
vertex(100, 45)
vertex(150, 45)
vertex(120, 70)
vertex(0, 70)
endShape()
}
