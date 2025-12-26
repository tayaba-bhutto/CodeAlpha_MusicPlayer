let display = document.getElementById("display");

function append(value) {
    if (display.value === "0") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function calculate() {
    try {
        let expression = display.value
            .replace(/×/g, "*")
            .replace(/÷/g, "/");
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

/* Keyboard Support */
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        append(key);
    }
    if (key === "+" || key === "-" || key === "*" || key === "/") {
        append(key === "*" ? "×" : key === "/" ? "÷" : key);
    }
    if (key === "Enter") {
        calculate();
    }
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1) || "0";
    }
    if (key === "Escape") {
        clearDisplay();
    }
});
