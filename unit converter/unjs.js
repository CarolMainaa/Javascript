/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert")
const results1 = document.getElementById("units1")
const results2 = document.getElementById("units2")
const results3 = document.getElementById("units3")

convertBtn.addEventListener("click", 
function(){     
    const inputs = parseInt(document.getElementById("input").value)
     length()
     volume()
     mass()
}) 

   function length(){
    var inputs = parseInt(document.getElementById("input").value)

     var con = inputs * 3.281;
     var inverse = inputs / 3.281;
    
     results1.innerHTML = `${inputs} metres = ${Number(con).toFixed(3)} feet
                           | ${inputs} feet = ${Number(inverse).toFixed(3)} metres`
   }
   function volume(){
   var inputs = parseInt(document.getElementById("input").value)

     var con = inputs * 0.264;
     var inverse = inputs / 0.264;
    
     results2.innerHTML = `${inputs} litres = ${Number(con).toFixed(3)} gallons
                           | ${inputs} gallons = ${Number(inverse).toFixed(3)} litres`
  
   }
    function mass(){
    var inputs = parseInt(document.getElementById("input").value)

     var con = inputs * 2.204;
     var inverse = inputs / 2.204;
    
     results3.innerHTML = `${inputs} kilograms = ${Number(con).toFixed(3)} pounds
                           | ${inputs} pounds = ${Number(inverse).toFixed(3)} kilograms`
  
   }
