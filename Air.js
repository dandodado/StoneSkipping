class Air extends Water {
    constructor(x, y, w) {
        super(x, y, w);
this.pos = createVector( x, y);
this.origin = createVector(x, y);
this.vel = createVector(0,0);
this.acc = createVector(0,0);
this.w = w;



}
show () {
    fill(200, 200, 255);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
}
update() {
this.vel.add(this.acc);
    this.pos.add(this.vel);
     this.vel.limit(20);
    this.acc.mult(0);

}
}