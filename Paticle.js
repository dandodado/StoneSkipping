class Paticle {
constructor() {
this.pos = createVector(10,50);
this.vel = createVector(5,0);
this.acc = createVector(0,0);
this.w = 60;
this.mass = 30;

}

show() {
  fill(150,75,0);
ellipse(this.pos.x, this.pos.y, this.w , this.w);
}
update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

}
applyForce(force) {
    this.acc.add(force);
}
getForce(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*2;
  force.mult(strength);
    return force;
  }
}
getForce2(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.2;
  force.mult(-strength);
    return force;
  }
  }
  getForce(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.7;
  force.mult(strength);
    return force;
  }
}
getForce3(m) {
   let force = p5.Vector.sub(this.pos, m.pos);
  let distance = force.mag();

  let minDist = this.w;   

  if (distance < minDist) {
    let strength = this.mass / (distance * distance)*0.3;
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
    if (this.pos.y > height - this.w/2) {
        this.vel.y *= -0.5;
        this.pos.y = height - this.w/2;
    }
    if (this.pos.x > width - this.w/2) {
        this.pos.x = 0 + this.w/2;
    }
  }







}