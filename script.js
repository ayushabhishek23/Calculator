function appendToDisplay(value) {
    document.getElementById('result').textContent += value;
}

function clearDisplay() {
    document.getElementById('result').textContent = '';
}

function deleteLast() {
    let currentValue = document.getElementById('result').textContent;
    document.getElementById('result').textContent = currentValue.slice(0, -1);
}

function calculateResult() {
    let currentValue = document.getElementById('result').textContent;
    try {
        let result = eval(currentValue);
        document.getElementById('result').textContent = result;
    } catch (e) {
        document.getElementById('result').textContent = 'Error';
    }
}
