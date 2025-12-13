let waters = [];
let w = 20; 
function setup() {
  createCanvas(1300, 400);
  for (let y = height/2; y < height; y += w*1.2) {
    for (let x = 0; x < width; x += w*1.2) {
      waters.push(new Water(x, y, w));
    }
  }
}

function draw() {
  background(220);
  for (let i = 0; i < waters.length; i++) {
    for (let j = 0; j < waters.length; j++) {
      if (i !== j) {
        waters[i].repel(waters[j]);
      }
    }
  }
  for (let water of waters) {
    water.show();
    g = createVector(0, 0.1);
    water.applyForce(g);
    water.update();
    water.checkEdges();
  }
}
