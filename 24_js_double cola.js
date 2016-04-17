function whoIsNext(names, r){
  var assessing = [];
  var scouting = [];
  var foundIt;
  console.log("the value of r here is: " + r);
  console.log("the names being presented are: " + names);
  
  for(var j = 0; j < names.length; j++) {
    assessing.push(names[j]);
    scouting.push(names[j]);
  }
  
  var amtDoubling = assessing.length;
  var rangeTop = amtDoubling;
  var multCounter = 1;
  var prevMultCounter = 1;
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
      console.log("Hitting rangeLow declaration: " + rangeLow);
      console.log("rangeTop at this point: " + rangeTop);

      var miniTop = rangeLow + (multCounter-1);
      var miniCounter = 1;

      for(var k = 0; k < assessing.length; k++) {

        // this is the range of the person we're looking to return
        if(r < miniTop) {

          console.log("the winning miniTop: " + miniTop + " and miniCounter: " + miniCounter);
          console.log("winning multCounter: " + multCounter);
          return assessing[miniCounter-1];
        }

        else {

          miniTop = miniTop + multCounter;
          miniCounter = miniCounter + 1;
          console.log("miniTop is: " + miniTop + " And miniCounter is: " + miniCounter);
          console.log("multCounter here: " + multCounter);
          }
        }
      }
    
    else {    
      amtDoubling = amtDoubling * 2;
      rangeTop = rangeTop + amtDoubling;
      prevMultCounter = multCounter;
      multCounter = multCounter * 2;
    }
  }
} 