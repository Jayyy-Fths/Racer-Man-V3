document.addEventListener('DOMContentLoaded', () => {
  const raceForm = document.getElementById('raceForm');
  const outputDiv = document.getElementById('output');
  const resetButton = document.getElementById('resetButton');

  raceForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form refresh

    // Get values from the form
    const age = parseInt(document.getElementById('age').value);
    const registeredEarly = document.getElementById('registration').value === 'yes';

    // Validate age input
    if (isNaN(age) || age < 0) {
      outputDiv.textContent = 'Please enter a valid age!';
      outputDiv.style.display = 'block';
      return;
    }

    // Generate a random race number
    let raceNumber = Math.floor(Math.random() * 1000);

    // Add 1000 to race number for early adult registrants
    if (age > 18 && registeredEarly) {
      raceNumber += 1000;
    }

    // Determine race time
    let outputMessage;
    if (age > 18 && registeredEarly) {
      outputMessage = `Runner ${raceNumber} will race at 9:30 am.`;
    } else if (age > 18 && !registeredEarly) {
      outputMessage = `Runner ${raceNumber} will race at 11:00 am.`;
    } else if (age < 18) {
      outputMessage = `Runner ${raceNumber} will race at 12:30 pm.`;
    } else {
      outputMessage = `Runner ${raceNumber} should see the registration desk.`;
    }

    // Display the result
    outputDiv.textContent = outputMessage;
    outputDiv.style.display = 'block';
  });

  // Clear output when resetting the form
  resetButton.addEventListener('click', () => {
    outputDiv.style.display = 'none';
    outputDiv.textContent = '';
  });
});
