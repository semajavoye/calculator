let display = document.getElementById('display');
        let currentValue = '';

        function appendValue(value) {
            currentValue += value;
            display.innerHTML = currentValue;
        }

        function appendOperator(operator) {
            currentValue += ` ${operator} `;
            display.innerHTML = currentValue;
        }

        function clearDisplay() {
            currentValue = '';
            display.innerHTML = currentValue;
        }

        function calculateResult() {
            try {
                currentValue = eval(currentValue);
                display.innerHTML = currentValue;
            } catch (error) {
                display.innerHTML = 'Error';
            }
        }