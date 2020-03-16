let wrapper = document.querySelector(".wrapper");

Song = new Audio("00183.mp3");
wrapper.addEventListener("mouseout", () => {
  Song.play();
  setTimeout(() => {
    alert("Дибил мы же предупреждали");
  }, 400);
  setTimeout(() => {
    Song.pause();
  }, 3000);
});
