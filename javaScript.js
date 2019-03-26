
      function cal() {
        var x = parseFloat(document.getElementById('x').value);
        var y = parseFloat(document.getElementById('y').value);
        var n = document.getElementById("dropdown").value;

        if(isNaN(x) || isNaN(y)) {
            alert('Please check X or Y input field');
        }      
       if (n==='-') {
         var z = x - y;
         document.getElementById('z').value = z;
       } else if (n==='+') {
         var z = x + y;
         document.getElementById('z').value = z;
       } else if (n==='*') {
         var z = x * y;
         document.getElementById('z').value = z;
       } else if (n==='/') {
         (y ===0) ? alert('Y can not be zero') :  z = x / y;
       
         document.getElementById('z').value = z;
       }
     };

