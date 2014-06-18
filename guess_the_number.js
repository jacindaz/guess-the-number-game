function displayRandomNumber(){
  range = prompt("What is highest number you would like to generate?");
  var number = Math.floor(Math.random() * range);
  alert("Your random number is: " + number);
}

function displayRandomNumForm(){
  var range = document.generate_num.user_range.value;
  var random_num = Math.floor(Math.random() * range);
  document.getElementById('generate').value = random_num;
}

function getUserName(){
  var name = document.say_hi.user_name.value;
  alert("Hello " + name + ", nice to meet you!");
}
