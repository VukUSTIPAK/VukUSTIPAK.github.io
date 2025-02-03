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


const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
const pfp = document.getElementById('pfp');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

const cols = Math.floor(canvas.width / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#0000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const values = [
    hsvToHex(120, 39, 16), // Green
    hsvToHex(90, 39, 16),  // Yellow-Green
    hsvToHex(150, 39, 16), // Spring Green
    hsvToHex(180, 39, 16), // Cyan
    hsvToHex(210, 39, 16), // Azure
    hsvToHex(240, 39, 16), // Blue
    hsvToHex(270, 39, 16), // Indigo
    hsvToHex(300, 39, 16), // Purple
    hsvToHex(330, 39, 16), // Magenta
    hsvToHex(0, 39, 16),   // Red
    hsvToHex(30, 39, 16),  // Orange
    hsvToHex(60, 39, 16),  // Yellow
];

let currentColorIndex = 0;

function matrix() {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = values[currentColorIndex];
    ctx.font = '20pt monospace';

    const japaneseChars = 'あいいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    ypos.forEach((y, ind) => {
        const text = japaneseChars.charAt(Math.floor(Math.random() * japaneseChars.length));
        const x = ind * 20;
        ctx.fillText(text, x, y);

        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
}

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % values.length;
}

pfp.addEventListener('click', changeColor);

setInterval(matrix, 50);