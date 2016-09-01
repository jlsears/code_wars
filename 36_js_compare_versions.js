function compareVersions (version1, version2) {
      
  var v1Array = version1.split(".");
  var v2Array = version2.split(".");
  var shortest = v1Array.length >= v2Array.length ? v2Array.length : v1Array.length;
  var longest = v1Array.length >= v2Array.length ? v1Array.length : v2Array.length;

  for(var i = 0; i < longest; i++) {

    if(i < longest) {

      if(parseInt(v1Array[i]) > parseInt(v2Array[i]) || typeof v2Array[i] === 'undefined') {
      
        return true;
      }
      
      else if(parseInt(v2Array[i]) > parseInt(v1Array[i]) || typeof v1Array[i] === 'undefined') {
        
        return false;
      }
      else if(i === longest-1) {
        return true;
      }
    } // end if i < shortest
  } // end for loop
    return true;                
}

// TESTS

Test.expect(compareVersions("11", "10") === true, 'Testing versions without subversion')
Test.expect(compareVersions("11", "11") === true, 'Test equal versions')
Test.expect(compareVersions("10.4.6", "10.4") === true, 'Adding a subversion should make this version "larger"')
Test.expect(compareVersions("10.4", "10.4.6") === false, 'Adding a subversion should make this version "larger"')
Test.expect(compareVersions("10.4", "11") === false, 'Subversion precedence is smaller than Version')
Test.expect(compareVersions("10.4", "10.10") === false, 'Version value is not the same as its decimal value')
Test.expect(compareVersions("10.4.9", "10.5") === false, 'Adding subversion does not make it larger than a greater version')