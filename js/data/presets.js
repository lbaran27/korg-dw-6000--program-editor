let presets = [
    ["SYNTH BRASS", 16, 1, 31, 16, 1, 31, 1, 5, 3, 6, 0, 1, 1, 27, 1, 3, 20, 18, 20, 27, 11, 0, 31, 31, 28, 28, 9, 8, 11, 0, 0, 2, 0, 0, "POLY 1"],
    ["BELLS 1", 4, 8, 31, 16, 8, 31, 5, 5, 0, 3, 0, 2, 1, 25, 1, 0, 24, 22, 25, 0, 26, 0, 31, 26, 26, 29, 31, 0, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["ACOUSTIC PIANO", 16, 3, 31, 16, 8, 19, 1, 4, 0, 38, 5, 1, 1, 6, 0, 0, 13, 13, 17, 0, 12, 0, 19, 21, 21, 0, 9, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["BOWED CELLOS", 16, 1, 31, 16, 6, 21, 1, 5, 0, 31, 1, 2, 1, 5, 1, 0, 16, 0, 0, 0, 13, 10, 16, 19, 12, 18, 10, 8, 0, 3, 0, 2, 0, 0, "POLY 1"],
    ["DYNO PIANO", 16, 4, 24, 16, 4, 23, 1, 2, 0, 14, 0, 1, 1, 18, 1, 0, 21, 24, 24, 0, 18, 0, 31, 31, 31, 0, 7, 8, 11, 0, 0, 2, 0, 0, "POLY 1"],
    ["PERCUS SYNTH 1", 16, 1, 31, 16, 1, 31, 1, 5, 0, 26, 4, 1, 1, 25, 1, 0, 12, 8, 24, 12, 3, 0, 31, 31, 31, 31, 7, 8, 11, 2, 0, 2, 0, 0, "POLY 1"],
    ["PAN FLUTE", 8, 2, 11, 8, 8, 13, 1, 3, 0, 15, 0, 1, 1, 20, 1, 0, 6, 16, 19, 16, 9, 4, 23, 31, 31, 31, 9, 7, 0, 0, 2, 2, 0, 0, "POLY 1"],
    ["ORGAN CHIFF", 8, 8, 12, 16, 4, 31, 1, 3, 0, 25, 0, 1, 1, 21, 1, 1, 10, 17, 21, 13, 17, 8, 31, 31, 31, 31, 8, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["MARIMBA", 16, 8, 31, 16, 2, 19, 1, 2, 3, 11, 0, 0, 1, 22, 1, 0, 9, 20, 19, 0, 13, 0, 31, 31, 31, 0, 11, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["DIGI SOUND 1", 16, 5, 25, 16, 5, 25, 1, 3, 3, 0, 0, 2, 1, 31, 1, 0, 19, 0, 0, 0, 15, 0, 18, 0, 0, 0, 15, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["LOW STRINGS", 16, 1, 31, 16, 1, 31, 1, 5, 0, 38, 1, 2, 1, 0, 1, 0, 0, 0, 0, 0, 19, 17, 31, 31, 28, 23, 15, 8, 0, 3, 0, 2, 0, 0, "POLY 1"],
    ["VIBES 1", 4, 8, 31, 16, 8, 19, 1, 0, 3, 28, 0, 2, 1, 6, 1, 0, 9, 18, 26, 0, 13, 0, 31, 31, 21, 28, 17, 6, 0, 1, 3, 2, 0, 0, "POLY 1"],
    ["BREAK DANCE", 16, 6, 0, 16, 3, 0, 1, 2, 0, 18, 30, 2, 1, 12, 1, 0, 8, 11, 8, 15, 31, 0, 8, 0, 15, 0, 0, 8, 0, 0, 0, 0, 1, 0, "POLY 1"],
    ["ORGAN with PERCUS", 16, 2, 31, 16, 2, 23, 1, 0, 0, 29, 24, 2, 1, 0, 1, 0, 9, 0, 0, 0, 0, 0, 0, 31, 0, 31, 0, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["LEAD SYNTH", 16, 3, 29, 16, 1, 31, 1, 6, 0, 0, 0, 0, 1, 28, 1, 0, 30, 23, 26, 0, 27, 0, 31, 31, 27, 31, 19, 8, 19, 5, 0, 2, 0, 18, "UNISON"],
    ["AFRICA", 16, 5, 25, 16, 2, 25, 1, 4, 3, 15, 0, 1, 1, 14, 1, 4, 16, 19, 22, 12, 11, 3, 31, 31, 31, 31, 10, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["JET PLANE", 8, 8, 0, 16, 4, 0, 1, 3, 31, 18, 0, 0, 1, 15, 1, 28, 24, 13, 26, 27, 28, 3, 31, 31, 31, 31, 26, 0, 0, 0, 0, 0, 1, 0, "UNISON"],
    ["SAXS", 16, 6, 31, 16, 6, 31, 1, 4, 0, 26, 1, 1, 1, 12, 1, 3, 18, 24, 13, 22, 11, 2, 0, 22, 14, 24, 8, 31, 0, 0, 2, 2, 0, 0, "POLY 2"],
    ["ACOUSTIC GUITAR", 16, 5, 31, 16, 5, 31, 1, 1, 0, 9, 3, 1, 1, 15, 0, 0, 17, 23, 22, 0, 13, 0, 31, 31, 27, 0, 3, 11, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["CELESTE", 4, 8, 31, 4, 8, 31, 1, 2, 0, 52, 12, 2, 1, 0, 0, 0, 9, 0, 0, 0, 21, 0, 16, 0, 0, 0, 16, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["FLUTE CHORUS", 8, 2, 31, 8, 1, 31, 1, 2, 5, 19, 2, 2, 1, 9, 1, 8, 11, 18, 14, 18, 16, 4, 31, 31, 31, 31, 5, 6, 15, 0, 3, 2, 0, 0, "POLY 1"],
    ["SYN DRUM", 16, 6, 0, 16, 3, 0, 1, 2, 31, 7, 30, 2, 1, 8, 1, 0, 16, 0, 8, 0, 31, 0, 19, 31, 15, 0, 7, 8, 0, 0, 0, 0, 1, 0, "UNISON"],
    ["PIPE ORGAN", 16, 4, 31, 8, 8, 28, 5, 4, 0, 40, 0, 2, 1, 0, 1, 0, 9, 0, 0, 0, 0, 3, 0, 31, 0, 31, 12, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["HELICOPTER", 16, 8, 31, 16, 4, 31, 1, 3, 31, 0, 0, 0, 1, 13, 1, 28, 29, 10, 28, 23, 28, 9, 31, 31, 31, 31, 26, 19, 0, 0, 31, 2, 1, 0, "POLY 1"],
    ["CHOIR", 8, 2, 27, 8, 2, 31, 1, 4, 3, 30, 25, 2, 1, 1, 1, 0, 20, 20, 21, 20, 15, 22, 31, 31, 31, 0, 14, 7, 0, 7, 0, 2, 0, 0, "POLY 1"],
    ["SYNTH BASS 1", 16, 6, 31, 16, 1, 31, 1, 0, 0, 0, 19, 2, 1, 24, 1, 0, 17, 21, 22, 0, 0, 0, 31, 31, 31, 31, 0, 8, 0, 0, 0, 2, 0, 0, "UNISON"],
    ["HIGH STRINGS", 8, 2, 22, 8, 2, 18, 1, 4, 3, 45, 1, 2, 1, 6, 1, 0, 8, 0, 3, 15, 12, 11, 31, 31, 31, 31, 12, 9, 0, 4, 0, 2, 0, 0, "POLY 1"],
    ["TRUMPETS", 8, 1, 31, 8, 5, 0, 1, 1, 0, 12, 0, 1, 1, 31, 1, 3, 10, 24, 31, 20, 6, 0, 31, 31, 31, 31, 5, 8, 17, 7, 0, 2, 0, 0, "POLY 1"],
    ["HARPSICHORD", 4, 7, 26, 8, 7, 31, 1, 2, 0, 56, 2, 1, 1, 6, 1, 0, 9, 12, 19, 0, 17, 0, 15, 15, 19, 0, 9, 8, 7, 0, 0, 2, 0, 0, "POLY 1"],
    ["ELECTRONIC ORGAN", 16, 4, 31, 4, 5, 15, 5, 2, 0, 30, 0, 1, 1, 8, 1, 0, 9, 0, 0, 0, 0, 0, 0, 31, 0, 31, 0, 8, 0, 0, 1, 2, 0, 0, "POLY 1"],
    ["DIGI BASS", 16, 5, 31, 16, 5, 31, 1, 1, 0, 9, 3, 1, 1, 15, 0, 0, 17, 23, 22, 0, 13, 0, 31, 31, 27, 0, 3, 11, 0, 0, 0, 2, 0, 0, "UNISON"],
    ["SONG WHISTLE", 16, 8, 0, 16, 4, 0, 1, 3, 0, 26, 31, 2, 1, 3, 1, 12, 31, 31, 31, 31, 10, 9, 31, 31, 31, 31, 3, 4, 0, 0, 0, 0, 1, 0, "POLY 1"],
    ["PERCUS SYNTH 2", 16, 1, 31, 16, 6, 31, 1, 0, 0, 17, 11, 2, 1, 22, 1, 0, 12, 15, 14, 0, 19, 0, 31, 31, 31, 0, 5, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["BELLS 2", 16, 3, 29, 16, 8, 26, 5, 4, 0, 14, 0, 0, 1, 20, 1, 0, 18, 23, 18, 0, 18, 0, 0, 31, 0, 31, 19, 8, 19, 5, 0, 2, 0, 0, "POLY 1"],
    ["HONKEY PIANO", 8, 6, 31, 8, 3, 31, 1, 6, 0, 32, 0, 1, 1, 8, 1, 0, 16, 17, 13, 14, 31, 0, 21, 21, 20, 0, 8, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["B. JEAN", 16, 2, 25, 16, 1, 28, 1, 5, 0, 0, 0, 2, 1, 20, 1, 4, 24, 31, 26, 16, 22, 0, 31, 14, 26, 31, 8, 8, 11, 4, 0, 2, 0, 0, "POLY 1"],
    ["POLY GLIDE", 16, 1, 31, 16, 5, 31, 1, 4, 2, 24, 1, 0, 1, 31, 1, 0, 14, 14, 0, 29, 31, 0, 31, 31, 31, 31, 23, 8, 13, 0, 0, 2, 0, 20, "POLY 2"],
    ["HARP", 8, 3, 28, 8, 2, 18, 1, 3, 0, 26, 5, 1, 1, 10, 0, 0, 9, 18, 14, 0, 18, 0, 31, 30, 15, 0, 14, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["BOWED VIOLONS", 16, 4, 10, 16, 2, 31, 1, 5, 3, 23, 1, 2, 1, 23, 1, 0, 11, 19, 10, 13, 14, 8, 23, 11, 31, 14, 8, 8, 0, 5, 0, 2, 0, 0, "POLY 1"],
    ["WIND STORM", 8, 8, 0, 16, 4, 0, 1, 3, 31, 36, 22, 1, 1, 0, 0, 23, 10, 17, 21, 13, 17, 29, 31, 31, 31, 31, 22, 0, 0, 0, 5, 0, 1, 0, "UNISON"],
    ["THUNDER", 4, 8, 0, 16, 8, 0, 1, 0, 18, 10, 0, 1, 1, 16, 1, 0, 31, 31, 26, 18, 20, 0, 30, 27, 26, 28, 31, 31, 0, 15, 0, 0, 1, 0, "POLY 1"],
    ["DIGI SOUND 2", 16, 5, 13, 16, 5, 20, 1, 3, 0, 0, 0, 0, 1, 31, 1, 0, 31, 22, 21, 16, 22, 0, 1, 0, 0, 31, 11, 8, 11, 0, 0, 2, 0, 0, "POLY 1"],
    ["UPRIGHT PIANO", 8, 6, 31, 8, 3, 31, 1, 2, 0, 32, 0, 1, 1, 8, 0, 0, 16, 17, 13, 14, 31, 0, 21, 21, 20, 0, 8, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["ELECTRIC PIANO", 16, 2, 31, 16, 2, 31, 1, 2, 0, 44, 0, 1, 1, 2, 1, 0, 23, 15, 0, 15, 31, 0, 17, 15, 22, 0, 8, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["SYNTH PAD", 16, 2, 15, 16, 1, 31, 1, 5, 3, 45, 0, 2, 1, 0, 1, 0, 20, 25, 18, 24, 15, 0, 31, 31, 31, 0, 9, 8, 0, 2, 0, 2, 0, 0, "POLY 1"],
    ["TROMBONE", 16, 1, 31, 16, 1, 0, 1, 3, 0, 10, 0, 1, 1, 19, 1, 6, 17, 15, 20, 18, 8, 0, 31, 28, 28, 0, 7, 31, 0, 2, 1, 2, 0, 0, "POLY 1"],
    ["ELECTRONIC ORGAN UM", 4, 2, 31, 16, 1, 31, 1, 3, 0, 36, 0, 2, 1, 2, 1, 0, 10, 0, 31, 31, 19, 0, 31, 31, 31, 31, 0, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["TOUCH SENSE SWEEP", 16, 2, 31, 16, 1, 31, 1, 4, 0, 44, 27, 0, 2, 13, 1, 0, 9, 31, 10, 0, 22, 0, 21, 23, 25, 12, 25, 8, 0, 6, 0, 2, 0, 0, "POLY 1"],
    ["MONSTERS", 16, 8, 0, 16, 4, 0, 1, 3, 0, 11, 31, 2, 1, 6, 1, 21, 21, 16, 31, 31, 25, 9, 31, 31, 31, 31, 22, 31, 0, 0, 19, 0, 1, 0, "POLY 1"],
    ["ACCORDION", 4, 1, 31, 8, 2, 31, 1, 0, 0, 63, 0, 2, 1, 31, 1, 0, 15, 22, 17, 12, 26, 4, 27, 19, 14, 15, 5, 31, 0, 5, 0, 2, 0, 0, "POLY 1"],
    ["D. TONGUING BRASS", 16, 1, 31, 16, 1, 31, 1, 1, 0, 9, 0, 2, 1, 31, 1, 0, 7, 0, 0, 31, 8, 0, 31, 31, 31, 31, 9, 8, 0, 4, 0, 2, 0, 0, "POLY 1"],
    ["VIBES 2", 16, 8, 31, 16, 5, 0, 1, 1, 0, 13, 0, 1, 1, 20, 1, 0, 11, 25, 19, 0, 25, 0, 31, 31, 31, 0, 23, 6, 0, 0, 2, 2, 0, 0, "POLY 1"],
    ["SYNTH SWEEP", 16, 1, 31, 16, 1, 31, 1, 4, 0, 0, 26, 0, 1, 31, 1, 0, 28, 0, 0, 0, 21, 0, 23, 31, 0, 31, 24, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["STEEL DRUMS", 16, 3, 14, 8, 5, 19, 5, 6, 0, 12, 0, 1, 1, 20, 1, 0, 13, 23, 17, 0, 15, 0, 31, 31, 31, 0, 20, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["TUBULER BELLS", 8, 8, 31, 16, 8, 18, 5, 1, 0, 0, 0, 0, 1, 26, 1, 0, 23, 18, 22, 0, 20, 0, 31, 26, 26, 29, 31, 0, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["ELECTRONIC PIANO 2", 16, 2, 31, 16, 2, 0, 1, 1, 0, 7, 2, 0, 1, 22, 1, 0, 15, 15, 19, 0, 10, 0, 22, 31, 23, 0, 5, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["SYNTH BASS 2", 16, 1, 31, 16, 1, 31, 1, 4, 1, 10, 4, 0, 1, 20, 1, 0, 15, 29, 9, 27, 9, 0, 21, 14, 17, 0, 14, 8, 0, 0, 0, 2, 0, 0, "UNISON"],
    ["OLD E. PIANO", 8, 2, 17, 16, 4, 31, 1, 4, 0, 14, 4, 1, 1, 14, 1, 0, 13, 26, 21, 0, 11, 0, 9, 27, 23, 0, 8, 3, 0, 2, 2, 2, 0, 0, "POLY 1"],
    ["BRASS IN 5th", 8, 1, 31, 8, 1, 31, 5, 0, 0, 9, 1, 1, 1, 29, 1, 5, 10, 24, 31, 20, 6, 0, 31, 31, 31, 31, 5, 8, 17, 7, 0, 2, 0, 0, "POLY 1"],
    ["DIGI HORNS", 16, 4, 31, 16, 1, 22, 1, 0, 0, 6, 4, 1, 1, 23, 1, 10, 14, 14, 24, 24, 11, 0, 31, 31, 31, 31, 7, 8, 0, 4, 0, 2, 0, 0, "POLY 1"],
    ["PERCUS SYNTH 3", 16, 3, 31, 8, 4, 25, 5, 0, 3, 13, 17, 2, 1, 20, 1, 0, 13, 23, 18, 0, 7, 0, 31, 31, 31, 31, 8, 10, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["TOUCH SENSE VIBES", 16, 8, 24, 16, 8, 0, 1, 3, 3, 12, 9, 2, 1, 11, 1, 0, 12, 17, 8, 0, 22, 0, 12, 21, 24, 28, 20, 4, 0, 1, 5, 2, 0, 0, "POLY 1"],
    ["NOISE DROPS", 16, 3, 0, 8, 8, 0, 1, 0, 31, 36, 28, 2, 2, 0, 0, 31, 31, 31, 16, 0, 4, 0, 24, 13, 15, 12, 8, 10, 11, 0, 0, 0, 1, 0, "POLY 1"],
    ["REVERSE SWEEP", 16, 2, 31, 16, 5, 31, 1, 4, 0, 53, 28, 2, 2, 14, 1, 19, 26, 15, 19, 0, 18, 0, 21, 23, 25, 12, 14, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["FUNK STAB", 16, 2, 17, 8, 1, 20, 1, 5, 0, 44, 7, 2, 1, 6, 1, 12, 24, 31, 26, 16, 10, 0, 31, 14, 26, 31, 3, 8, 7, 31, 0, 2, 0, 0, "POLY 1"],
    ["LONG BEACH", 8, 1, 31, 16, 1, 0, 1, 0, 0, 27, 16, 0, 1, 19, 0, 10, 10, 9, 13, 0, 0, 3, 20, 31, 15, 0, 0, 11, 10, 0, 2, 2, 0, 0, "POLY 1"],
    ["FAST SNELL", 16, 7, 31, 16, 1, 31, 1, 5, 0, 33, 6, 2, 1, 24, 1, 23, 18, 23, 3, 0, 0, 2, 24, 15, 3, 0, 0, 15, 0, 0, 0, 2, 0, 0, "POLY 1"],
    ["WARRIORS", 16, 1, 31, 16, 1, 31, 1, 4, 0, 0, 16, 0, 1, 31, 1, 0, 28, 0, 0, 0, 21, 0, 23, 31, 0, 30, 14, 8, 0, 0, 0, 2, 0, 0, "POLY 1"],
];