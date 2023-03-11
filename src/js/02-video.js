import Player from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const LOCALSTOREAGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);

const saveTimeVideo = data => {
    localStorage.setItem(LOCALSTOREAGE_KEY, data.seconds);
}
   
 player.on('timeupdate', throttle(saveTimeVideo, 1000));
    

     player.setCurrentTime(localStorage.getItem(LOCALSTOREAGE_KEY)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});