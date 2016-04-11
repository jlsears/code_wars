function whoIsNext(names, r){
  var assessing = [];
  var scouting = [];
  var foundIt;
  console.log("the value of r here is: " + r);
  
  for(var j = 0; j < names.length; j++) {
    assessing.push(names[j]);
    scouting.push(names[j]);
  }
  
  var amtDoubling = 5;
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

      var miniTop = rangeLow + (amtDoubling-1);
      var miniCounter = 1;

      // this is the range of the person we're looking to return
      if(r < miniTop) {

        return assessing[miniCounter-1];
      }

      else {

        miniTop = miniTop + amtDoubling;
        miniCounter = miniCounter + 1;
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