const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed is a skill that improves with practice.",
    "Fast and accurate typing saves time.",
    "Every moment is a fresh beginning.",
    "Simplicity is the soul of efficiency."
];

let startTime, quoteText;

function loadQuote() {
    quoteText = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = quoteText;
    document.getElementById("input").value = "";
    document.getElementById("wpm").innerText = "";
    document.getElementById("accuracy").innerText = "";
    startTime = null;
}

function startTimer() {
    if (!startTime) startTime = new Date();
}

function calculateSpeed() {
    const inputText = document.getElementById("input").value.trim();
    if (!startTime) return;

    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordsTyped = quoteText.split(" ").length;
    const wordsPerMinute = Math.round((wordsTyped / timeTaken) * 60);

    // Accuracy Calculation
    let correctChars = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === quoteText[i]) correctChars++;
    }
    const accuracy = Math.round((correctChars / quoteText.length) * 100);

    // Display WPM and Accuracy
    document.getElementById("wpm").innerText = `WPM: ${wordsPerMinute}`;
    document.getElementById("accuracy").innerText = `Accuracy: ${accuracy}%`;
}

function restartTest() {
    loadQuote();
}

document.getElementById("input").addEventListener("input", startTimer);
document.addEventListener("DOMContentLoaded", loadQuote);
