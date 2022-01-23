var startEl = document.querySelector("#start-quiz");
var mainSectionEl = document.querySelector("#main-section");
var startSectionEl =  document.querySelector("#start-section");
var answerBtnEl = document.querySelector(".btn");
var timerEl = document.getElementById("countdown");
var questionEl = document.querySelector("#question");
var timeLeft = 75
var timeInterval
var score = []
 
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
};

var endQuiz = function() {
       
    document.getElementById("question-section").style.display = "none";
    document.getElementById("score-section").style.display = "flex";
    clearInterval(timeInterval);
    document.getElementById("score-line").innerHTML = ("Your final score is " + timeLeft + ".");
  };

function checkAnswers(id){
    if (questionIndex >= 4) {
        endQuiz();
    } 
    else{
        if (id === questions[questionIndex].correctAnswer){
            questionIndex++;
            renderQuestions();
        }
        else {
        //deduct time, points, etc
        timeLeft = (timeLeft - 10);
        //call render question function
        questionIndex++;
        renderQuestions();
        }
    }
};

var startTimer = function() {

        timeInterval = setInterval(function() {
        timerEl.textContent = "Time left: " + timeLeft + ".";
        timeLeft--;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
};

var startQuiz = function () {
    startSectionEl.remove();
    document.getElementById("question-section").style.display = "flex"; 
    renderQuestions();
    startTimer(); 

};

var saveScore = function () {
    event.preventDefault();
    var quizerInitial = document.querySelector("input[id='name']").value;

   score = JSON.parse(localStorage.getItem('score')) || [];
    console.log(score)
 
    var scoreObj = {
        initials: quizerInitial,
        timeScore: timeLeft
    }
    score.push(scoreObj);
    document.getElementById("score-section").style.display = "none";
    document.getElementById("display-section").style.display = "flex";

    storeScore();

    for(var i = 0; i < score.length; i++){

        var pTag = document.createElement('p');
        pTag.append(`Initial: ${score[i].initials} - Score: ${score[i].timeScore}`) 

        document.getElementById("display-scores").append(pTag)
    }


};

var storeScore = function () {
    localStorage.setItem("score", JSON.stringify(score));
};

startEl.addEventListener("click", startQuiz);
document.getElementById("buttons").addEventListener("click", function (e) {
    //get id here (you can get it from e.target, just chain on id)
    let id = e.target.getAttribute('id');
    checkAnswers(id);
  });
  document.getElementById("initial").addEventListener("click", saveScore);
  document.getElementById("go-back").addEventListener("click", function() {
      window.location.reload();
  });