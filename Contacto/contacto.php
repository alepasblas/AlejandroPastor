<?php
  // La variable global $_GET nos permite acceder a los datos enviados con el método GET
  $nombre = $_GET['nombre'] ?? '';
  $email = $_GET['email'] ?? '';
  $telefono = $_GET['telefono'] ?? '';
  $asunto = $_GET['asunto'] ?? '';
  $mensaje = $_GET['mensaje'] ?? '';

  // Colocamos todos los datos en el archivo "mensajes.csv" en una nueva línea cada vez
  file_put_contents("mens.csv", "$nombre,$email,$telefono,$asunto,$mensaje,\n", FILE_APPEND);
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datos enviados</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .button {
      display: inline-block;
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
    }
    .button:hover {
      background-color: #0056b3;
    }
  </style>  
</head>
<body>
  <div class="container">
    <h2>Datos enviados</h2>
    <p><strong>Nombre:</strong> <?php echo htmlspecialchars($nombre); ?></p>
    <p><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></p>
    <p><strong>Telefono:</strong> <?php echo htmlspecialchars($telefono); ?></p>
    <p><strong>Asunto:</strong> <?php echo htmlspecialchars($asunto); ?></p>
    <p><strong>Mensaje:</strong> <?php echo htmlspecialchars($mensaje); ?></p>
    <a href="..\index.html" class="button">&larr; Volver al inicio</a>
  </div>
</body>
</html>
