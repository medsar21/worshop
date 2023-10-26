const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        choices: ["Londres", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1,
    },
    {
        question: "Quel est le plus grand mammifère terrestre ?",
        choices: ["Éléphant", "Girafe", "Rhino", "Hippopotame"],
        correctAnswer: 0,
    },
    {
        question: "Combien de continents y a-t-il sur Terre ?",
        choices: ["5", "6", "7", "8"],
        correctAnswer: 2,
    },
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));

function startGame() {
    showQuestion(questions[currentQuestion]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    choices.forEach((choice, index) => {
        choice.innerText = question.choices[index];
        choice.addEventListener("click", () => selectAnswer(index));
    });
}

function selectAnswer(choiceIndex) {
    if (choiceIndex === questions[currentQuestion].correctAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(questions[currentQuestion]);
        } else {
            questionElement.innerText = "Félicitations, vous avez gagné !";
            choices.forEach((choice) => choice.style.display = "none");
            document.getElementById("next-button").style.display = "none";
        }
    } else {
        questionElement.innerText = "Désolé, vous avez perdu.";
        choices.forEach((choice) => choice.style.display = "none");
        document.getElementById("next-button").style.display = "none";
    }
}

document.getElementById("next-button").addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
    }
});

startGame();