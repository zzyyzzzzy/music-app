const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //sounds
  const sounds = document.querySelector(".sound-picker button");
  //Time display
  const timeDisplay = document.querySelector(".time-display");
  //Get the length of the outline
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //play sound
  play.addEventListener("click", () => {
    checkPlaying(song);
  });

  //stop and play the song
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  };

  //animate the circle
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let second = Math.floor(elapsed % 60);
    let minute = Math.floor(elapsed / 60);

    //outlin cycle
    let prograss = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = prograss;
  };
};

app();
