
        function calc() {
            var bill = document.getElementById('bill').value;
            var tip = bill * .15;
            var total = bill*1 + tip;
    
            document.getElementById("tip").innerHTML= "$"+(tip).toFixed(2);
            document.getElementById("total").innerHTML= "$"+(total).toFixed(2);         
        }
