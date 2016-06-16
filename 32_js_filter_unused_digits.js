function unusedDigits(){
  var numbers = "0123456789"
  var arguments2 = Array.from(arguments).join().replace(/,/g, "");
  
  for(var i = 0; i < arguments2.length; i++) {
    if(numbers.includes(arguments2[i])) {    
      numbers = numbers.replace(arguments2[i], "");
    }
  }
  return numbers;
}

// TESTS

Test.assertEquals(unusedDigits(12, 34, 56, 78), "09")
Test.assertEquals(unusedDigits(2015, 8, 26), "3479")
