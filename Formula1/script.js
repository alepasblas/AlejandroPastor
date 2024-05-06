function getDriver (){
    let number = document.getElementById("numero").value; 

    fetch(`https://api.openf1.org/v1/drivers?driver_number=${number}&session_key=9158`)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
        document.getElementById("pilotos").innerHTML =

        `<div>
        <img src="${data.headshot_url}"
        alt="Imagen Piloto">
        <h3>Nombre: ${data.full_name}</h3>
        </div>`
    })
    .catch(error => console.error('Hubo un error:', error)); // Por si hay errores
}