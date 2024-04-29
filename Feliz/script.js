function anima(dibujo, animacion) {
    navigator.vibrate(50);
  
    document.getElementById(`audio-${dibujo}`).currentTime = 0;
    document.getElementById(`audio-${dibujo}`).play();
  
    document.getElementById(`img-${dibujo}`).innerHTML =
      `<img src="img/${dibujo}.png" 
       class="animate__animated animate__${animacion}"
       onclick="anima('${dibujo}', '${animacion}')">`;
  }