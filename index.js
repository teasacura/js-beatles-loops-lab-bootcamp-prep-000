function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
  var newString = arrayMusicians[i] + " plays " + arrayInstruments[i];
  emptyArray.push(newString)
  }
  return emptyArray
}



function johnLennonFacts(arrayFacts) {
  while ((arrayFacts.length - 1) > 0) {
    var i = 0
    var emptyArray = [];
    emptyArray.push(arrayFacts[i] + "!!!")
  }
  return emptyArray
}
