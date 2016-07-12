function sumDigPow(a, b) {

  var answerArray = [];
  var aValue = a;
    
  if(b.toString().length > 1) {

    for(var i = aValue; i < b; i++) {
      
      var particular = i.toString().split("");
      var currentSum = 0;
      var counter = 1;
        
      for(var j = 0; j < particular.length; j++) {
        
        currentSum = currentSum + Math.pow(particular[j], counter);
        counter++; 
      }
      if(currentSum == i) { answerArray.push(currentSum); }
    }
  }
  return answerArray;
}

// TESTS

Test.describe("Example Tests", function() {
  Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
  Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
  Test.assertSimilar(sumDigPow(10, 100),  [89])
  Test.assertSimilar(sumDigPow(90, 100), [])
  Test.assertSimilar(sumDigPow(90, 150), [135])
  Test.assertSimilar(sumDigPow(50, 150), [89, 135])
  Test.assertSimilar(sumDigPow(10, 150), [89, 135])
});