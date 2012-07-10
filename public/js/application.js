(function() {

  $(function() {
    $('#play-btn').click(function() {
      var options;
      console.log('Speech started');
      options = {
        // amplitude: amplitude.value,
        // wordgap: wordgap.value,
        // pitch: pitch.value,
        // speed: speed.value
        amplitude: 100,
        wordgap: 0,
        pitch: 50,
        speed: 175
      };
      speak.play(textarea.value, options, function() {
        return console.log('Speech finished');
      });
      return false;
    });
    $('#pause-btn').click(function() {
      speak.pause();
      console.log('Speech paused');
      return false;
    });
    return $('#resume-btn').click(function() {
      speak.resume();
      console.log('Speech resumed');
      return false;
    });
  });

}).call(this);
