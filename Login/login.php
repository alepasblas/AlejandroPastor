<?php
// Verifica si se han enviado datos de formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = "Alejandro"; 
    $password = "12341234"; 

    if ($_POST["username"] == $username && $_POST["password"] == $password) {
        // Inicio de sesión exitoso
        echo "<script>
                    setTimeout 
                    (
                        function(){
                            window.location.href = '../index.html'; 
                        }
                        , 3000
                    );
            </script>";
    } else {
        // Credenciales incorrectas
        echo "<p>Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.</p>";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Datos enviados</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f3f3f3;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      text-align: center;
    }
    p {
      font-size: 24px;
      color: #333;
    }
  </style>  
</head>
<body>
  <div class="container">
    <p>Inicio de sesión exitoso. Redireccionando...</p>
  </div>
</body>
</html>

