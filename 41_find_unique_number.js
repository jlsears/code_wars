
function findUniq(arr) {
  
  for(var i = 1; i < arr.length; i++){

    if(arr[i-1] == arr[i]){
      continue;
    }
    else{
      if(arr[i-1] !== arr[i+1] && arr[i+1] !== undefined){
        return arr[i-1];
      }
      else{
        return arr[i];
      }
    }
  }
}