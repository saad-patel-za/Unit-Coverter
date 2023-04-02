
    const lengthInput = document.getElementById("length");
    const resultDisplay = document.getElementById("result");
    const resultDisplay2 = document.getElementById("result2");
    const resultDisplay3 = document.getElementById("result3");
    const resultDisplay4 = document.getElementById("result4");
    const resultDisplay5 = document.getElementById("result5");
    const resultDisplay6 = document.getElementById("result6");
    
    
    
    // if (isNaN(length)) {
    //   resultDisplay.textContent = "Please enter a valid number.";
    //   return;
    // }
    function convert(){
      convertLength()
      convertVolume()
      convertMass()
    }

    function convertLength(){
    //meters/length
    const feet = lengthInput.value * 3.28084
    const meters = lengthInput.value / 3.28084
    resultDisplay.textContent = `${lengthInput.value} meters is equal to ${feet.toFixed(2)} feet.`;
    resultDisplay2.textContent = `${lengthInput.value} feet is equal to ${meters.toFixed(2)} metters.`;
    }

    function convertVolume(){
      //Liters/Gallons
      const liter = lengthInput.value * 0.264
      const gallon = lengthInput.value / 0.264
      resultDisplay3.textContent = `${lengthInput.value} liter is equal to ${liter.toFixed(2)} gallon.`;
      resultDisplay4.textContent = `${lengthInput.value} galon is equal to ${gallon.toFixed(2)} liter.`;
    }

    function convertMass(){
      const pound = lengthInput.value * 2.204
      const kilo = lengthInput.value / 2.204
      resultDisplay5.textContent = `${lengthInput.value} pound is equal to ${pound.toFixed(2)} kilo.`;
      resultDisplay6.textContent = `${lengthInput.value} kilo is equal to ${kilo.toFixed(2)} pound.`;

    }

    
    
  
  