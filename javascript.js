var question = [
  "There are 9 continents in the world.",
  "There are no islands on Earth.",
  "Ostriches have two toes on each leg.",
  "Jason Day is a pro golfer.",
  "Is a Nissan Silvia a drift car in Japan.",
  "Golf balls predominatly green.",
  "Australia has the most friendliest snakes in the world.",
  "Does Lake Victoria in Uganda have the most violent thunderstorms in the world."
];
var options1 = [
  "<button class=buttons1 onclick=q1i()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];
var options2 = [
  "<button class=buttons1 onclick=q1c()>False</button><br /><br /><buttons1 onclick=q1c()>True</button>"
];
function timer(){
    c = c -1;
    if (c) <200) {
        timer.innerHTML = c;
        window.clearInterval(update);
        {
            
            update = setInterval("timer()", 100);
        }
    }
}

var a = 0;
a++;
var b = 0;
b++;
<text>Score: <text id="Score">0</text></text><br/>
<text>Time: <text id="Timer">200</text></text><br/>

message1.innerHTML = "Time's up!";

function begin1() {
  disappear1.innerHTML = "";
  message1.innerHTML = question1[0];
  message2.innerHTML = options1;
  number1.innerHTML = a++;
}

function q1c() {
  message3.innerHTML = "Correct";
  message2.innerHTML = "";
  score1.innerHTML = b++;
  message4.innerHTML = "<button class=buttons1 onclick=next1()>Next</button>";
}

function q1i() {
  message3.innerHTML = "Incorrect";
  message2.innerHTML = "";
  message4.innerHTML = "<button class=buttons2 onclick=next1()>Next</button>";
}

function next1() {
  if (a == "2") {
    message1.innerHTML = question1[1];
    message2.innerHTML = options1;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
  } else if (a == 3) {
    message1.innerHTML = question1[2];
    message2.innerHTML = options2;
    message3.innerHTML = "";
    number1.innerHTML = a++;
    message4.innerHTML = "";
  } else {
    message1.innerHTML = "End of Quiz";
    message2.innerHTML = "";
    message3.innerHTML = "";
    message4.innerHTML =
      "<button class=buttons2 onclick=repeat1()>Repeat</button>";
  }
}
function repeat1() {
  location.reload();
}
