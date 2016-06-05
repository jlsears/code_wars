var isMonotone = function(arr){ 
  for(var i = 0; i < arr.length; i++) { 
    if(arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}

// TEST

describe("isMonotone", function(){
  var range = function(a,b){
    var r = [], step = b - a > 0 ? 1 : -1;
    do{ r.push(a) } while (step * (b - (a += step)) >= 0);
    return r;
  }; 
  it("should work on increasing lists", function(){
     Test.expect(isMonotone(range(1,10)));     
     Test.expect(isMonotone(range(4,12)));     
  });  
  it("should work on constant lists", function(){
     Test.expect(isMonotone([5,5,5,5,5]));
  });
  it("should work on empty an empty list", function(){
     Test.expect(isMonotone([]));
  });
  it("should return false on a decreasing list", function(){
     Test.expect(!isMonotone(range(5,1)));
  });
  it("should work on a non-decreasing list", function(){
     Test.expect(isMonotone([1,2,3,3,4,5]));
  });
});