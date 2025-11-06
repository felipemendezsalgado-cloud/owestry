function calculateResult() {
    const form = document.getElementById('quizForm');
    let totalScore = 0;
    let answeredQuestions = 0;
    const totalQuestions = 9;

    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const selectedOption = form.elements[questionName];

        if (selectedOption && selectedOption.value) {
            totalScore += parseInt(selectedOption.value, 10);
            answeredQuestions++;
        }
    }

    const resultDiv = document.getElementById('result');
    if (answeredQuestions > 0) {
        const finalResult = (totalScore / (5 * answeredQuestions)) * 100;
        resultDiv.innerHTML = 'Tu puntuación final es: ' + finalResult.toFixed(2) + '%';
    } else {
        resultDiv.innerHTML = 'Por favor, responde al menos una pregunta.';
    }
}
