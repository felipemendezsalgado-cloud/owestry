function calculateResult() {
    const form = document.getElementById('quizForm');
    let totalScore = 0;
    const totalQuestions = 9;
    let allAnswered = true;

    for (let i = 1; i <= totalQuestions; i++) {
        const questionName = 'q' + i;
        const selectedOption = form.elements[questionName];

        if (selectedOption && selectedOption.value) {
            totalScore += parseInt(selectedOption.value, 10);
        } else {
            allAnswered = false;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    if (allAnswered) {
        const finalResult = totalScore * 2;
        resultDiv.innerHTML = 'Tu puntuación final es: ' + finalResult;
    } else {
        resultDiv.innerHTML = 'Por favor, responde todas las preguntas antes de calcular el resultado.';
    }
}
