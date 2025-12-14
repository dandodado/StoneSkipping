class Paticle {
constructor() {
this.pos = createVector(10,50);
this.vel = createVector(10,0);
this.acc = createVector(0,0);
this.limit = createVector(2,0);
this.w = 60;
this.mass = 30;
this.f = 0;

}

show() {
  if(this.f == 0){
    
  }else{
  fill(150,75,0);
ellipse(this.pos.x, this.pos.y, this.w , this.w-30);
  }
}
update() {
    this.vel.add(this.acc);
    this.vel.limit(10);
    this.pos.add(this.vel);
    this.acc.mult(0);

}
applyForce(force) {
    this.acc.add(force);
}
getForce(m) {
  let speed = this.vel.mag();
  let speedlimit = this.limit.mag();

  if (speed < speedlimit) {
    return createVector(0, 0);
  }
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.8;
  force.mult(strength);
    return force; 
   
    
 }
  if(this.pos.y > height/2-10){
     let damping = 0.98;
    this.vel.mult(damping);
}
}
getForce2(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.7;
  force.mult(-strength);
    return force;
  }
  }
 

getForce3(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.2;
  force.mult(-strength);
    return force;
  }
  }
getForce4(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*1;
  force.mult(-strength);
    return force;
  }
  }
checkEdges() {
    if (this.pos.y > height +100) {
       this.pos = createVector(10,50);
this.vel = createVector(10,0);
this.acc = createVector(0,0);
this.w = 60;
this.mass = 30;
this.f = 1;
    }
    if (this.pos.x > width - this.w/2) {
        this.pos.x = 0 + this.w/2;
    }
  }







}