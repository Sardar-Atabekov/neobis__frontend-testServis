let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");
let message = document.querySelector(".message");
let messageError = document.querySelector(".messageError");
btn.addEventListener("click", () => {
  wrapper.style.display = "block";
  message.style.display = "none";
});
let ball = 30;
let play = () => {
  Song.play();
  setTimeout(() => {
    alert("Мы тебя предупреждали!! Минус 5 баллов");
  }, 400);
  wrapper.style.display = "none";
  messageError.style.display = "block";
  setTimeout(() => {
    Song.pause();
  }, 3000);
};
Song = new Audio("00183.mp3");
wrapper.addEventListener("mouseout", () => {
  play();
});

window.addEventListener("keydown", function(e) {
  if (e.keyCode === 17) {
    play();
  } else if (e.keyCode === 18) {
    play();
  }
});
