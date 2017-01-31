 function billingFunction() {
    var shipName = document.getElementById('shippingName');
    var shipZip = document.getElementById('shippingZip');
    var billName = document.getElementById('billingName');
    var billZip =document.getElementById('billingZip');
    var checkBox = document.getElementById('same');
     if (checkBox.checked) {
      billName.value = shipName.value;
      billZip.value = shipZip.value;
     }
     else {
      billName.value = " ";
      billZip.value = " ";
     }
  }
  
  // Drawing with JavaScript need to comment each line and make a new landscape
    
  var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_