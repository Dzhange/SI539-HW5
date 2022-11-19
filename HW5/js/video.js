/* Video */
var video = document.getElementById("videoplayer");

video.loop = false;
video.autoplay = false;
video.load();

/* Play & Pause */
function play_video(){
    video.play();
}

function pause_video(){
    video.pause();
}

var play_btn = document.getElementById("play");
play_btn.addEventListener("click", play_video);

var pause_btn = document.getElementById("pause");
pause_btn.addEventListener("click", pause_video);

/* Speed Up & Slow Down */
const modes_speed = {1:0.5, 2:1.0, 3:2.0} // mode name: speed value
var max_mode = 3;
var min_mode = 1;
var cur_mode = 2;

function lower_play_speed(){
    delta = -1;
    if (cur_mode + delta in modes_speed) {
        cur_mode += delta;
        video.playbackRate = modes_speed[cur_mode];
    }else{
        alert("Video is at lowest speed!");
    }
}

function increase_play_speed(){
    delta = 1;
    if (cur_mode + delta in modes_speed) {
        cur_mode += delta;
        video.playbackRate = modes_speed[cur_mode];
    }else{
        alert("Video is at highest speed!");
    }
}

var slower_btn = document.getElementById("slower");
slower_btn.addEventListener("click", lower_play_speed);

var faster_btn = document.getElementById("faster");
faster_btn.addEventListener("click", increase_play_speed);

/* Skip video */
function skip_15s(){
    var skip_duration = 15;
    (video.currentTime <= video.duration - skip_duration) ? video.currentTime += skip_duration : video.currentTime = 0;
}
var skip_btn = document.getElementById("skip");
skip_btn.addEventListener("click", skip_15s);

/* Volume Control */
function mute_button_click(){
    if (video.muted) {
        mute_btn.innerHTML='Unmute';
    }else{
        mute_btn.innerHTML='Mute';
    }
    video.muted = ! video.muted;
}

function change_volume(){
    video.volume = volume_slider.value / 100;
    volume_display.innerHTML = video.volume * 100 + "%";
}

volume_display = document.getElementById("volume");

var mute_btn = document.getElementById("mute");
mute_btn.addEventListener("click", mute_button_click);

var volume_slider = document.getElementById("slider");
volume_slider.addEventListener("change", change_volume);