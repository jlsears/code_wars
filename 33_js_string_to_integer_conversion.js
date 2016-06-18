function myParseInt(str) {

  for(var i = 0; i < str.length; i++) {
  
    if(str.match(/\d \d/) || (isNaN(str[i]) == true)) {
      return "Nan";
     }
  }
  return parseInt(str);
}


// TESTS

Test.assertEquals(myParseInt("1"), 1);
Test.assertEquals(myParseInt("  1 "), 1);
Test.assertEquals(myParseInt("08"), 8);
Test.expect(isNaN(myParseInt("5 friends")));
Test.expect(isNaN(myParseInt("16.5")));