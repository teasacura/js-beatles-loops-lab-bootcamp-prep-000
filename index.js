function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var emptyArray = [];
  for (var i = 0; i < 4; i++) {
  var newString = arrayMusicians[i] + "plays " arrayInstruments[i]
  emptyArray.push(newString)
  }
  return emptyArray
}
