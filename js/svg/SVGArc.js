let SVGArc = function (center, radius, t1, t2) {
    this.center = center;
    this.radius = radius;
    this.t1 = t1;
    this.t2 = t2;

    this.p1 = {
        "x": center.x + radius.x * Math.cos(t1),
        "y": center.y + radius.y * Math.sin(t1),
    };

    this.p2 = {
        "x": center.x + radius.x * Math.cos(t2),
        "y": center.y + radius.y * Math.sin(t2),
    };

    this.r = (this.t2 - this.t1) > Math.PI ? 1 : 0;
    this.d = "M" + this.p1.x + " " + this.p1.y + " A" + this.radius.x + " " + this.radius.y + " 0 " + this.r + " 1 " + this.p2.x + " " + this.p2.y;
};