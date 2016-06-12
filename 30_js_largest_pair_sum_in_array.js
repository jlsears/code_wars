function largestPairSum(numbers)
{
  var sortedNums = numbers.sort(function(a, b){return a-b});
  
  return sortedNums[sortedNums.length - 1] + sortedNums[sortedNums.length - 2];
}

// TESTS

Test.expect(largestPairSum([-10, -8, -16, -18, -19]) === -18 , "Sum should be -18");