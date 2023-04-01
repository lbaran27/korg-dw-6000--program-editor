"use strict";

class App {

    /**
     * Initialize class.
     */
    init() {

		this.midi = null;
		
        this.elSynthetiser = document.querySelector("#synthesizer");
        this.elDumpButton = document.querySelector('button[name="dump"]');
        this.elLoadButton = document.querySelector('button[name="load"]');
        this.elSaveButton = document.querySelector('button[name="save"]');
        this.elHtml = document.querySelector("html");
        this.elName = document.querySelector(".bloc.name input"); // "div.bloc.manage.name > input"
        this.selectorCurrentSelect = ".bloc > .content > div.field.selected select";

        this.initMidi();
        this.initGroups();
        this.initPresets();

        document.querySelectorAll('.plages').forEach(function (plage) {
            plage.addEventListener('click', function () {
                let value = plage.getAttribute("data-value");
                let input = plage.closest(".field").querySelector("select[data-offset]");
                input.value = value;
                input.dispatchEvent(new CustomEvent("changeValue", {"detail": value}));

                let offset = input.getAttribute('data-offset');
                value = 0;

                document.querySelectorAll('[data-offset="' + offset + '"]').forEach(function (select) {
                    value += parseInt(select.value) << parseInt(select.getAttribute("data-bit-min"));
                });

                if (app.midi.synthesizer) {
                    app.midi.synthesizer.parameterChange(offset, value);
                }

            });
        });

        document.querySelectorAll("div.field").forEach(function (field) {
            field.addEventListener('click', function () {
                document.querySelectorAll("div.field.selected").forEach(function (preset) {
                    preset.classList.remove("selected");
                });
				field.classList.add("selected");
				let range = document.querySelector("#controller > input");
				let select = field.querySelector("select");
				range.max = select.options.length - 1;
				range.value = select.selectedIndex
				function rangeChange(event) {
					let input = document.querySelector("div.field.selected select");
					console.log(input.value);
					if (!input) {
						return;
					}
					if (input.selectedIndex > input.length - 1) {
						return;
					}
					input.selectedIndex = event.target.value;
					let value = input.selectedIndex;
					input.value = value;
					input.dispatchEvent(new CustomEvent("changeValue", {"detail": value}));
					app.synthesizerParameterChange(input);
				}
				range.addEventListener("change", rangeChange);
				range.addEventListener("input", rangeChange);
            });
        });

        document.querySelectorAll("select.jauge").forEach(function (select) {
            let parent = select.parentElement;
            let jauge = new SVGJaugeSelect(60, 60, select, select_jauge_config);
            let div = jauge.createElement();
            parent.appendChild(div);
        });

        document.querySelectorAll('select[data-offset]').forEach(function (select) {
            select.addEventListener('change', function () {
                app.synthesizerParameterChange(this);
            });
        });

        this.events();
    };

    events(){
        // Instanciate ouput.
        document.addEventListener("midiInstanciateOutput", function (event) {
            //let midi = event.detail.data.midi;
            app.midi.output.identity();
        });

        // Instanciate input.
        document.addEventListener("midiInstanciateIo", function (event) {
            //let midi = event.detail.data.midi;
            app.midi.synthesizer = new KORGDW6000(app.midi.input, app.midi.output);
        });

        // Desnstanciate input or output.
        document.addEventListener("midiDesactivateIo", function (event) {
            // let midi = event.detail.data.midi;
            if (app.midi.synthesizer) {
                app.midi.synthesizer = null;
            }
        });

        //--- Buttons.

        // Dump.
        this.elDumpButton.addEventListener("click", function () {
            if (!app.midi.synthesizer) {
                return;
            }
            app.midi.synthesizer.operator = "dump";
            app.midi.synthesizer.dataSaveRequest();
        });

        // Save.
        this.elSaveButton.addEventListener("click", function () {
            this.save();
        }.bind(this));

        // Load.
        this.elLoadButton.addEventListener("click", function () {
            let input = document.createElement("input");
            input.setAttribute("type", "file");
            input.addEventListener('change', function () {
                let fileReaders = [];
                for (let f = 0; f < this.files.length; f++) {
                    fileReaders.push(new FileReader());
                    fileReaders[f].addEventListener('load', function () {
                        for (let r = 0; r < fileReaders.length; r++) {
                            if (fileReaders[r] === this) {
                                let data = new Uint8Array(this.result);
                                app.load(data);
                            }
                        }
                    });
                    fileReaders[f].readAsArrayBuffer(this.files[f]);
                    app.elName.value = this.files[f].name;
                }
            });
            input.click();
        });

        //--- Keyboard.

        this.elHtml.addEventListener("keypress", function (event) {
            switch (event.key) {
                // keyCode: 107
                case "+": this.up(); break;
                // keyCode: 109
                case "-": this.bottom(); break;
            }
        }.bind(this));

        this.elHtml.addEventListener("keydown", function (event) {
            switch (event.keyCode) {
                case 37: this.left(); break;
                case 38: this.up(); break;
                case 39: this.right(); break;
                case 40: this.bottom(); break;
            }
        }.bind(this));

    };

    initMidi() {
        this.midi = null;
        window.addEventListener("load", function () {
            navigator.requestMIDIAccess({"sysex": true}).then(
                function (access) {
                    app.midi = new Midi(access);
                    app.midi.buildSettingsElements();
                    addEvent("midiInstanciate", {"midi": app.midi});
                }, // Success
                function (message) {
                    alert("Failed to get MIDI access - " + message);
                }  // Failed
            );
        });
    };

    getValuesByValueType(value_type){
        switch (value_type) {
            case "assign_mode": return ["POLY1", "POLY2", "UNISON"];
            case "off_on": return ["OFF", "ON"];
            case "octave": return ["16", "8", "4"];
            case "waveform": return ["1", "2", "3", "4", "5", "6", "7", "8"];
            case "interval": return ["1", "-3", "3", "4", "5"];
            case "kbd_track": return ["OFF", "HALF", "FULL"];
            case "polarity": return ["+", "-"];
        }
        return [];
    };

    initGroups() {
        groups.forEach(function (group) {

            let content = [];

            group.cells.forEach(function (cell) {

                let select = document.createElement("select");

                // Si le type est "range" ajouter une classe "jauge".
                if (cell.value.type === "range") {
                    select.classList.add("jauge");
                }

                select.setAttribute("data-number", cell.number);
                select.setAttribute("data-offset", cell.offset);
                select.setAttribute("data-bit-min", cell.bit.min);
                select.setAttribute("data-bit-max", cell.bit.max);
                select.setAttribute("data-value-max", cell.value.max);
                select.setAttribute("data-value-type", cell.value.type);

                let values = this.getValuesByValueType(cell.value.type);

                // Custom values.
                if (values.length) {
                    for (let i = 0; i < values.length; i++) {
                        let option = document.createElement("option");
                        option.value = i;
                        option.setAttribute("data-text", values[i]);
                        option.append(values[i]);
                        select.append(option);
                    }
                    // Default values.
                } else {
                    for (let i = 0; i <= cell.value.max; i++) {
                        let option = document.createElement("option");
                        option.value = i;
                        option.setAttribute("data-text", i);
                        option.append(i);
                        select.append(option);
                    }
                }

                let elTitle = createDiv("title", []);
                elTitle.innerHTML = cell.label;

                content.push(
                    createDiv("field", [
                        // 0 ◄► cell.value.max
                        createDiv("plages", [""]),
                        createDiv("number", [cell.number]),
                        elTitle,
                        createDiv("input", [select])
                    ])
                );
            }.bind(this));

            this.elSynthetiser.append(
                createDiv("bloc", [
                    createDiv("title-wrapper", [
                        createDiv("title", [group.name])
                    ]),
                    createDiv("content", content)
                ])
            )
        }.bind(this));
    };

    initPresets(){
        let pos = 0;
        presets.forEach(function (preset) {

            let values = this.getValuesByPreset(preset);
            let unt = ((pos % 8) + 1) + "";
            let dec = (parseInt(pos / 8) + 1) + "";

            var elPreset = createDiv("preset", [
                createDiv("number", [dec + unt]),
                createDiv("title", [values.name])
            ]);

            elPreset.addEventListener('click', function () {

                document.querySelectorAll(".preset").forEach(function (preset) {
                    preset.classList.remove("selected");
                });

                elPreset.classList.add("selected");
                app.load(values.data);
                app.elName.value = elPreset.querySelector(".title").innerText;
            });

            document.querySelector(".presets .presets-content").append(elPreset);
            pos++;
        }.bind(this));
    };

    getValuesByPreset(values) {

        let pos = 0;
        let name = values[pos++];
        let data = [];

        for (let i = 0; i < 26; i++) {
            data[i] = 0;
        }

        groups.forEach(function (group) {
            group.cells.forEach(function (cell) {
                let value = values[pos];
                switch (pos) {
                    // Octave
                    case 1:
                    case 4:
                        switch (value) {
                            case 16: value = 0; break;
                            case 8: value = 1; break;
                            case 4: value = 2; break;
                        }
                        break;
                    case 13:
                    case 2:
                    case 5:
                        value = value - 1;
                        break;
                    case 7:
                        switch (value) {
                            case 1: value = 0; break;
                            case 3: value = 2; break;
                            case 4: value = 3; break;
                            case 5: value = 4; break;
                        }
                        break;
                    case 35:
                        switch (value) {
                            case "POLY1": value = 0; break;
                            case "POLY2": value = 1; break;
                            case "UNISON": value = 2; break;
                        }
                        break;
                }
                data[cell.offset] += value << cell.bit.min;
                pos++;
            });
        });
        data.unshift(0x40);
        data.unshift(0x04);
        data.unshift(0x30);
        data.unshift(0x42);
        data.unshift(0xf0);

        data.push(0xf7);

        return {
            "name": name,
            "data": data
        };
    }

    synthesizerParameterChange(vselect) {
        let offset = vselect.getAttribute('data-offset');
        let value = 0;

        document.querySelectorAll('[data-offset="' + offset + '"]').forEach(function (select) {
            value += parseInt(select.value) << parseInt(select.getAttribute("data-bit-min"));
        });

        if (this.midi.synthesizer) {
            this.midi.synthesizer.parameterChange(offset, value);
        }
    };

    dump(data) {
        let values = data.slice(5, data.length - 1);
        for (let i = 0; i < values.length; i++) {
            let selector = '[data-offset="' + i + '"]';
            document.querySelectorAll(selector).forEach(function (input) {

                if (!(input && input.constructor.name === "HTMLSelectElement")) {
                    return;
                }

                let bit_min = input.getAttribute("data-bit-min");
                let bit_max = input.getAttribute("data-bit-max");
                let value = values[i];

                value = (value >> bit_min) & ((1 << (bit_max - bit_min + 1)) - 1);

                input.value = value;
                let plage = input.closest(".field").querySelector(".plages");
                plage.textContent = input.selectedOptions[0].textContent;
                plage.setAttribute("data-value", value);
                input.dispatchEvent(new CustomEvent("changeValue", {"detail": value}));

            });
        }
    };

    load(data) {
        if (this.midi.synthesizer) {
            this.midi.synthesizer.send(data);
        }
        this.dump(data);
    };

    save() {

        let data = [0xf0, 0x42, 0x30, 0x04, 0x40];

        for (let i = 0; i < 26; i++) {

            let value = 0;
            let selector = '[data-offset="' + i + '"]';

            document.querySelectorAll(selector).forEach(function (input) {
                if (!(input && input.constructor.name === "HTMLSelectElement")) {
                    return;
                }
                let bit_min = input.getAttribute("data-bit-min");
                value += input.value << bit_min;
            });
            data.push(value);
        }
        data.push(0xf7);
        dl_sysex(data, this.elName.value);
    };

    left() {
        let cfield = document.querySelector("div.field.selected");
        let field = cfield.previousElementSibling;
        if (field === null) {
            let cbloc = cfield.closest(".bloc");
            let bloc = cbloc.previousElementSibling;
            if (bloc === null) {
                return;
            }
            field = bloc.querySelector(".content").lastElementChild;
        }
        document.querySelectorAll("div.field.selected").forEach(function (preset) {
            preset.classList.remove("selected");
        });
        field.classList.add("selected");
    };

    right() {
        let cfield = document.querySelector("div.field.selected");
        let field = cfield.nextElementSibling;
        if (field === null) {
            let cbloc = cfield.closest(".bloc");
            let bloc = cbloc.nextElementSibling;
            if (bloc === null) {
                return;
            }
            field = bloc.querySelector(".field");
        }
        document.querySelectorAll("div.field.selected").forEach(function (preset) {
            preset.classList.remove("selected");
        });
        field.classList.add("selected");
    };

    up() {
        let input = document.querySelector(this.selectorCurrentSelect);
        if (!input) {
            return;
        }
        if (input.selectedIndex === input.length - 1) {
            return;
        }
        input.selectedIndex += 1;
        let value = input.selectedIndex;
        input.value = value;
        input.dispatchEvent(new CustomEvent("changeValue", {"detail": value}));
        this.synthesizerParameterChange(input);
    };

    bottom() {
        let input = document.querySelector(this.selectorCurrentSelect);
        if (!input) {
            return;
        }
        if (input.selectedIndex === 0) {
            return;
        }
        input.selectedIndex -= 1;
        let value = input.selectedIndex;
        input.dispatchEvent(new CustomEvent("changeValue", {"detail": value}));
        this.synthesizerParameterChange(input);
    };

    basicInputMidiMessageEvent(event) {
        if (this.midi.compareUint8Array(event.data, [0xf0, 0x42, 0x30, 0x13, 0xf7])) {
            console.log('DEVICE ID');
        }
        if (this.midi.compareUint8Array(event.data, [0xf0, 0x42, 0x30, 0x13, 0x23, 0xf7])) {
            console.log('DATA LOAD COMPLETED');
        }
        if (this.midi.compareUint8Array(event.data, [0xf0, 0x42, 0x30, 0x13, 0x24, 0xf7])) {
            console.log('DATA LOAD ERROR');
        }
        if (this.midi.compareUint8Array(event.data, [0xf0, 0x42, 0x30, 0x13, 0x21, 0xf7])) {
            console.log('WRITE COMPLETED');
        }
        if (this.midi.compareUint8Array(event.data, [0xf0, 0x42, 0x30, 0x13, 0x22, 0xf7])) {
            console.log('WRITE ERROR');
        }
        if (event.data[0] !== 254) {
            console.log(event.data);
        }
    };

}

let app = (new App());
app.init();
