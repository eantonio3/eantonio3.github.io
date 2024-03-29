function setup() {
    createCanvas(912, 400);
    background(10);
    strokeWeight(10);
    stroke(0);
}

function draw() {
    stroke(255);
    if (mouseIsPressed === true) {
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
}
  