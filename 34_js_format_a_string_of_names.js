function list(names){

  var nameString = "";
  
  if(names.length == 0) { return nameString; }
  
  if(names.length == 1) { return names[0].name; }
  
  for(var i = 0; i < names.length-2; i++) {
    nameString = nameString + names[i].name + ", ";
  }
  nameString = nameString + names[names.length-2].name + " & " + names[names.length-1].name;
  return nameString;
}

// TESTS

Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]), 'Bart, Lisa, Maggie, Homer & Marge',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]), 'Bart, Lisa & Maggie',
"Must work with many names")
Test.assertEquals(list([{name: 'Bart'},{name: 'Lisa'}]), 'Bart & Lisa', 
"Must work with two names")
Test.assertEquals(list([{name: 'Bart'}]), 'Bart', "Wrong output for a single name")
Test.assertEquals(list([]), '', "Must work with no names")