let productos = [];
leer();

function anadirProductos() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;

    for(let i=0; i<productos.length; i++)
    {
        if(nombre == productos[i].nombre)
        {
            Swal.fire({
                title: "Error",
                text: "Nombre repetido",
                icon: "error"
              });
            return ;
        }
    }

    productos.push({nombre:nombre, cantidad:cantidad});
    guardar();
    mostrarProductos();
}



function guardar() {
    localStorage.setItem('lista', JSON.stringify(productos));
}

function leer() {

  const storage= localStorage.getItem('lista');
  if(!storage){
    return;
  }
  productos = JSON.parse(storage);
  mostrarProductos();

}

function mostrarProductos() {
    document.getElementById("lista").innerHTML = "";
    productos.forEach((producto, i) => {
        document.getElementById("lista").innerHTML +=
        `<li>${producto.nombre}:${producto.cantidad}
        <button type="button" onclick="borrarUno(${i})">Borrar</button>
        </li>`;
    });
    console.log(productos);
}

function borrarTodo() {
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podras deshacer la accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, borralo'

      }).then((result) => {
        if (result.isConfirmed) {
            productos.length = 0;
            localStorage.removeItem('lista');
            Swal.fire(
                '¡Borrado!',
                'La lista ha sido borrada.',
                'success'
            );
            mostrarProductos();
        }
      });
    
}

function borrarUno(posicion){
    productos.splice(posicion, 1);
    guardar();
    mostrarProductos();
}