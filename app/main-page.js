var audioModule = require('nativescript-audio');

var player = new audioModule.TNSPlayer();
var audioSessionId;

exports.tapPlaySound = function(args) {
    playAudio('~/sound/alert_14_ascending.mp3');
}

function playAudio(filepath) {

    try {
        var playerOptions = {
            audioFile: filepath,

            completeCallback: () => {
                console.log('audio player completeCallback');

                player.dispose().then(() => {
                    console.log('DISPOSED');
                }, (err) => {
                    console.log('ERROR disposePlayer: ' + err);
                });
            },

            errorCallback: (errorObject) => {
                console.log('audio player errorCallback');
                console.log(JSON.stringify(errorObject));
            },

            infoCallback: (args) => {
                console.log('audio player infoCallback');
                console.log(JSON.stringify(args));
            }
        };

        player.playFromFile(playerOptions).then(() => {
        }, (err) => {
            console.log('audio player playFromFile error');
            console.log(err);
        });

    } catch (ex) {
        console.log(ex);
    }

}