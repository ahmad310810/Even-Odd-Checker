// ================================
// SELECT ELEMENTS
// ================================

const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const resultIcon = document.querySelector(".result-icon");


// ================================
// CHECK NUMBER
// ================================

function checkNumber() {

    const value = numberInput.value.trim();

    // Empty input
    if (value === "") {

        result.classList.remove("even", "odd");

        resultIcon.textContent = "!";
        resultText.textContent = "Please enter a number";

        showAnimation();

        numberInput.focus();

        return;
    }

    const number = Number(value);

    // Check even or odd
    if (number % 2 === 0) {

        result.classList.remove("odd");
        result.classList.add("even");

        resultIcon.textContent = "✓";
        resultText.textContent = `${number} is an Even Number`;

    } else {

        result.classList.remove("even");
        result.classList.add("odd");

        resultIcon.textContent = "!";
        resultText.textContent = `${number} is an Odd Number`;
    }

    showAnimation();
}


// ================================
// RESULT ANIMATION
// ================================

function showAnimation() {

    result.classList.remove("show");

    // Force browser to restart animation
    void result.offsetWidth;

    result.classList.add("show");
}


// ================================
// RESET
// ================================

function resetChecker() {

    numberInput.value = "";

    result.classList.remove("even", "odd", "show");

    resultIcon.textContent = "?";

    resultText.textContent = "Enter a number";

    numberInput.focus();
}


// ================================
// BUTTON EVENTS
// ================================

checkBtn.addEventListener("click", checkNumber);

resetBtn.addEventListener("click", resetChecker);


// ================================
// ENTER KEY
// ================================

numberInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkNumber();
    }

});