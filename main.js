
let wrapper = document.querySelector('.wrapper');


Song = new Audio('00183.mp3');
wrapper.addEventListener('mouseout', ()=>{
  Song.play()
  setTimeout(()=>{
    alert('Дибил мы же предупреждали')
  },400)
  setTimeout(()=>{
    Song.pause()
  },3000)
})

Aman, [16.03.20 18:27]
let wrapper = document.querySelector('.wrapper');


let play = () =>{
  Song.play()
  setTimeout(()=>{
    alert('мы же предупреждали')
  },400)
  setTimeout(()=>{
    Song.pause()
  },3000)
} 
Song = new Audio('00183.mp3');
wrapper.addEventListener('mouseout', ()=>{
  play()
})

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 17) {
   play()
  }else if (e.keyCode === 18){
    play()
  }
});
