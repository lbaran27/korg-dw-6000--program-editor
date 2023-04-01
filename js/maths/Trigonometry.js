let Trigonometry = function (point) {
    this.point = point;
};

Trigonometry.prototype.getModule = function () {
    return Math.sqrt(Math.pow(this.point.x, 2) + Math.pow(this.point.y, 2));
};

Trigonometry.prototype.getArgument = function () {
    let module = this.getModule();
    if (module === 0) {
        return 0;
    }
    let argument = Math.acos(this.point.x / module);
    if (Math.asin(this.point.y / module) < 0) {
        argument = -argument;
    }
    return argument;
}

Trigonometry.realArgument = function (argument) {
    argument = argument % (2 * Math.PI);
    if (argument > Math.PI)
        argument -= Math.PI;
    return argument;
};