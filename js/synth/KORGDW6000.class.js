class KORGDW6000 extends KORG {

    init() {
        super.init();
        this.IDModel = 0x04;
        this.name = this.name + " DW-6000";
        this.operator = "";
    }

    generateSysEx(data) {
        let message = data;
        message.unshift(this.IDModel);
        return super.generateSysEx(message);
    }

    // REQUEST

    // c. Data save request.
    dataSaveRequest() {
        this.send(this.generateSysEx([0x10]));
    }

    // e. Parameter change.
    parameterChange(offset, value) {
        let message = [0x41, offset & 0x7f, value & 0x7f];
        this.send(this.generateSysEx(message));
    }

    onMidiMessage(event) {
        let data = Array.from(event.data);
        let message = "KORG DW-6000 : ";
        switch (data[4]) {
            // case 0x13: addNotification("success",message+"DEVICE ID");	break;
            case 0x40:

                addNotification("success", message + "1 VOICE DUMP ");
                switch (app.midi.synthesizer.operator) {
                    case "save":
                        dl_sysex(data, "Korg_DW6000_Program");
                        break;
                    case "dump":
                        app.dump(data);
                        break;
                }
                //addNotification("success", message + value);
                break;
            case 0x41: addNotification("info", message + "PARAMETER CHANGE"); break;
            case 0x23: addNotification("success", message + "DATA LOAD COMPLETED"); break;
            case 0x24: addNotification("danger", message + "DATA LOAD ERROR"); break;
            case 0x21: addNotification("success", message + "WRITE COMPLETED"); break;
            case 0x22: addNotification("danger", message + "WRITE ERROR"); break;
        }
    }

}
