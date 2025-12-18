let waters = [];
let airs = [];
let paticle;
let w = 20; 
let m = 40;
let speed = 10;
function setup() {
  createCanvas(1400, 400);
  for (let y = height/2+20; y < height; y += w*1.2) {
    for (let x = 0; x < width-20; x += w*1.2) {
      waters.push(new Water(x, y, w));
    }
  }
  for (let y = 0; y < height/2-20; y += m*1.6) {
    for (let x = 0; x < width-20; x += m*1.2) {
      airs.push(new Air(x, y, m/3));
    }
  }
paticle = new Paticle(speed);
slider = createSlider(1, 10 , 10, 1);
slider.position(800, 500);
slider.style('width', '300px');
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
  for (let i = 0; i < airs.length; i++) {
    for (let j = 0; j < airs.length; j++) {
      if (i !== j) {
        airs[i].repel(airs[j]);
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
    for (let air of airs) {
      air.show();
      air.update();
      air.checkEdges();
     let force3 = paticle.getForce3(air);
       paticle.applyForce(force3);
     let force4 = paticle.getForce4(air);
     air.applyForce(force4);
     let returnForce = air.calculateReturnForce(0.01);
      air.applyForce(returnForce);
    }

    
  paticle.show();
  paticle.update();
  p = createVector(0, 0.8);
  paticle.applyForce(p);
  paticle.update();
  let speed = slider.value();
 

}
function keyPressed() {
  if (key === ' ') {  
  paticle.checkEdges(speed);
  }
}