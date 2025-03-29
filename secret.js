const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

let konamiIndex = 0;
let kittyDisplay = false;

const kitty = document.getElementById("oneko");
kitty.style.display = "none";

document.addEventListener('keydown', (event) => {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.getElementById('konamiSound').play();

            const gif = document.getElementById('confettiGif');
            gif.style.display = 'none';
            gif.src = '';
            gif.src = 'images/confetti.gif';
            gif.style.display = 'block';

            kittyDisplay = !kittyDisplay;
            kitty.style.display = kittyDisplay ? "block" : "none";

            setTimeout(() => {
                gif.style.display = 'none';
            }, 5000);

            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
