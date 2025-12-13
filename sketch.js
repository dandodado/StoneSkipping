let waters = [];
let paticle;
let w = 20; 
function setup() {
  createCanvas(1400, 400);
  for (let y = height/2; y < height; y += w*1.2) {
    for (let x = 0; x < width-20; x += w*1.2) {
      waters.push(new Water(x, y, w));
    }
  }
paticle = new Paticle();
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
    if (water.pos.y < height - water.w) {
    g = createVector(0, 0.1);
    }else{
      g = createVector(0,0.1);
    }
    water.applyForce(g);
    water.update();
    water.checkEdges();
   let force = paticle.getForce(water);
   paticle.applyForce(force);
   let force2 = paticle.getForce2(water);
   water.applyForce(force2);
   let returnForce = water.calculateReturnForce(0.01);
    water.applyForce(returnForce);
    }     

    
  paticle.show();
  paticle.update();
  p = createVector(0, 0.8);
  paticle.applyForce(p);
  paticle.update();
  paticle.checkEdges();

}
