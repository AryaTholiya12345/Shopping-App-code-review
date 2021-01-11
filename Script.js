function myFunction() {
  globalFirstNum1 = 0
  globalSecondNum1 = 0
  z = globalFirstNum1 + globalSecondNum1;
  document.getElementById("result").innerHTML =
    "The total cost is " + z + ".";
}

function add() {
  globalFirstNum1 = Number(50);
  globalSecondNum1 = Number(60);
  var result = globalFirstNum1 + globalSecondNum1;
  var output = "The total cost is " + result;
  document.getElementById("result").innerHTML = output;
}

function add2() {
  globalThirdNum1 = Number(40);
  globalForthNum1 = Number(60);
  var result = globalThirdNum1 + globalForthNum1;
  var output = "The total cost is " + result;
  document.getElementById("result").innerHTML = output;
}

function myFunction() {
  document.getElementById("result").innerHTML = output;
}

function getSelectedRadioValue(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
}

function result() {
  var score = 0;
  score += parseInt(getSelectedRadioValue("q1")) || 0;
  score += parseInt(getSelectedRadioValue("q2")) || 0;
  score += parseInt(getSelectedRadioValue("q3")) || 0;
  score += parseInt(getSelectedRadioValue("q4")) || 0;
  score += parseInt(getSelectedRadioValue("q5")) || 0;
  score += parseInt(getSelectedRadioValue("q6")) || 0;
  score += parseInt(getSelectedRadioValue("q7")) || 0;
  score += parseInt(getSelectedRadioValue("q8")) || 0;
  score += parseInt(getSelectedRadioValue("q9")) || 0;
  score += parseInt(getSelectedRadioValue("q10")) || 0;
  score += parseInt(getSelectedRadioValue("q11")) || 0;
  score += parseInt(getSelectedRadioValue("q12")) || 0;
  score += parseInt(getSelectedRadioValue("q13")) || 0;
  score += parseInt(getSelectedRadioValue("q14")) || 0;
  score += parseInt(getSelectedRadioValue("q15")) || 0;
  document.getElementById('result').innerHTML = ("Total Cost: " + score);
}
window.onload = function() {
  check.onclick = result;
}

function getSelectedRadioName(name) {
  var radios = document.getElementsByName(name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].unchecked) {
      return radios[i].name;
    }
  }
}
