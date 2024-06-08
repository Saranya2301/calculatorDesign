// Function to append the clicked button value to the display
function appendToDisplay(value) {
    document.getElementById("result").value += value;
}

// Function to clear the last entry or clear everything
function clearEntry() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById("result").value = "";
}

// Function to perform backspace operation
function backspace() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.substring(0, currentValue.length - 1);
}

// Function to toggle the sign of the number
function toggleSign() {
    let currentValue = document.getElementById("result").value;
    if (currentValue !== "") {
        document.getElementById("result").value = -parseFloat(currentValue);
    }
}

// Function to calculate the result
function calculateResult() {
    let expression = document.getElementById("result").value;
    try {
        let result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid expression!");
    }
}
