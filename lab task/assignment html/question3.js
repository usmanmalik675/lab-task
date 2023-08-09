// script.js
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const countDisplay = document.getElementById("countDisplay");

let count = 0;

function updateDisplay() {
    countDisplay.textContent = count;
}

decrementBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateDisplay();
    }
});

incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

updateDisplay();
