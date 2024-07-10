function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //doesn't return anything
  audio.currentTime = 0; //rewind to start
  audio.play();
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not a transform event
  //   console.log(e.propertyName);
  this.classList.remove("playing");
}

// add event listener for keydown - NOTE: KEYDOWN IS DEPRECATED
window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
