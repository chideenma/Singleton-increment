var counterInstance = {
    increament: function () {
        let userInput = parseInt(document.getElementById('userInput').value, 10) || 0;
        userInput++;
        document.getElementById('userInput').value = userInput;
    },
    decreament: function () {
        let userInput = parseInt(document.getElementById('userInput').value, 10) || 0;
        userInput--;
        document.getElementById('userInput').value = userInput;
    }
  };