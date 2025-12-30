const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            {text: 'Berlin', correct: false},
            {text: 'Madrid', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Rome', correct: false},
        ]
    },
    {
        question: 'How many continents are there?',
        answers: [
            {text: '5', correct: false},
            {text: '6', correct: false},
            {text: '7', correct: true},
            {text: '8', correct: false},
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            {text: 'Venus', correct: false},
            {text: 'Jupiter', correct: false},
            {text: 'Saturn', correct: false},
            {text: 'Mars', correct: true},
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            {text: 'Pacific Ocean', correct: true},
            {text: 'Arctic Ocean', correct: false},
            {text: 'Indian Ocean', correct: false},
            {text: 'Atlantic Ocean', correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: 'Vincent van Gogh', correct: false},
            {text: 'Leonardo da Vinci', correct: true},
            {text: 'Michelangelo', correct: false},
            {text: 'Pablo Picasso', correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHtml = answer.text;
        button.classList.add('app__button');
        answerButton.appendChild(button)
    })
}