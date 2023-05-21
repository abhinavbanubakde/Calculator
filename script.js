        // Function to add characters to the display
        function addToDisplay(char) {
            var display = document.getElementById("display");
            display.value += char;
        }

        // Function to delete the last character from the display
        function deleteLastCharacter() {
            var display = document.getElementById("display");
            display.value = display.value.slice(0, -1);
        }

        // Function to calculate the result
        function calculate() {
            var display = document.getElementById("display");
            var expression = display.value;
            var result = eval(expression);
            display.value = result;
        }

        // Function to clear the display
        function clearDisplay() {
            var display = document.getElementById("display");
            display.value = '';
        }