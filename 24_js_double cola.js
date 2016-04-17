function whoIsNext(names, r){
  var assessing = [];
  
  for(var j = 0; j < names.length; j++) {
    assessing.push(names[j]);
  }
  
  var amtDoubling = assessing.length;
  var rangeTop = amtDoubling;
  var multCounter = 1;
  var newR = r - 1;
  
  for(var i = 0; i <= newR; i++) {
    console.log("amtDoubling here is: " + amtDoubling);
    
    // when r is within the original array
    if(r < assessing.length) {
    
      return assessing[r-1];
    }
    
    // when we need to find r outside of the original array
    if(r < rangeTop) { // have finally found our range to look further in
      
      var rangeLow = (rangeTop - (amtDoubling)) + 1;
      var miniTop = rangeLow + (multCounter-1);
      var miniCounter = 1;

      for(var k = 0; k < assessing.length; k++) {

        // this is the range of the person we're looking to return
        if(r < miniTop) {
          
          return assessing[miniCounter-1];
        }

        else {

          miniTop = miniTop + multCounter;
          miniCounter = miniCounter + 1;
          }
        }
      }
    
    else {    
      amtDoubling = amtDoubling * 2;
      rangeTop = rangeTop + amtDoubling;
      multCounter = multCounter * 2;
    }
  }
} 