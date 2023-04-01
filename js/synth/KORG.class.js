class KORG extends Synthesizer {

    /**
     * Initialize class.
     */
    init() {
        this.IDManufacturer = 0x42;
        this.name = "KORG";
    }

    /**
     * Generate a system exclusive message.
     *
     * @returns {*|Uint8Array}
     * @param data
     */
    generateSysEx(data) {
        let message = data;
        message.unshift(this.IDManufacturer, 0x30 + this.channel);
        return super.generateSysEx(message);
    }

}