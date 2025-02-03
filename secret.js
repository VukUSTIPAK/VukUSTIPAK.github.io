const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

let konamiIndex = 0;
let kittyDisplay = false; // Track visibility state of the kitty

const kitty = document.getElementById("oneko");
kitty.style.display = "none";

document.addEventListener('keydown', (event) => {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            document.getElementById('konamiSound').play();

            // Reset the GIF by reloading its src
            const gif = document.getElementById('confettiGif');
            gif.style.display = 'none'; // Hide it first
            gif.src = ''; // Clear the src
            gif.src = 'images/confetti.gif'; // Reset the src
            gif.style.display = 'block'; // Show the GIF

            // Toggle the visibility of the kitty
            kittyDisplay = !kittyDisplay;
            kitty.style.display = kittyDisplay ? "block" : "none";

            // Hide the GIF after 5 seconds
            setTimeout(() => {
                gif.style.display = 'none';
            }, 5000);

            konamiIndex = 0; // Reset for next use
        }
    } else {
        konamiIndex = 0; // Reset if wrong key is pressed
    }
});
