function hsvToHex(h, s, v) {
    s /= 100;
    v /= 100;

    let r, g, b;

    const i = Math.floor(h / 60) % 6;
    const f = h / 60 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);

    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
    }

    const toHex = (x) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}


const valuesColors = [
    hsvToHex(120, 80, 60), // Green
    hsvToHex(90, 80, 60),  // Yellow-Green
    hsvToHex(150, 80, 60), // Spring Green
    hsvToHex(180, 80, 60), // Cyan
    hsvToHex(210, 80, 60), // Azure
    hsvToHex(240, 80, 60), // Blue
    hsvToHex(270, 80, 60), // Indigo
    hsvToHex(300, 80, 60), // Purple
    hsvToHex(330, 80, 60), // Magenta
    hsvToHex(0, 80, 60),   // Red
    hsvToHex(30, 80, 60),  // Orange
    hsvToHex(60, 80, 60),  // Yellow
];

let currentTextColorIndex = 0;

function changeTextColor() {
    currentTextColorIndex = (currentTextColorIndex + 1) % valuesColors.length;
    document.body.style.color = valuesColors[currentTextColorIndex];
    document.getElementsByClassName("things_i_like").style.borderColor = valuesColors[currentTextColorIndex];
}

pfp.addEventListener('click', changeTextColor);