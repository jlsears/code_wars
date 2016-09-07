longestPalindrome=function(s){
  
  var s1 = s;
  var s2 = s.split("").reverse().join().replace(/,/g, "");
  var longestCount = 0;
  var currentCount = 0;
  
  if(s1.length == 0) { return 0; }
  
  if(s1.length == 1) { return 1; }
  
  for(var i = 0; i < s1.length; i++) { // looping through first array s1
  
    for(var j = 0; j < s2.length; j++) { // looping through second array for each element in s1
      
      currentCount = 0;
    
      if(s1[i] == s2[j]) { // if a match is found in that loop then handyLoop function will be called

        var pseudoS1 = s1.slice(i);
        
        function handyLoop() { // loop through the rest of both arrays and see if they continue to match

          for(var k = 0; k <pseudoS1.length; k++) {
          
            if(pseudoS1[k] == s2[j]) {

              currentCount = currentCount + 1;
              j++;
              handyLoop();
            }
            else {
              break;
            }
          } // end k for loop
        } // end handyLoop

        handyLoop();
       
      } // end if
            
      if(currentCount > longestCount) {

      longestCount = currentCount; 
        } // end if
      }
    }
  
  return longestCount;
}

// TESTS

Test.assertEquals(longestPalindrome("a"), 1)
Test.assertEquals(longestPalindrome("aa"), 2)
Test.assertEquals(longestPalindrome("baa"), 2)
Test.assertEquals(longestPalindrome("aab"), 2)
Test.assertNotEquals(longestPalindrome("zyabyz"), 6, "Are you sure that is a palindrome?")
Test.assertEquals(longestPalindrome("baabcd"), 4)
Test.assertEquals(longestPalindrome("baablkj12345432133d"), 9)