let SVGJaugeSelect = function (width, height, select, config) {

    this.width = width;
    this.height = height;
    this.select = select;
    this.element = null;

    this.svg = new SVG({
        "width": this.width,
        "height": this.height,
        "viewbox": true,
    });

    if (typeof config === "undefined") {
        this.config = {
            "jauge": {
                "class": "value",
                "stroke": "#a0a",
                "stroke-width": 10,
                "fill": "none"
            },
            "text": {
                "font-family": "'Roboto', sans-serif",
                "font-size": "30px",
                "text-anchor": "middle",
                "alignment-baseline": "central",
                "stroke": "#0f0",
                "stroke-width": 1,
                //"fill"				: "#0f0",
                "style": "user-select:none;",
            },
            "jauge-background": {
                "class": "background",
                "stroke": "#222",
                "stroke-width": 10,
                "fill": "none"
            },
            "angles": {
                "tmin": 3 * Math.PI / 5,
                "tmax": 12 * Math.PI / 5
            }
        };
    } else {
        this.config = config;
    }

    /*
        3*PI/5
        12*PI/5
        2*PI -> 10*PI/5
        3*PI/5 -> 13*PI/5
    */
};

SVGJaugeSelect.prototype.getCenter = function () {
    return new Point(this.width / 2, this.height / 2);
};

SVGJaugeSelect.prototype.getRadius = function () {
    let center = this.getCenter();
    return new Point(
        center.x - this.config.jauge["stroke-width"],
        center.y - this.config.jauge["stroke-width"]
    );
};

SVGJaugeSelect.prototype.setValue = function (mlf, value) {

    let option = this.select.options[value];

    let y = mlf.y(value);
    let arc = new SVGArc(this.getCenter(), this.getRadius(), this.config.angles.tmin, y);

    let path = this.svg.element.querySelector("path." + this.config.jauge.class);
    if (path) path.setAttribute("d", arc.d);
    else this.svg.addElement(this.svg.createArc(arc, this.config.jauge));

    let text = this.svg.element.querySelector("text");
    if (text) {
        text.innerHTML = option.text + "";
    } else {
        this.svg.addElement(
            this.svg.createText(
                this.getCenter().x,
                this.getCenter().y,
                option.text,
                this.config.text
            ));
    }
    if (this.select.selectedIndex === value) {
        return;
    }
    this.select.value = option.value;

    if ("createEvent" in document) {
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        this.select.dispatchEvent(evt);
    } else {
        this.select.fireEvent("onchange");
    }
};

SVGJaugeSelect.prototype.setValuePoint = function (mlf, p) {

    let trigo = new Trigonometry({
        "x": p.x - this.getCenter().x,
        "y": p.y - this.getCenter().y
    });

    let y = trigo.getArgument();

    let tmin = Trigonometry.realArgument(this.config.angles.tmin);
    let tmax = Trigonometry.realArgument(this.config.angles.tmax);
    let tlim = (tmin + tmax) / 2;

    if (y < tmin && y >= tlim) y = tmin;
    if (y > tmax && y < tlim) y = tmax;

    if (y < this.config.angles.tmin)
        y = y + 2 * Math.PI;

    let x = Math.round(mlf.x(y));

    this.setValue(mlf, x);
}

SVGJaugeSelect.prototype.setBackground = function () {
    let arc = new SVGArc(
        this.getCenter(),
        this.getRadius(),
        this.config.angles.tmin,
        this.config.angles.tmax
    );

    let path = this.svg.element.querySelector("path." + this.config["jauge-background"].class);
    if (path) path.setAttribute("d", arc.d);
    else this.svg.addElement(this.svg.createArc(arc, this.config["jauge-background"]));
};

SVGJaugeSelect.prototype.createElement = function () {

    let me = this;

    // Cacher l'input
    this.select.setAttribute("style", "display:none;");

    // Ajouter une balise div
    let div = document.createElement("div");
    div.setAttribute("class", "jauge");
    div.appendChild(this.select);
    div.appendChild(this.svg.element);

    this.element = div;

    let mlf = new MathFunctionLinear2D(
        {"x": Number(0), "y": this.config.angles.tmin},
        {"x": Number(this.select.options.length - 1), "y": this.config.angles.tmax}
    );

    this.select.addEventListener('changeValue', function () {
        me.setValue(mlf, this.value);
    });

    this.svg.element.addEventListener('mousemove', function (event) {

        if (event.buttons === 0)
            return;

        me.setValuePoint(mlf, {
            "x": event.offsetX,
            "y": event.offsetY,
        });

    });

    this.svg.element.addEventListener("wheel", function (event) {
        event.preventDefault();
        let value = Number(me.select.selectedIndex);
        value += (-event.deltaY) / 100;
        if (0 <= value && value < me.select.options.length) {
            me.select.value = me.select.options[value];
            me.setValue(mlf, value);
        }
        event.stopPropagation();
        return false;
    });

    this.svg.element.addEventListener("dblclick", function (event) {
        event.preventDefault();
        let input = document.querySelector('input[type="text"]', me);
        if (!input) {
            input = document.createElement("input");
            input.setAttribute("type", "text");
            let option = me.select.querySelector('option[value="' + me.select.value + '"]');
            if (option) {
                input.setAttribute("value", option.dataset.text);
            }

            input.addEventListener('keyup', function (event) {
                if (event.keyCode === 27) {
                    this.remove();
                }
                if (event.keyCode === 13) {
                    let option = me.select.querySelector('option[data-text="' + this.value + '"]');
                    if (option) {
                        me.setValue(mlf, option.value);
                    }
                    this.remove();
                }
            });

            me.element.appendChild(input);
            input.focus();
            input.select();
        }
        event.stopPropagation();
        return false;
    });

    this.setBackground();
    this.setValue(mlf, this.select.selectedIndex);

    return div;
};