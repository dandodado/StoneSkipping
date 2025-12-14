class Air extends Water {
    constructor(x, y, w) {
        super(x, y, w);
this.pos = createVector( x, y);
this.origin = createVector(x, y);
this.vel = createVector(0,0);
this.acc = createVector(0,0);
this.w = w;



}
}