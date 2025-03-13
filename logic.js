document.addEventListener("DOMContentLoaded", function () {
    const quoteContainer = document.getElementById("quote-container");
    const inputField = document.getElementById("input");
    const resultContainer = document.getElementById("result-container");
    const restartButton = document.getElementById("restart");
    const enterButton = document.getElementById("enter");

    let startTime, endTime;
    let quoteText = "";

    const quotes = [
        "The quick brown fox jumps over the lazy dog",
        "Coding is fun when the logic works perfectly",
        "Practice typing to improve your speed and accuracy",
        "JavaScript makes the web dynamic and interactive",
        "A good developer writes maintainable and clean code"
    ];

    function setNewQuote() {
        quoteText = quotes[Math.floor(Math.random() * quotes.length)];
        quoteContainer.textContent = quoteText;
        inputField.value = "";
        resultContainer.style.display = "none";  // Hide results
        startTime = null;
        endTime = null;
    }

    function calculateSpeedAndAccuracy() {
        if (!startTime) return;

        endTime = new Date();
        const typedText = inputField.value.trim();
        const totalTime = (endTime - startTime) / 1000 / 60; // Convert ms to minutes
        const wordsTyped = typedText ? typedText.split(/\s+/).length : 0;
        const wpm = totalTime > 0 ? Math.round(wordsTyped / totalTime) : 0;

        
        let correctChars = 0;
        for (let i = 0; i < Math.min(typedText.length, quoteText.length); i++) {
            if (typedText[i] === quoteText[i]) {
                correctChars++;
            }
        }
        const accuracy = quoteText.length > 0 ? ((correctChars / quoteText.length) * 100).toFixed(2) : 100;

        resultContainer.innerHTML = `WPM: ${wpm} | Accuracy: ${accuracy}%`;
        resultContainer.style.display = "block";
    }

    inputField.addEventListener("input", () => {
        if (!startTime) {
            startTime = new Date();
        }
    });
    
    enterButton.addEventListener("click", calculateSpeedAndAccuracy);
    restartButton.addEventListener("click", setNewQuote);

    setNewQuote();
});
