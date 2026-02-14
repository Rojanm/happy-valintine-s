
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
let isPlaying = false;


playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i> play music <i class="fas fa-heart"></i>';
  } else {
    audio.play()
      .then(() => {
        playBtn.innerHTML = '<i class="fas fa-pause"></i> pause music <i class="fas fa-heart"></i>';
      })
      .catch(error => {
        console.log('Playback failed:', error);

      });
  }
  isPlaying = !isPlaying;
});


audio.addEventListener('ended', () => {
  isPlaying = false;
  playBtn.innerHTML = '<i class="fas fa-play"></i> play music <i class="fas fa-heart"></i>';
});