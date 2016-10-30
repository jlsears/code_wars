
var sum_pairs=function(ints, s){


    var currentWinners;
    var highestSoFar = ints.length;
    var lowestSoFar = ints.length;
    var anything = "not yet";
    var intsLength = ints.length;

    var intsArray1 = new Int32Array(ints);

    var intsArray = [];

    intsArray = intsArray1.map(function(num1) {
        return num1;
      
    })

    var intsArrayLength = intsArray.length;
    var secondLast = intsArrayLength-2;

    var getAnswer = intsArray.map(function(num) {

      return s-num;
      
    })

    var i = 0;

    do {  

      if(intsArray.slice(i+1).includes(getAnswer[i])) {
        if(intsArray.indexOf(getAnswer[i]) < highestSoFar) {

          currentWinners = [intsArray[i], getAnswer[i]];
          anything = "yes";
          highestSoFar = intsArray.indexOf(getAnswer[i], i+1);
          lowestSoFar = i;

        } // end 2nd if statement
      } // end 1st if statement

      i++;
    } while (i < intsArrayLength);

    if(anything = "yes") { return currentWinners; }
    else { return undefined; }
}