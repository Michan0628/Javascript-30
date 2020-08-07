// Get Element from DOM
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// build function

const togglePlay = () => {
  // if(video.paused){
  //     video.play()
  // }else{
  //     video.pause()
  // }

  // or

  const method = video.paused ? "play" : "pause";
  video[method]();
};

function updateButton () {
    const icon = this.paused ? '►' : '❚ ❚';

    toggle.textContent = icon;

  }

function skip () {

video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    // value of input
    // console.log(this.value)
    // name of input
    // console.log(this.name)
    video[this.name] = this.value
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

function toggleFullScreen(){

    if (document.fullscreenElement) {
        document.exitFullscreen()
        fullScreenButton.innerHTML = '<img src="fullScreen.png" alt="full screen button">'
    }else{

        player.requestFullscreen()
        fullScreenButton.innerHTML = '<img src="normalScreen.png" alt="full screen button">'
    }
}

// add event listener
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton);

// play button
toggle.addEventListener('click', togglePlay)

// skip button
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))


// update progress bar

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub)

let mousedown = false;
progress.addEventListener('mousedown', ()=> mousedown = true)
progress.addEventListener('mouseup', ()=> mousedown = false)

progress.addEventListener('mousemove', (e) => mousedown && scrub(e))

// full screen button

const fullScreenButton = player.querySelector('.player__fullScreen')
fullScreenButton.addEventListener('click', toggleFullScreen)

