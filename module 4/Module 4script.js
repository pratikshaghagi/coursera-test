(function () {
    var names=["Yaakov","John","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
    for(var i=0;i<names.length;i++) {

        var firstLetter =names[i].chartAt(0).tolowerCase();

        if(firstLetter==='j') {
            byeSpeaker(names[i]);
        }
        else {
            helloSpeaker(names[i]);
        }
    }

})();

