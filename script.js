const shootButton = document.getElementById('shootButton');

//Create an event listener for the shoot button.
shootButton.addEventListener('click', function() {
    const userInputElement = document.getElementById('userInput');
//Validate the users input 
    const userInput = userInputElement.value.toLowerCase();
    const validChoices = ['rock', 'paper', 'scissors'];
    const resultDiv = document.getElementById('result');

    if (validChoices.indexOf(userInput) === -1) {
        resultDiv.textContent = 'Invalid input! Please enter rock, paper, or scissors.';
        return;
    }
//Computers random choices for playing against the user
    const randomIndex = Math.floor(Math.random() * validChoices.length);
    const computerChoice = validChoices[randomIndex];
    resultDiv.textContent = 'CPU chose: ' + computerChoice;

//This else if statement checks to see if the user or computer won or ended in a tie after the user types their play choice.
    if (userInput === computerChoice) {
        resultDiv.textContent = resultDiv.textContent + ' - GASP a tie :o';
    } else if ((userInput === 'rock' && computerChoice === 'scissors') ||
               (userInput === 'paper' && computerChoice === 'rock') ||
               (userInput === 'scissors' && computerChoice === 'paper')) {
        resultDiv.textContent = resultDiv.textContent + ' - You winner you ;)';
    } else {
        resultDiv.textContent = resultDiv.textContent + ' - Hahaha CPU wins again!';
    }
});
