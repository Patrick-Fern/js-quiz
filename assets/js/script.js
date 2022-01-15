var startEl = document.querySelector("#start-quiz");
var mainSectionEl = document.querySelector("#main-section");
var startSectionEl =  document.querySelector("#start-section");
var timerEl = document.getElementById("countdown")
var timeLeft = 75
var questions = [
    {title: 'Commonly used date types DO NOT include:',
    answers: ["1. Strings", "2. Booleans", "3. Buttons", "4. Nubmbers"]},
    {title: 'The condition in an if / else statement is enclosed with ______',
    answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]},
    {title: 'Arrays in JavaScript can be used to store',
    answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]}, 
    {title: 'String values must be enclosed within ______ when being assigned to variables.',
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]},
    {title: 'A very useful tool during development and debugging for printing content to the debugger is:',
    answers: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"]}
]

var  displayQuestion = function(data){
    console.log('inside create question')
    var questionTitle = document.createElement('h1');
    var answerOne = document.createElement('button');
    var answerTwo = document.createElement('button');
    var answerThree = document.createElement('button');
    var answerFour = document.createElement('button');

    answerOne.setAttribute("id", "btn1");
    answerTwo.setAttribute("id", "btn2");
    answerThree.setAttribute("id", "btn3");
    answerFour.setAttribute("id", "btn4");


    answerOne.append(data.answers[0]);
    answerTwo.append(data.answers[1]);
    answerThree.append(data.answers[2]);
    answerFour.append(data.answers[2]);

    questionTitle.append(data.title);

    mainSectionEl.append(questionTitle)
    mainSectionEl.append(answerOne)
    mainSectionEl.append(answerTwo)
    mainSectionEl.append(answerThree)
    mainSectionEl.append(answerFour)

    answerOne.addEventListener("click");
    answerTwo.addEventListener("click");
    answerThree.addEventListener("click");
    answerFour.addEventListener("click");
    
}

var startTimer = function() {

    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time left: " + timeLeft + ".";
        timeLeft--;
    }, 1000);
}

var startQuiz = function () {
    startSectionEl.remove();

    startTimer(); 

    displayQuestion();

};








startEl.addEventListener("click", startQuiz);