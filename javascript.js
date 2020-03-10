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
  "<button class=buttons1 onclick=q1i()>True</button><button class=buttons1 onclick=q1c()>False</button>"
];
var options2 = [
  "<button class=buttons1 onclick=q1c()>False</button><br /><br /><buttons1 onclick=q1c()>True</button>"
];
var options3 = [
  "<button class=buttons1 onclick=q1c()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];
var options4 = [
  "<button class=buttons1 onclick=q1c()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];
var options4 = [
  "<button class=buttons1 onclick=q1c()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];
var options5 = [
  "<button class=buttons1 onclick=q1c()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];
var options6 = [
  "<button class=buttons1 onclick=q1c()>False</button><br /><br /><buttons1 onclick=q1c()>True</button>"
];
var options7 = [
  "<button class=buttons1 onclick=q1c()>False</button><br /><br /><buttons1 onclick=q1c()>True</button>"
];
var options8 = [
  "<button class=buttons1 onclick=q1c()>True</button><br /><br /><button class=buttons1 onclick=q1c()>False</button>"
];

var a = 0;
a++;
var b = 0;
b++;

function begin1() {
  disappear1.innerHTML = "";
  message1.innerHTML = question1[0];
  message2.innerHTML = options1;
  number1.innerHTML = a++;
}

function q1c() {
  message3.innerHTML = "correct";
  message2.innerHTML = "";
  score1.innerHTML = b++;
  message4.innerHTML = "<button class=buttons1 onclick=next1()>Next</button>";
}
