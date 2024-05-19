//grab all the elements

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



//function to play/stop video

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//function to update icon
function updateIcon() {
    if (video.paused) {
        play.innerHTML = `<i class='fa fa-play fa-2x'></i>`;

    } else {
        play.innerHTML = `<i class='fa fa-pause fa-2x'></i>`;

    }
}

//function to stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
};

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let minutes = Math.floor(video.currentTime / 60);

    //put zeros before if minutes are single digits
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}



function setProgress(){
    video.currentTime= (+progress.value*video.duration)/100;
}







//all my event listeners
//click on the video itself and then play the video
video.addEventListener('click', playPause);
play.addEventListener('click', playPause);

//update play/pause icon 
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);

//stop video
stop.addEventListener('click', stopVideo);

//update progress
video.addEventListener('timeupdate', updateProgress);

//when click on progress set video to that

progress.addEventListener('click', setProgress);
