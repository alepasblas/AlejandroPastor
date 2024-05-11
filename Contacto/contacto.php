<?php
  // La variable global $_GET nos permite acceder a los datos enviados con el método GET
  $nombre = $_GET['nombre'];
  $email = $_GET['email'];
  $telefono = $_GET['telefono'];
  $asunto = $_GET['asunto'];
  $mensaje = $_GET['mensaje'];

  // Colocamos todos los datos en el archivo "mensajes.csv" en una nueva línea cada vez
  file_put_contents("mens.csv", "$nombre,$email,$telefono,$asunto,$mensaje,\n", FILE_APPEND);
  

  // Mostramos un enlace a la página anterior y también al archivo para comprobar el resultado
  echo "<p>Datos enviados</p>";
  //echo "<p>Haz click <a href='".$_SERVER['HTTP_REFERER']."'>aquí</a> para ir a la página anterior</p>";
  //echo "<p>Haz click <a href='mens.csv' target='_blank'>aquí</a> para ver todos los mensajes</p>";
?>