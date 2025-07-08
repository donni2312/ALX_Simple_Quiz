function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

document.getElementById('add-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('calculation-result').textContent = add(num1, num2);
});

document.getElementById('subtract-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('calculation-result').textContent = subtract(num1, num2);
});

document.getElementById('multiply-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('calculation-result').textContent = multiply(num1, num2);
});

document.getElementById('divide-btn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    document.getElementById('calculation-result').textContent = divide(num1, num2);
});

function getInputValue(id) {
    const value = document.getElementById(id).value;
    return value === '' ? 0 : parseFloat(value);
}

// Update event listeners to use getInputValue
document.getElementById('add-btn').addEventListener('click', function() {
    const num1 = getInputValue('number1');
    const num2 = getInputValue('number2');
    document.getElementById('calculation-result').textContent = add(num1, num2);
});

document.getElementById('subtract-btn').addEventListener('click', function() {
    const num1 = getInputValue('number1');
    const num2 = getInputValue('number2');
    document.getElementById('calculation-result').textContent = subtract(num1, num2);
});

document.getElementById('multiply-btn').addEventListener('click', function() {
    const num1 = getInputValue('number1');
    const num2 = getInputValue('number2');
    document.getElementById('calculation-result').textContent = multiply(num1, num2);
});

document.getElementById('divide-btn').addEventListener('click', function() {
    const num1 = getInputValue('number1');
    const num2 = getInputValue('number2');
    document.getElementById('calculation-result').textContent = divide(num1, num2);
});