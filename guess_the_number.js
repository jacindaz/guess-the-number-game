function guessNumber(){
  var name = document.guess_number.user_name.value;
  var range = document.guess_number.user_range.value;
  var guess = document.guess_number.user_guess.value;
  var number = Math.floor(Math.random() * range);

  if (guess === number) {
    alert("Congratulations " + name + ", you won!");
  } else {
    alert("I'm sorry " + name + ", you guessed incorrectly.");
  }

  return number;
}

function showDiv() {
  div = document.getElementById('hide-div');
  div.style.display = "block"
}

function returnRandomNumber(){
  window.alert = function() {};
  random_number = guessNumber();
  document.getElementById('tell_me').value = random_number;
}
