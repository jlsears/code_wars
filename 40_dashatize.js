function dashatize(num) {
  
  var numEvaluate = num.toString();
  var finalResult;  
  var numLength = numEvaluate.length;
  
  for (var i = 0; i < numLength; i++) {

    // If the character up for evaluation is a dash, then move onto the next selection
    if(numEvaluate[i] == "-"){ continue; }
    
    // If the input is not a number, then break and return that input
    if(isNaN(numEvaluate[i]) && numEvaluate[i] != "-"){ break; }
      
    // The steps that need to occur if this is one of the odd numbers we are looking for here
    if(numEvaluate[i] % 2 != 0){
    
      var craftyString;
      
      if(numEvaluate[i-1] !="-"){
        // If there is not a dash before the number we're evaluating, then grab everything up to that number
        var firstBit = numEvaluate.slice(0, i);
      } else{
        // Otherwise, we only need to grab everything leading up to that dash
        var firstBit = numEvaluate.slice(0, i-1);      
      }

      // Grab everything that comes after the number we're evaluating
      var secondBit = numEvaluate.slice(i+1);

      // Bring all of these parts togethera long with the needed dashes before and after the prime number
      craftyString = firstBit + "-" + numEvaluate[i] + "-" + secondBit;
      // Set numEvaluate to equal this new string and capture its length
      numEvaluate = craftyString;
      numLength = numEvaluate.length;
      // Move i along appropriately to pick up where we left off and accomodate iterating numEvaluate at its new length
      i = i + 1;
    } // end if
  } // end for loop

  // As long as our final result has dashes at the beginning, slice them off  
  while(numEvaluate[0] == "-"){
    if(numEvaluate[0] == "-"){ numEvaluate = numEvaluate.slice(1); }
   }
   
   // As long as our final result has dashes at the end, slice them off
   while(numEvaluate[numEvaluate.length-1] == "-"){
    if(numEvaluate[numEvaluate.length-1] == "-"){ numEvaluate = numEvaluate.slice(0, numEvaluate.length-1);}
   }
  return numEvaluate;
};
