function disemvowel(str) {

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var revisedString = str;
  
  for(var i = 0; i < vowels.length; i++) {
    
    var currentVowel = new RegExp(vowels[i], "gi");
    revisedString = revisedString.replace(currentVowel, "");
  }

  return revisedString;
}

// TEST

Test.assertEquals(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")