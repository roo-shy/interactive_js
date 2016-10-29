//Function call, parameters
function welcomeMsg(msg) {
  alert(msg);
}
var x = "Hi";
welcomeMsg(x);
x = "Bye";
welcomeMsg(x);

//Return values
function welcomeMsg(msg) {
  alert(msg);
  var name  = prompt("What's your name?");
  return name;
}

  var dogName = welcomeMsg("Hi");