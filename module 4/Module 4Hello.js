(function(window) {
    var speakword ="Hello";
    var helloSpeaker=function(name) {
        v=console.log(speakword+ " "+name);

    }
    window.helloSpeaker=helloSpeaker;
})(window);
