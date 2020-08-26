// add solution here
function theBeatlesPlay(musicians, instruments) {
  var musicianToInstrument = [];

  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];

    var musicInstrument = `${musician} plays ${instrument}`;

    musicianToInstrument.push(musicInstrument);
  }
  return musicianToInstrument;
}
