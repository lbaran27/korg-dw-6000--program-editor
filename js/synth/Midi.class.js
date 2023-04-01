class Midi {

    constructor(access) {
        this.access = access;
        this.input = null;
        this.output = null;
        this.channel = 0;
        this.synthesizer = null;
    }

    buildSettingsElements() {
        this.buildMidiIOElements();
        this.buildChannelElement();
    }

    buildMidiIOElements() {
        let me = this;
        let midiSettingsElement = this.getMidiSettingsElement();

        let io = ["input", "output"];
        for (let index in io) {

            let setting = io[index];
            let select = document.createElement("select");
            select.setAttribute("data-id", setting);
            select.setAttribute("data-label", setting.capitalize());

            select.addEventListener('change', function (event) {
                let setting = event.target.getAttribute("data-id");
                let id = event.target.value;
                me[setting] = id ? me.access[setting + "s"].get(id) : null;
                if (me[setting] && setting === 'output') {
                    addEvent('midiInstanciateOutput', {"midi": me});
                }
                if (me[setting] && setting === 'input') {
                    addEvent('midiInstanciateInput', {"midi": me});
                    me[setting].onmidimessage = app.basicInputMidiMessageEvent;
                }
                if (me.input && me.output) {
                    addEvent('midiInstanciateIo', {"midi": me});
                } else {
                    addEvent('midiDesactivateIo', {"midi": me});
                }
            });

            let option = document.createElement("option");
            option.setAttribute("value", "");
            option.innerText = "OFF";
            select.appendChild(option);
            this.access[setting + "s"].forEach(function (output) {
                if (output.state === "connected") {
                    let option = document.createElement("option");
                    option.setAttribute("value", output.id);
                    option.innerText = output.name;
                    select.appendChild(option);
                }
            });
            let label = document.createElement("label");
            label.classList.add(setting);
            label.textContent = setting.replace("put", "").toUpperCase();
            midiSettingsElement.appendChild(label);
            midiSettingsElement.appendChild(select);
        }
    }

    compareUint8Array(data, ref) {
        return data.toString() === (new Uint8Array(ref)).toString();
    }

    buildChannelElement() {
        let me = this;
        let midiSettingsElement = this.getMidiSettingsElement();
        let select = document.createElement("select");
        select.setAttribute("data-id", "channel");
        select.setAttribute("data-label", "Channel");

        select.addEventListener('change', function (event) {
            me.channel = parseInt(event.target.value);
        });

        for (let i = 0; i < 16; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", i);
            option.innerText = i + 1;
            select.appendChild(option);
        }
        let label = document.createElement("label");
        label.classList.add("channel");
        label.textContent = "Ch.";
        midiSettingsElement.appendChild(label);
        midiSettingsElement.appendChild(select);
    }

    getMidiSettingsElement() {
        return document.querySelector("#midi-settings");
    }

}
