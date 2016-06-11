function doubleChar(str) {
  var finalString = "";
  
  for(var i = 0; i < str.length; i++) {
  
    finalString = finalString + str[i] + str[i];
  }
  return finalString;
}

// TESTS

Test.describe("doubleChar", function() {
  Test.it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});
