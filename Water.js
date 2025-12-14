class Water {
 constructor(x, y, w) {
this.pos = createVector( x, y);
this.origin = createVector(x, y);
this.vel = createVector(0,0);
this.acc = createVector(0,0);
this.w = w;

}
show () {
noStroke();
fill(0, 0, 200);
ellipse(this.pos.x, this.pos.y, this.w, this.w);
rectMode (CENTER);
//quad(0 ,height/2-15, width, height/2-15, width, height, 0 , height);

}
applyForce (force) {
    this.acc.add(force);
}
update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
}
checkEdges() {
    if (this.pos.y > height/2 - this.w/2) {
        this.vel.y *= -0.5;
       // this.pos.y = height + this.w/2;
    }
     if (this.pos.x > width - this.w/2) {
        this.vel.x *= -0.5;
        this.pos.x = width - this.w/2;
    }
    if (this.pos.x < 0 + this.w/2) {
        this.vel.x *= -0.5;
        this.pos.x = 0 + this.w/2;
    }
    
}
repel(other) {
  let dir = p5.Vector.sub(this.pos, other.pos);
  let d = dir.mag();

  let minDist = this.w*2;

  if (d > 0 && d < minDist) {
    dir.normalize();

    let strength = (minDist - d) * 0.06;
    dir.mult(strength);

    this.applyForce(dir);
  }
}

calculateReturnForce(k) {
  let force = p5.Vector.sub(this.origin, this.pos);
  force.mult(k);
  return force;
}


}