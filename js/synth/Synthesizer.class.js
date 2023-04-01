class Synthesizer {
    constructor(input, output) {
        this.output = output;
        this.input = input;
        this.input.onmidimessage = this.onMidiMessage;
        this.channel = 0;
        this.init();
    }

    /**
     * Initialize.
     */
    init() {}

    /**
     * Send Sysex.
     *
     * @param data
     */
    send(data) {
        this.output.send(data);
    }

    /**
     * Generate Sysex.
     *
     * @param data
     * @returns {Uint8Array}
     */
    generateSysEx(data) {
        let message = data;
        message.unshift(0xf0);
        message.push(0xf7);
        return new Uint8Array(message);
    }

    onMidiMessage(event) {}
}