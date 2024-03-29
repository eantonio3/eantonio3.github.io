
window.onload = function () {
    let numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach(button => {
        button.onclick = function () {
            appendToDisplay(button.innerText);
        };
    });

    let decimalButton = document.querySelector('.decimal');
    decimalButton.onclick = function () {
        appendToDisplay('.');
    };

    let clearButton = document.querySelector('.clear');
    clearButton.onclick = function () {
        if (clearButton.innerText === 'C') {
            clearLastCharacter();
        } else {
            clearDisplay();
        }
    };

    let operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
        button.onclick = function () {
            appendToDisplay(button.innerText);
        };
    });

    let equalButton = document.querySelector('.equal');
    equalButton.onclick = function () {
        calculate();
    };

    document.addEventListener('keydown', function (event) {
        let keyValue = event.key;
        if (!isNaN(parseInt(keyValue))) {
            appendToDisplay(keyValue);
        } else if (keyValue === '.') {
            appendToDisplay(keyValue);
        } else if (keyValue === 'Enter') {
            calculate();
        } else if (keyValue === 'c' || keyValue === 'C') {
            clearDisplay();
        } else if (keyValue === 'Backspace') {
            // Delete the last character
            let currentValue = document.getElementById('display').value;
            document.getElementById('display').value = currentValue.slice(0, -1);
        } else if (keyValue === 'Delete') {
            clearDisplay();
        } else if (['+', '-', '*', '/'].includes(keyValue)) {
            appendToDisplay(keyValue);
        }
    });
};

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.querySelector('.clear').innerText = 'C';
}

function clearLastCharacter() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
    if (currentValue.length === 1) {
        document.querySelector('.clear').innerText = 'CE';
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let operators = ['+', '-', '*', '/'];

    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let parts = displayValue.split(operator);
        if (parts.length === 2) {
            let a = parseFloat(parts[0]);
            let b = parseFloat(parts[1]);
            let result;
            switch (operator) {
                case '+':
                    result = add(a, b);
                    break;
                case '-':
                    result = subtract(a, b);
                    break;
                case '*':
                    result = multiply(a, b);
                    break;
                case '/':
                    result = divide(a, b);
                    break;
            }
            document.getElementById('display').value = result;
            return;
        }
    }
    document.getElementById('display').value = 'Error';
}