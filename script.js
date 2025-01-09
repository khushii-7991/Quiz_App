// Step 1: Define quiz data
const quizData = [
    {
        question: "HTML stands for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Transfer Protocol",
            "Hypertext Markup and Linking Language",
            "Home Tool Markup Language",
        ],
        correct: 0,
    },
    {
        question: "CSS stands for?",
        options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        options: ["margin", "padding", "spacing", "background"],
        correct: 1,
    },
    {
        question: "Which CSS property is used to control the font size of the text?",
        options: ["font-size", "font-weight", "font-style", "font-family"],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["ul", "ol", "dl", "li"],
        correct: 1,
    },
];

// Step 2: JavaScript Initialization
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll('.answer');
const [quesElm, option_1, option_2, option_3, option_4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

let currentQuiz = 0;
let score = 0;

// Step 3: Load Quiz Function
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    quesElm.innerHTML = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `Score: ${score}/${quizData.length}`;

    options.forEach(
        (curOption, idx) => (window[`option_${idx + 1}`].innerHTML = curOption)
    );

    // Handle button visibility
    if (currentQuiz === quizData.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "block";
    } else {
        nextBtn.style.display = "block";
        submitBtn.style.display = "none";
    }
};
loadQuiz();

// Step 4: Get Selected Option
const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
};

// Step 5: Deselect Answers
const deselectAnswers = () => {
    answerElm.forEach((curElem) => (curElem.checked = false));
};

// Step 6: Next Button Logic
nextBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        deselectAnswers();
        loadQuiz();
    }
});

// Step 7: Submit Button Logic
submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score++;
    }

    alert(`Quiz completed! Your final score is ${score}/${quizData.length}`);
});
