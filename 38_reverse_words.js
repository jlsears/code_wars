function reverseWords(str) {
  
  var changing = str.split(" ");
  var changing2 = [];
  var changing3;

  for(var i = 0; i < changing.length; i++) {
  
    var tempHolder = changing[i].split("");
    changing2[i] = tempHolder.reverse().join("");
  }
  
  changing3 = changing2.join(" ");
  return changing3;
}

// TESTS

Test.assertEquals(reverseWords("This is an example!"), "sihT si na !elpmaxe");
Test.assertEquals(reverseWords("makingnewexample"), "elpmaxewengnikam");
Test.assertNotEquals(reverseWords("This is an example!"), "sihT si not !elpmaxe");