const audio = new Audio("IceCreamWithSelenaGomez-BLACKPINK-6720101.mp3");

var icon = document.querySelector(".fa1");
var audioplayerPlaypause = document.querySelector('.audioplayer-playpause');
var barLoaded = document.querySelector('.slider-handle');
var sliderVolume = document.querySelector('.slider-volume');
var timeCurrent = document.querySelector('.time-current');
var timeDuration = document.querySelector('.time-duration');

var isPlayIcon = true;
icon.style.color = 'blue';
barLoaded.value = '0';

function changePlayButton() {
	if (isPlayIcon) {
		icon.classList.remove('fa-play');
		icon.classList.add('fa-pause');
    isPlayIcon = false;
    icon.style.color = 'orange';
    audioplayerPlaypause.style.background = 'rgba(235,79,26,.1)';
	} else {
		icon.classList.remove('fa-pause');
		icon.classList.add('fa-play');
    isPlayIcon = true;
    icon.style.color = 'blue';
    audioplayerPlaypause.style.background = 'rgba(37, 37, 255, 0.2)';
	}
}

audioplayerPlaypause.addEventListener('click', () => {
  changePlayButton();
  if(!isPlayIcon){
    audio.play();
  } else {
    audio.pause();
  }
  timeDuration.innerHTML = secondsToMinutesAndSeconds(audio.duration);
});

audioplayerPlaypause.addEventListener('mouseover', () => {
  if(isPlayIcon){
    audioplayerPlaypause.style.background = 'rgba(37, 37, 255, 0.2)';
  } else {
    audioplayerPlaypause.style.background = 'rgba(235,79,26,.1)';
  }
});

audioplayerPlaypause.addEventListener('mouseout', () => {
  audioplayerPlaypause.style.background = '';
});

audio.addEventListener('timeupdate', (ev) => {
  let currTime = ev.currentTarget.currentTime;
  let percentTime = (currTime/audio.duration)*100;
  barLoaded.value = `${percentTime}`;
  timeCurrent.innerHTML = secondsToMinutesAndSeconds(currTime);
  if(percentTime == 100){
    icon.classList.remove('fa-pause');
		icon.classList.add('fa-play');
    isPlayIcon = true;
    icon.style.color = 'blue';
    audioplayerPlaypause.style.background = 'rgba(37, 37, 255, 0.2)';
    barLoaded.value = '0';
    timeCurrent.innerHTML = '00:00';
    timeDuration.innerHTML = '00:00';
  }
});

barLoaded.addEventListener('input', (ev) => {
  let currLoad = ev.target.value;
  let currTime = (currLoad/100)*audio.duration;
  audio.currentTime = currTime;
});

sliderVolume.addEventListener('input', (ev) => {
  let currVolume = ev.target.value;
  audio.volume = (currVolume == 1) ? 0 : currVolume/100;
});

var secondsToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60);
  var seconds = (millis % 60).toFixed(0);
  return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}
