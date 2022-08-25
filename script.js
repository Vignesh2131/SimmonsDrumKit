function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("tap");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("tap");
}
function playOnClick(e) {
  const audio = document.querySelector(
    `audio[data-click="${e.target.textContent.toLowerCase()}"]`
  );
  audio.currentTime = 0;
  audio.play();
  e.target.classList.add("tap");
}
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((el) => {
  el.addEventListener("transitionend", removeTransition);
  el.addEventListener("click", playOnClick);
});
