function dashatize(num) {
  
  var numEvaluate = num.toString();
  var finalResult;  var numLength = numEvaluate.length;
  
  for (var i = 0; i < numLength; i++) {

    if(numEvaluate[i] == "-"){ continue; }
    
    if(isNaN(numEvaluate[i]) && numEvaluate[i] != "-"){ break; }
      
    if(numEvaluate[i] % 2 != 0){
    
      var craftyString;
      
      if(numEvaluate[i-1] !="-"){
        var firstBit = numEvaluate.slice(0, i);
      } else{
        var firstBit = numEvaluate.slice(0, i-1);      
      }

      var secondBit = numEvaluate.slice(i+1);
      craftyString = firstBit + "-" + numEvaluate[i] + "-" + secondBit;
      numEvaluate = craftyString;
      numLength = numEvaluate.length;
      i = i + 1;
    } // end if
  } // end for loop
    
  while(numEvaluate[0] == "-"){
  
    if(numEvaluate[0] == "-"){ numEvaluate = numEvaluate.slice(1); }
  
   }
   
   while(numEvaluate[numEvaluate.length-1] == "-"){
    if(numEvaluate[numEvaluate.length-1] == "-"){ numEvaluate = numEvaluate.slice(0, numEvaluate.length-1);}
   }
  return numEvaluate;
};
