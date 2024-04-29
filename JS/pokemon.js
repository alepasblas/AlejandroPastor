function mostrarPokemon(){
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.results.forEach((pokemon, i) => {
            document.getElementById("pkm").innerHTML +=
            `<li onclick="mostrarDetalles(${i+1});">${pokemon.name}</li>`
        });

    })
    .catch(error => console.error('Hubo un error: ', error))
}

function mostrarImagen()
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)

        Swal.fire({
            html: `<h1>${data.name}</h1>
            <img src=${data.sprites.front_default}></img>
            <img src="${data.sprites.front_shiny}">
            ${data.sprites.front_female?  `<img src="${data.sprites.front_female}">` : " "}`
        
            
        })
    })
    
    .catch(error => console.error('Hubo un error: ', error))
}

function mostrarDetalles(i) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

            Swal.fire({
                html: `<h1>${data.name}</h1>
                <img src=${data.sprites.front_default}></img>
                <img src="${data.sprites.front_shiny}">
                ${data.sprites.front_female?  `<img src="${data.sprites.front_female}">` : " "}

                <br>
                <audio src="${data.cries.latest}" controls autoplay></audio>`
            
                
            })
        })
        
    .catch(error => console.error('Hubo un error: ', error))
}

mostrarPokemon();