Array.prototype.numberOfOccurrences = function(x) {
  
  var counter = 0;
  
  for(var i = 0; i < this.length; i++) {    
    if(this[i] == x){
      counter++;
    }
  }
  return counter;
}