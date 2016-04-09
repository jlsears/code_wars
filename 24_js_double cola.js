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
  var newR = r - 1;
  
  for(var i = 0; i <= newR; i++) {
    console.log("amtDoubling here is: " + amtDoubling);
    
    if(r < assessing.length) {
    
      return assessing[r-1];
    }
    
    if(newR < rangeTop) {
      
      var rangeLow = (rangeTop - amtDoubling) + 1;
      console.log("Hitting rangeLow declaration: " + rangeLow);
      console.log("rangeTop at this point: " + rangeTop);
      
      // iterating through each name in assessing
      for(var k = 0; k <= assessing.length-1; k++) {
      //console.log("at least hitting first assessing loop");
      
        // for each name in assessing, push it into scouting the number of times reflected in multCounter
        for(var l = 0; l < multCounter; l++) {
          scouting.push(assessing[k]);
          console.log("pushing name into scouting: " + assessing[k]);
        }
      }
      // looking for the name at index position r in this block
      for(var m = rangeLow; m <=r; m++) {
        if(m == r) {
          console.log("the value of foundIt: " + foundIt);
          return foundIt = scouting[m];
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