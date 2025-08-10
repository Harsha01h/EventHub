// QUIZ QUESTIONS
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "7"],
        answer: "8"
    }
];

let currentQuestion = 0;
let score = 0;

// DOM ELEMENTS
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

// FUNCTION TO LOAD QUESTION
function loadQuestion() {
    let q = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h3>${q.question}</h3>
        ${q.options.map(option => `
            <button class="option-btn">${option}</button>
        `).join('')}
    `;

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.textContent === q.answer) {
                score++;
            }
            nextBtn.style.display = "inline-block";
        });
    });
}

// NEXT BUTTON FUNCTIONALITY
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        quizContainer.innerHTML = `<h3>Quiz Completed!</h3>`;
        scoreDisplay.textContent = `Your score: ${score} / ${quizData.length}`;
        nextBtn.style.display = "none";
    }
});

// INITIAL QUIZ LOAD
loadQuestion();
nextBtn.style.display = "none";

// ================== JOKE API FETCH ==================
const jokeBtn = document.getElementById("joke-btn");
const jokeDisplay = document.getElementById("joke");

jokeBtn.addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
        .then(res => res.json())
        .then(data => {
            if (data.type === "single") {
                jokeDisplay.textContent = data.joke;
            } else {
                jokeDisplay.textContent = `${data.setup} ... ${data.delivery}`;
            }
        })
        .catch(err => {
            jokeDisplay.textContent = "Oops! Could not load a joke.";
            console.error(err);
        });
});
