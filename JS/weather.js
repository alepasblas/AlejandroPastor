
function BuscarTemp(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const idioma = document.getElementById("idioma").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nombre}&appid=11810a51c19e99dc7c24ba28eaac4808&units=metric&lang=${idioma}`)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
      console.log(data);
      document.getElementById("temperatura").innerHTML =

        `<div>
        <p>La temperatura de ${data.name} es : ${data.main.temp} la sensacion es de ${data.main.feels_like} y el clima es ${data.weather[0].description}.</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"></img>
        <a href="https://www.google.com/maps?&z=15&t=k&q=${data.coord.lat} ${data.coord.lon}">Ver en el Mapa</a>
        </div>`


    }) // Maneja los datos de la respuesta
    .catch(error => console.error('Hubo un error:', error)); // Maneja los errores
}

//BuscarTemp();



