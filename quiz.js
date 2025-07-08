function checkAnswer() {
    // Function to check the answer

    let correctAnswer = "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;
    let feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

    // Add event listener to the "Submit Answer" button
    const submitBtn = document.getElementById('submit-answer');
    submitBtn.addEventListener('click', checkAnswer);
}