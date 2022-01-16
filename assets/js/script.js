var startEl = document.querySelector("#start-quiz");
var mainSectionEl = document.querySelector("#main-section");
var startSectionEl =  document.querySelector("#start-section");
var answerBtnEl = document.querySelector(".btn");
var timerEl = document.getElementById("countdown");
var questionEl = document.querySelector("#question");
var timeLeft = 75
var questions = [
    {title: 'Commonly used date types DO NOT include:',
    answer: { a: "1. Strings", b: "2. Booleans", c: "3. Buttons", d: "4. Nubmbers"}, correctAnswer: "c",},
    {title: 'The condition in an if / else statement is enclosed with ______',
    answer: { a: "1. quotes", b: "2. curly brackets", c: "3. parenthesis", d: "4. square brackets"}, correctAnswer: "c", },
    {title: 'Arrays in JavaScript can be used to store',
    answer: { a: "1. numbers and strings", b: "2. other arrays", c: "3. booleans", d: "4. all of the above"}, correctAnswer: "d",}, 
    {title: 'String values must be enclosed within ______ when being assigned to variables.',
    answer: { a: "1. commas", b: "2. curly brackets", c: "3. quotes", d: "4. parenthesis"}, correctAnswer: "c",},
    {title: 'A very useful tool during development and debugging for printing content to the debugger is:',
    answer: { a: "1. JavaScript", b: "2. terminal/bash", c: "3. for loops", d: "4. console.log"}, correctAnswer: "d"},
]
var questionIndex = 0;

var renderQuestions = function () {
    if (questionIndex >= questions.length) return;
    var q = questions[questionIndex];

    questionEl.innerHTML = q.title;
    Object.entries(q.answer).forEach(([letter,text]) => {
        const but = document.getElementById(letter);
        but.innerHTML = text
        but.dataset.correct = q.correctAnswer === letter;
    })
    questionIndex++;
}
    

var startTimer = function() {

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time left: " + timeLeft + ".";
        timeLeft--;
    }, 1000);
};

var startQuiz = function () {
    startSectionEl.remove();
    document.getElementById("question-section").style.display = "flex"; 
    renderQuestions();
    startTimer(); 

};



startEl.addEventListener("click", startQuiz);
document.getElementById("buttons").addEventListener("click", function(e){
    const tgt = e.target;
    if (!tgt.dataset.correct) {
        timeLeft = (timeLeft - 10);
        renderQuestions();
    } else {
        renderQuestions();
    }
});