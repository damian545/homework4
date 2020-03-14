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
// this is to check only one box at a time..
$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});

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

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
);
{
  function showQuestions(questions, quizContainer){}; 
  // a place to store the output and the answer choices
  var output = [];
  var answers;
  // for each question...
  for (var i = 0; i < questions.length; i++) {
    // reset the list of answers for each available answer..
    answers = [];
  
    for (letter in questions[i].answers) {
      // add a html radio button
      answers.push(
        "<label>" +
          '<input type="radio" name="question' +
          i +
          '"value ="' +
          letter +
          '">' +
          letter +
          ":" +
          questions[i].answer[letter] +
          "</label>"
      );
    }
    // add this question and its answer to the output
    output.push(
      '<div class="question">' +
        questions[i].question +
        "</div>" +
        '<div class="answers>"' +
        answers.join("") +
        "</div>"
    );
  }
}
// finally conbine our output list into one string of html and put in on the page
quizContainer.innerHTML = output.join("");

function showResults(questions, quizContainer, resultsContainer) {
  // gather answer containers from the quiz
  var answerContainer = quizContainer.querySelectorAll(".answers");
  // keep track ofthe user's answers for each question in a loop
  var userAnswer = "";
  var numCorrect = 0;
  for (var i = 0; i < questions.length; i++) {
    // find selected answer
    userAnswer = (
      answerContainers[i].querySelector(
        "input{name=question" + i + "]:checked"
      ) || {}
    ).value;
    // add to the number of correct answers
    if (userAnswer === questions[i].correctAnswer) {
      numCorrect++;
      answerContainers[i].style.color = "lightgreen";
    } else {
      answerContainers[i].style.color = "red";
    }
  }
  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
}
// show questions right away
showQuestions(questions, quizContainer);
// on submit, show results
submitButton.onclick = function() {
  showResults(questions, quizContainer, resultsContainer);
};
// an area to put your name at the end of the quiz
function validateForm() {
  var x = document.forms["myForm"]["Fname"].value;
  if (x == "") {
    alert("name must be filled ot");
    return false;
  }
}
