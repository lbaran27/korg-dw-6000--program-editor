function createDiv(class_css, elements) {
    let div = document.createElement("div");
    div.classList.add(class_css);
    if (elements) {
        elements.forEach(element => div.append(element));
    }
    return div;
}

function BlobToLink(blob, name) {
    let link = document.createElement("a");
    link.download = name;
    link.href = URL.createObjectURL(blob);
    link.innerText = name;
    return link;
}

function dl_sysex(data, filename) {
    if (filename === "") {
        filename = "sysex";
    }
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        let blob = new Blob([new Uint8Array(data)], {"type": "application/octet-binary"});
        let link = BlobToLink(blob, filename + ".syx");
        link.click();
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}

function addEvent(name, data) {
    if (window.CustomEvent) {
        document.dispatchEvent(new CustomEvent(name, {"detail": data}));
    }
}

function addNotification(type, message) { // type : sucess, info, warning, danger
    let notification = document.querySelector(".notification ul");
    if (notification === null) {
        return;
    }
    if (typeof notification === "object" && notification.constructor.name === "HTMLUListElement") {
        let li = document.createElement("li");
        li.setAttribute("class", "alert alert-" + type);
        li.textContent = message;
        notification.appendChild(li);
    } else {
        console.log(message);
    }
}

if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

Element.prototype.position = function (position) {
    if (!position) {
        position = {"left": 0, "top": 0};
    }
    position.left += this.offsetLeft;
    position.top += this.offsetTop;
    parent = this.offsetParent;
    if (parent) {
        position = parent.position(position);
    }
    return position;
}

// String.
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// MidiOutput
MIDIOutput.prototype.identity = function () {
    this.send(new Uint8Array([0xf0, 0x7e, 0x00, 0x06, 0x01, 0xf7]));
};