function convertFahrToCelsius(fahren) {
    if (typeof fahren === "number") { 
    let cell = (fahren - 32) * 5/9;
    return cell.toFixed(4);
  
   
}
else if (typeof fahren === "string") {
     if (isNaN(parseFloat(fahren))) {
        return fahren + " is not a valid number but a/an string";
    }
     else {
        
        let cell = (fahren - 32) * 5/9;
    return cell.toFixed(4);
     
   }
}

  if (Array.isArray(fahren)) {
return JSON.stringify(fahren) + " is not a valid number but a/an array";
}

 else if (typeof fahren === "object") {
return JSON.stringify(fahren) +  " is not a valid number but a/an object.";
}


}



// PART 2 OF TASK

function checkYuGiOh(args) {
    if (typeof args !== "number" && typeof args !== "string") {
      return "invalid parameter: " + JSON.stringify(args);
    }
  
    const number = parseInt(args);
    const numbers = Array(number).fill("").map((_, i) => i + 1);
  
    const resultingArray = numbers.map(number => {
      let strOutput = '';
  
      if (number % 2 === 0) {
        strOutput = 'yu';
      }
      if (number % 3 === 0) {
        strOutput = strOutput ? `${strOutput}-gi` : 'gi';
      }
      if (number % 5 === 0) {
        strOutput = strOutput ? `${strOutput}-oh` : 'oh';
      }
  
      return strOutput || number;
    });
  
    return resultingArray;
  }