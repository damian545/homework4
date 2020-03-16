var q = [
  "Is Jason Day a pro golfer?<br /><br />",
  "Is a Nissan Silvia a drift car in Japan?<br /><br />",
  "Is toothpaste a food?<br /><br />"
];
var a1 = [
  "<button class=button2 onclick=q1c()>true<button</button>",
  "<button class=button2 onclick=q2i()>false</button>"
];
var a2 = [
  "<button class=button2 onclick=q1c()>true<button</button>",
  "<button class=button2 onclick=q2i()>false</button>"
];
var a3 = [
  "<button class=button2 onclick=q1c()>false<button</button>",
  "<button class=button2 onclick=q2i()>true</button>"
];

var c = ["true", "true", "true"];
var i = ["false", "false", "false"];

var n = 0;
n++;

var s = 0;
s++;

function begin1() {
  disappear1.innerHTML = "";
  message1.innerHTML = "";
  question1.innerHTML = q[0];
  option1.innerHTML = a1(0);
  option2.innerHTML = a2(0);
  option3.innerHTML = a3(0);
  number1.innerHTML = n++;
}
function q1c() {
  answer1.innerHTML = c(0);
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button1 onclick=new2()>Next</button>";
  score1.innerHTML = s++;
}
function q2c() {
  answer1.innerHTML = c(0);
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button1 onclick=new2()>Next</button>";
  score1.innerHTML = s++;
}
function q1i() {
  answer1.innerHTML = i(0);
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button1 onclick=new2()>Next</button>";
  score1.innerHTML = s++;
}
function new2() {
  message1.innerHTML = "";
  question1.innerHTML = q[1];
  option1.innerHTML = a1(1);
  option2.innerHTML = a2(1);
  option3.innerHTML = a3(1);
  next1.innerHTML = "";
  answer1.innerHTML = "";
  number1.innerHTML = n++;
}
function q2i() {
  answer1.innerHTML = i(1);
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button1 onclick=new3()>Next</button>";
  score1.innerHTML = s++;
}
function q2c() {
  answer1.innerHTML = c(1);
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML = "<button class=button1 onclick=new3()>Next</button>";
  score1.innerHTML = s++;
}
function new3() {
  message1.innerHTML = "End of quiz";
  question1.innerHTML = "";
  option1.innerHTML = "";
  option2.innerHTML = "";
  option3.innerHTML = "";
  next1.innerHTML =
    "<div id=text1>" + "<button class=button1 onclick=repeat1()</button>";
  answer1.innerHTML = "";
}
function timer() {
  c = c - 1;
  if (c < 10) {
    timer.innerHTML = c;
  }
  if (c < -1) {
    window.clearInterval(update);
  }
}

update = setInterval("timer()", 1000);

function repeat() {
  location.reload();
}
