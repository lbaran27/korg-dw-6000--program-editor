groups = [
    {
        "name": "OSC1",
        "cells": [
            {
                "label": "OCTAVE",
                "title": "OSC1 OCT",
                "offset": 19,
                "number": 11,
                "bit": {
                    "min": 5,
                    "max": 6
                },
                "value": {
                    "max": 2,
                    "type": "octave"
                }
            },
            {
                "label": "WAVEFORM",
                "title": "OSC1 WF",
                "offset": 24,
                "number": 12,
                "bit": {
                    "min": 3,
                    "max": 5
                },
                "value": {
                    "max": 7,
                    "type": "waveform"
                }
            },
            {
                "label": "LEVEL",
                "title": "OSC1 LEVEL",
                "offset": 2,
                "number": 13,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "OSC2",
        "cells": [
            {
                "label": "OCTAVE",
                "title": "OSC2 OCT",
                "offset": 20,
                "number": 21,
                "bit": {
                    "min": 5,
                    "max": 6
                },
                "value": {
                    "max": 2,
                    "type": "octave"
                }
            },
            {
                "label": "WAVEFORM",
                "title": "OSC2 WF",
                "offset": 24,
                "number": 22,
                "bit": {
                    "min": 0,
                    "max": 2
                },
                "value": {
                    "max": 7,
                    "type": "waveform"
                }
            },
            {
                "label": "LEVEL",
                "title": "OSC2 LEVEL",
                "offset": 3,
                "number": 23,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "INTERVAL",
                "title": "OSC2 INTERVAL",
                "offset": 25,
                "number": 24,
                "bit": {
                    "min": 3,
                    "max": 5
                },
                "value": {
                    "max": 4,
                    "type": "interval"
                }
            },
            {
                "label": "DETUNE",
                "title": "OSC2 DETUNE",
                "offset": 25,
                "number": 25,
                "bit": {
                    "min": 0,
                    "max": 2
                },
                "value": {
                    "max": 6,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "NOISE",
        "cells": [
            {
                "label": "LEVEL",
                "title": "NOISE LEVEL",
                "offset": 4,
                "number": 26,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "VCF",
        "cells": [
            {
                "label": "CUTOFF",
                "title": "CUTOFF",
                "offset": 5,
                "number": 31,
                "bit": {
                    "min": 0,
                    "max": 5
                },
                "value": {
                    "max": 63,
                    "type": "range"
                }
            },
            {
                "label": "RESONANCE",
                "title": "RESONANCE",
                "offset": 6,
                "number": 32,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "KBD&nbsp;TRACK",
                "title": "KBD TRACK",
                "offset": 21,
                "number": 33,
                "bit": {
                    "min": 5,
                    "max": 6
                },
                "value": {
                    "max": 2,
                    "type": "kbd_track"
                }
            },
            {
                "label": "POLARITY",
                "title": "EG POLARITY",
                "offset": 22,
                "number": 34,
                "bit": {
                    "min": 5,
                    "max": 5
                },
                "value": {
                    "max": 1,
                    "type": "polarity"
                }
            },
            {
                "label": "EG INT",
                "title": "VCF EG INT",
                "offset": 7,
                "number": 35,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "CHORUS",
        "cells": [
            {
                "label": "CHORUS",
                "title": "CHORUS",
                "offset": 23,
                "number": 36,
                "bit": {
                    "min": 5,
                    "max": 5
                },
                "value": {
                    "max": 1,
                    "type": "off_on"
                }
            }
        ]
    },
    {
        "name": "VCF EG",
        "cells": [
            {
                "label": "ATTACK",
                "title": "VCF EG ATTACK",
                "offset": 8,
                "number": 41,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "DECAY",
                "title": "VCF EG DECAY",
                "offset": 9,
                "number": 42,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "BREAK&nbsp;P.",
                "title": "VCF EG BREAK P.",
                "offset": 10,
                "number": 43,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "SLOPE",
                "title": "VCF EG SLOPE",
                "offset": 11,
                "number": 44,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "SUSTAIN",
                "title": "VCF EG SUSTAIN",
                "offset": 12,
                "number": 45,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "RELEASE",
                "title": "VCF EG RELEASE",
                "offset": 13,
                "number": 46,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "VCA EG",
        "cells": [
            {
                "label": "ATTACK",
                "title": "VCA EG ATTACK",
                "offset": 14,
                "number": 51,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "DECAY",
                "title": "VCA EG DECAY",
                "offset": 15,
                "number": 52,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "BREAK P.",
                "title": "VCA EG BREAK P.",
                "offset": 16,
                "number": 53,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "SLOPE",
                "title": "VCA EG SLOPE",
                "offset": 17,
                "number": 54,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "SUSTAIN",
                "title": "VCA EG SUSTAIN",
                "offset": 18,
                "number": 55,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "RELEASE",
                "title": "VCA EG RELEASE",
                "offset": 19,
                "number": 56,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "MG",
        "cells": [
            {
                "label": "FREQUENCY",
                "title": "MG FREQ",
                "offset": 20,
                "number": 61,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "DELAY",
                "title": "MG DELAY",
                "offset": 21,
                "number": 62,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "OSC",
                "title": "MG OSC",
                "offset": 22,
                "number": 63,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            },
            {
                "label": "VCF",
                "title": "MG VCF",
                "offset": 23,
                "number": 64,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "BEND",
        "cells": [
            {
                "label": "OSC",
                "title": "OSC",
                "offset": 0,
                "number": 71,
                "bit": {
                    "min": 0,
                    "max": 3
                },
                "value": {
                    "max": 12,
                    "type": "range"
                }
            },
            {
                "label": "VCF",
                "title": "VCF",
                "offset": 18,
                "number": 72,
                "bit": {
                    "min": 5,
                    "max": 5
                },
                "value": {
                    "max": 1,
                    "type": "off_on"
                }
            }
        ]
    },
    {
        "name": "PORTAMENTO",
        "cells": [
            {
                "label": "TIME",
                "title": "PORTAMENTO TIME",
                "offset": 1,
                "number": 73,
                "bit": {
                    "min": 0,
                    "max": 4
                },
                "value": {
                    "max": 31,
                    "type": "range"
                }
            }
        ]
    },
    {
        "name": "KEY ASSIGN",
        "cells": [
            {
                "label": "",
                "title": "ASSIGN MODE",
                "offset": 0,
                "number": 0,
                "bit": {
                    "min": 4,
                    "max": 5
                },
                "value": {
                    "max": 2,
                    "type": "assign_mode"
                }
            }
        ]
    }
];
