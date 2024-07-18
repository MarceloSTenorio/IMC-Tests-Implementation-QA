const denyKeys = new Set(["-", "+", "e"]);
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDisplay = document.getElementById("result");
const numberDisplay = document.getElementById("number");

if (!weightInput || !heightInput) {
    console.error("Missing one or more required DOM elements.");
    throw new Error("Missing required DOM elements");
}

function calculate() {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value) / 100;
    if (weight > 0 && height > 0) {
        let IMCResult = weight / (height * height);
        let IMCFormatted = IMCResult.toFixed(2);

        numberDisplay.textContent = IMCFormatted;

        let imcResult;

        switch (true) {
            case (IMCResult < 18.5):
                imcResult = "Abaixo do peso";
                break;
            case (IMCResult < 25):
                imcResult = "Normal";
                break;
            case (IMCResult < 30):
                imcResult = "Sobrepeso";
                break;
            case (IMCResult < 40):
                imcResult = "Obesidade";
                break;
            default:
                imcResult = "Obesidade grave";
                break;
        }

        resultDisplay.textContent = imcResult;
    } else {
        numberDisplay.textContent = "--.-";
        resultDisplay.textContent = "IMC";
    }
}

function logKey(event) {
    if (denyKeys.has(event.key)) {
        event.preventDefault();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    weightInput.addEventListener("input", calculate);
    weightInput.addEventListener("keydown", logKey);
    heightInput.addEventListener("input", calculate);
    heightInput.addEventListener("keydown", logKey);
});