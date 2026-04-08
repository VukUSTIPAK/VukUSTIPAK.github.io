const CODE_LENGTH = 4;
const VALUE_COUNT = 6;
const SYMBOLS = ["🦉", "♣️", "♠️", "❤️", "♦️", "⭐"];
const VALUE_TO_SYMBOL = SYMBOLS;
const ALL_CODES = [];
const candidates = [];
let currentGuess = "";

function buildAllCodes() {
    for (let a = 0; a < VALUE_COUNT; a += 1) {
        for (let b = 0; b < VALUE_COUNT; b += 1) {
            for (let c = 0; c < VALUE_COUNT; c += 1) {
                for (let d = 0; d < VALUE_COUNT; d += 1) {
                    ALL_CODES.push(`${a}${b}${c}${d}`);
                }
            }
        }
    }
}

function feedback(secret, guess) {
    let exact = 0;
    const secretCounts = Array(VALUE_COUNT).fill(0);
    const guessCounts = Array(VALUE_COUNT).fill(0);

    for (let i = 0; i < CODE_LENGTH; i += 1) {
        const s = Number(secret[i]);
        const g = Number(guess[i]);
        if (s === g) {
            exact += 1;
        } else {
            secretCounts[s] += 1;
            guessCounts[g] += 1;
        }
    }

    let near = 0;
    for (let value = 0; value < VALUE_COUNT; value += 1) {
        near += Math.min(secretCounts[value], guessCounts[value]);
    }

    return `${exact},${near}`;
}

function filterCandidates(guess, response) {
    return candidates.filter((code) => feedback(code, guess) === response);
}

function scoreGuess(guess, list) {
    const partitions = new Map();
    for (const secret of list) {
        const key = feedback(secret, guess);
        partitions.set(key, (partitions.get(key) || 0) + 1);
    }

    let maxSize = 0;
    for (const size of partitions.values()) {
        if (size > maxSize) {
            maxSize = size;
        }
    }
    return maxSize;
}

function bestGuess(list) {
    let best = null;
    let bestScore = Infinity;

    for (const guess of ALL_CODES) {
        const score = scoreGuess(guess, list);
        if (score < bestScore) {
            bestScore = score;
            best = guess;
        } else if (score === bestScore) {
            if (best !== null && !list.includes(best) && list.includes(guess)) {
                best = guess;
            }
        }
    }

    return best !== null ? best : list[0];
}

function formatCode(code) {
    return code.split("").map((digit) => VALUE_TO_SYMBOL[Number(digit)]).join("");
}

function updateCurrentGuessDisplay() {
    const display = document.getElementById("current-guess");
    display.textContent = currentGuess.length === 0 ? "----" : formatCode(currentGuess);
}

function updateSuggestedDisplay() {
    const suggested = document.getElementById("suggested-value");
    if (candidates.length === 0) {
        suggested.textContent = "Nije moguće";
    } else {
        const guess = bestGuess(candidates);
        suggested.textContent = formatCode(guess);
    }
    updateRemainingCount();
}

function updateRemainingCount() {
    const remaining = document.getElementById("remaining-count");
    remaining.textContent = `Preostale mogućnosti: ${candidates.length}`;
}

function setMessage(text, isError = true) {
    const message = document.getElementById("message");
    message.textContent = text;
    message.style.color = isError ? "#b00" : "#080";
}

function clearMessage() {
    setMessage("", false);
}

function resetSolver() {
    candidates.length = 0;
    candidates.push(...ALL_CODES);
    currentGuess = "";
    document.querySelector("#output tbody").innerHTML = "";
    document.getElementById("correct").value = "0";
    document.getElementById("near").value = "0";
    updateCurrentGuessDisplay();
    updateSuggestedDisplay();
    clearMessage();
}

function appendValue(value) {
    if (currentGuess.length >= CODE_LENGTH) {
        setMessage("Već imaju 4 simbola.");
        return;
    }
    currentGuess += String(value);
    updateCurrentGuessDisplay();
    clearMessage();
}

function submitGuess() {
    clearMessage();
    if (currentGuess.length !== CODE_LENGTH) {
        setMessage("Treba 4 simbola.");
        return;
    }

    const correctInput = document.getElementById("correct");
    const nearInput = document.getElementById("near");
    const exact = Number(correctInput.value);
    const near = Number(nearInput.value);

    if (exact < 0 || near < 0 || exact + near > CODE_LENGTH) {
        setMessage("Brojevi moraju biti od 0 do 4.");
        return;
    }

    const guess = currentGuess;
    const response = `${exact},${near}`;
    const row = document.createElement("tr");
    row.innerHTML = `<td>${formatCode(guess)}</td><td>${exact}</td><td>${near}</td>`;
    document.querySelector("#output tbody").appendChild(row);
    document.getElementById("correct").value = "0";
    document.getElementById("near").value = "0";

    if (exact === CODE_LENGTH) {
        setMessage(`Rješenje je ${formatCode(guess)}.`, false);
        candidates.length = 0;
        updateSuggestedDisplay();
        currentGuess = "";
        updateCurrentGuessDisplay();
        return;
    }

    const nextCandidates = filterCandidates(guess, response);
    candidates.length = 0;
    candidates.push(...nextCandidates);

    if (candidates.length === 0) {
        setMessage("Nema pronađenih rješenja.");
    }

    currentGuess = "";
    updateCurrentGuessDisplay();
    updateSuggestedDisplay();
}

function init() {
    buildAllCodes();
    resetSolver();

    document.querySelectorAll("#symbol-buttons button").forEach((button) => {
        button.addEventListener("click", () => {
            appendValue(button.dataset.value);
        });
    });

    document.getElementById("clear-guess").addEventListener("click", () => {
        currentGuess = "";
        updateCurrentGuessDisplay();
        clearMessage();
    });

    document.getElementById("submit-guess").addEventListener("click", submitGuess);
}

init();
