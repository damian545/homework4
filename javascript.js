// an area to put your name at the end of the quiz
function validateForm() {
  var x = document.forms["myForm"]["Fname"].value;
  if (x == "") {
    alert("name must be filled ot");
    return false;
  }
}
// variables

var submitButton = addEventListener("click", showResults);
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

// functions
function buildQuiz() {}

function showResults() {}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
// The questions I want answered..
const myQuestions = [
  {
    question: "Is Jason Day a pro golfer?",
    answers: {
      a: "true",
      b: "false",
      C: "dont know"
    },
    correctAnswer: "a"
  },
  {
    question: "Is a Nissan Silvia a drift car in Japan?",
    answers: {
      a: "true",
      b: "false",
      c: "dont know"
    },
    correctAnswer: "a"
  },
  {
    question: "Toothpaste is a food?",
    answers: {
      a: "true",
      b: "false",
      c: "dont know"
    },
    correctAnswer: "b"
  }
];

function buildQuiz() {
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // variable to store the list of possible answers
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {
      // ...add an HTML radio button
      answers.push(
        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
      );
    }

    // add this question and its answers to the output
    output.push(
      `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
    );
  });

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}
myQuestions.forEach((currentQuestion, questionNumber) => {
  // the code we want to run for each question goes here
});
// I want to store the list of answer choices
const answers = [];

// and for each available answer...
for (letter in currentQuestion.answers) {
  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join("")} </div>`
);
quizContainer.innerHTML = output.join("");

function showResults() {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll(".answers");

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach((currentQuestion, questionNumber) => {
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = "lightgreen";
    }
    // if answer is wrong or blank
    else {
      // color the answers red
      answerContainers[questionNumber].style.color = "red";
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}
// gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll(".answers");

// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// a countdown timer at the beginning of the quiz
var Timer = 10;
var checkTimer = false;
var t;
function countDown() {
  document.getElementById("txt").value = Timer--;
  +setInterval(countDown, 1000);
}
function startTimer() {
  if (!checkTimer) {
    checkTimer = true;
  } else {
    console.log("Error!");
  }
}
