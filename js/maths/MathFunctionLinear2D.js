let MathFunctionLinear2D = function (p1, p2) {
    this.a = (p1.x !== p2.x) ? (p2.y - p1.y) / (p2.x - p1.x) : 0;
    this.b = ((p1.y - this.a * p1.x) + (p2.y - this.a * p2.x)) / 2;
};

MathFunctionLinear2D.prototype.y = function (x) {
    return this.a * x + this.b;
};

MathFunctionLinear2D.prototype.x = function (y) {
    return (y - this.b) / this.a;
};