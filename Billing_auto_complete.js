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