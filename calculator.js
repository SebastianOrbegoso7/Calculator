const calculationInput = document.getElementById('calculationInput');

function appendValue(value) {
    const lastChar = calculationInput.value.slice(-1);

    if (calculationInput.value === '' && ['+', '-', '*', '/', '^'].includes(value)) {
        calculationInput.value = 'Error';
        console.log('Error');
    } else if (['+', '-', '*', '/', '^'].includes(lastChar) && ['+', '-', '*', '/', '^'].includes(value)) {
        calculationInput.value = 'Error';
        console.log('Error');
    } else {
        calculationInput.value += value;
    }
}

function calculateResult() {
    if (calculationInput.value === '') {
        calculationInput.value = 'Error';
        console.log('Error');
    } else {
        let result;
        try {
            const expression = calculationInput.value;
            const processedExpression = expression.replace(/-(\d+(\.\d+)?)/g, '(-1)*$1');
            result = math.evaluate(processedExpression);
            if (Number.isFinite(result)) {
                if (Number.isInteger(result)) {
                    calculationInput.value = result;
                    console.log(result);
                } else {
                    calculationInput.value = result.toFixed(2);
                    console.log(result.toFixed(2));
                }
            } else {
                calculationInput.value = 'Error';
                console.log('Error');
            }
        } catch (error) {
            calculationInput.value = 'Error';
            console.log('Error');
        }
    }
}

function negativeSign() {
    const lastNumberMatch = calculationInput.value.match(/[-]?\d+(\.\d+)?$/);
    if (lastNumberMatch !== null) {
        const lastNumber = lastNumberMatch[0];
        const newNumber = lastNumber;
        calculationInput.value = calculationInput.value.replace(/[-]?\d+(\.\d+)?$/, `-(${newNumber})`);
    }
}

function deleteChar() {
    calculationInput.value = calculationInput.value.slice(0, -1);
}

function clearInput() {
    calculationInput.value = '';
}