let id = 'mLRD1wNU542nhMjotdMUYZMiK9bhXs85B8IU9BuA';//Guardamos el id por si hay que cambiarlo algun dia, solo cambiarlo aqui

function getImagenDelDia() {

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${id}`)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
      console.log(data);

      if (data.media_type == "video") {
        document.getElementById("info").innerHTML =

          `<div>
        <p>Titulo ${data.title}</p>
        <br>
        <p>Explicacion: ${data.explanation} </p>
        <br>
        <figure>
          <iframe
            src="${data.url}"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
       </figure>
        <br>
        <p>Fecha ${data.date} </p>
        </div>`
      }
      else {
        document.getElementById("info").innerHTML =

          `<div>
        <p>Titulo ${data.title}</p>
        <br>
        <p>Explicacion: ${data.explanation} </p>
        <br>
        <img src="${data.url}" width="451"></img>
        <br>
        <p>Fecha ${data.date} </p>
        </div>`
      }



    })
    .catch(error => console.error('Hubo un error:', error)); // Por si hay errores
};

function getImagenTierra() {

  let long;
  let lati;

  fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${long = -95.33}&lat=${lati = 29.78}&date=2018-01-01&&dim=0.10&api_key=${id}`)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
      console.log(data);
      document.getElementById("infoTierra").innerHTML =

        `<img src="${data.url}" width="451"></img>
        <br>
        <p>Fecha ${data.date} </p>
        <br>
        <a href="https://www.google.com/maps?&z=15&t=k&q=${lati} ${long}">Ver en el Mapa</a>`


    })
    .catch(error => console.error('Hubo un error:', error)); // Por si hay errores
};

function getImagenMundoPorFecha() {

  let fecha;

  fetch(`https://api.nasa.gov/EPIC/api/natural/all?api_key=${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let opciones = [];
      for (let i = 0; i < 10; i++) {
        // Verifica si hay datos en la posición 'i'
        if (data[i]) {
          opciones.push(data[i].date);
        }
      }

      // Creamos el HTML para el select
      let selectHTML = `<select id="fechas">`;
      opciones.forEach(date => {
        selectHTML += `<option value="${date}">${date}</option>`;
      });
      selectHTML += `</select>`;

      selectHTML += `<br><br><button onclick="obtenerFecha()">Enviar</button>`; // Agrega un botón y llama a la función obtenerFecha

      // Insertamos el HTML
      document.getElementById("infoImagen").innerHTML = selectHTML;




    })
    .catch(error => console.error('Hubo un error:', error)); // Por si hay errores


}

function obtenerFecha() {
  let fecha = document.getElementById("fechas").value;
  let epic;
  //Sacamos el epic y despues llamamos a otra funcion y ya mostramos la foto
  fetch(`https://api.nasa.gov/EPIC/api/natural/date/${fecha}?api_key=${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      data.forEach(item => {
        let imagenURL = item.image; // Obtener la URL de la imagen
        console.log(imagenURL);

        // Llamar a la función para mostrar la imagen
        obtenerImagenEpic(imagenURL, fecha);

      });

    })
    .catch(error => console.error('Hubo un error:', error)); // Por si hay errores

}

function obtenerImagenEpic(epic, fecha) {
  let fechaNueva = fecha.replace(/-/g, "/");
  let imagenURL = `https://api.nasa.gov/EPIC/archive/natural/${fechaNueva}/png/${epic}.png?api_key=${id}`;

  // Establecer la URL de la imagen como el src de la etiqueta img
  document.getElementById("imagenTierra").innerHTML = `<img src="${imagenURL}">`;
}




function imagenMarte(){
  let sol = document.getElementById("controlDesliz").value;
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}}&api_key=${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let imagenURL = data.photos[0].img_src;
      console.log(imagenURL);
      // Mostrar la imagen
      document.getElementById("imagenMarte").innerHTML = `<img src="${imagenURL}">`;
    })
    .catch(error => {
      console.error('Error:', error);
    });

}



getImagenDelDia();//LLamamos a la funcion asi se actualiza de forma diaria
getImagenTierra();
getImagenMundoPorFecha();
imagenMarte();


//Añadir bbdd en la que en cada cuenta puedas guardarte las fotos y despues exportarlas/descargarlas