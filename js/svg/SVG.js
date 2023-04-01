let SVG = function (element) {

    if ((typeof element === 'object') && (element instanceof SVGSVGElement)) {
        this.element = element;
        return;
    }

    let namespace_uri = "http://www.w3.org/2000/svg";
    this.element = document.createElementNS(namespace_uri, "svg");
    this.element.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    this.element.setAttribute("version", "1.1");

    if ((typeof element === 'object') && (element instanceof Object)) {
        if (element.viewBox) {
            this.element.setAttribute("viewBox", "0 0 " + element.width + " " + element.height);
            this.element.setAttribute("width", "100%");
            this.element.setAttribute("height", "100%");
        } else {
            this.element.setAttribute("width", element.width);
            this.element.setAttribute("height", element.height);
        }
    }
};

SVG.prototype.createElement = function (tag, attributes) {
    let element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    return this.addElementAttributes(element, attributes);
};

SVG.prototype.addElementAttributes = function (element, attributes) {
    for (a in attributes)
        element.setAttributeNS(null, a, attributes[a] + "");
    return element;
};

SVG.prototype.addElement = function (element) {
    this.element.appendChild(element);
};
SVG.prototype.createPath = function (data, attributes) {
    let arc = this.createElement("path", {"d": data});
    return this.addElementAttributes(arc, attributes);
}

SVG.prototype.createArc = function (arc, attributes) {
    return this.createPath(arc.d, attributes);
}
SVG.prototype.createText = function (x, y, value, attributes) {
    let text = this.createElement("text", {"x": x, "y": y});
    text.innerHTML = value;
    return this.addElementAttributes(text, attributes);
};