
function countSmileys(arr) {
  var validChars = [[":", ";"], ["-", "~"], [")", "D"]];
  var counterVar = 0;

  for(var i = 0; i < arr.length; i++){

    if(arr[i].length == 2){
      if(validChars[0].includes(arr[i][0]) && validChars[2].includes(arr[i][1])){ 
        counterVar = counterVar + 1; 
      } 
    } 

    if(arr[i].length == 3){
      if(validChars[0].includes(arr[i][0]) && validChars[1].includes(arr[i][1]) && validChars[2].includes(arr[i][2])){ 
        counterVar = counterVar + 1; 
      } 
    } 
  }   
  return counterVar;
}; 


