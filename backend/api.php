<?php
// Permite el acceso desde cualquier origen
header('Access-Control-Allow-Origin: *');
// Establece el tipo de contenido a JSON
header('Content-Type: application/json');
// Permite solo el método GET
header('Access-Control-Allow-Methods: GET');

// Función para obtener datos de GitHub
function fetchGitHubData($url) {
    // Opciones para la solicitud HTTP
    $options = [
        "http" => [
            "method" => "GET", // Método de la solicitud
            "header" => "User-Agent: PHP" // Cabecera de la solicitud para identificarse como cliente PHP
        ]
    ];
    
    // Crear un contexto de flujo con las opciones especificadas
    $context = stream_context_create($options); 
    // Un contexto de flujo es una forma de personalizar el comportamiento de las funciones de entrada/salida, 
    // permitiendo configurar opciones como encabezados HTTP o autenticación al hacer solicitudes.

    // Obtener el contenido de la URL usando el contexto de flujo
    $response = file_get_contents($url, false, $context);
    // file_get_contents() recupera el contenido de un archivo o una URL como una cadena.
    // En este caso, se usa para hacer una solicitud HTTP GET a la API de GitHub y obtener la respuesta en formato JSON.

    // Decodificar la respuesta JSON y devolverla como un objeto PHP
    return json_decode($response); 
    // json_decode() convierte una cadena JSON en un objeto o array PHP, permitiendo su manipulación en el código.
}

// Verificar si se ha proporcionado un nombre de usuario en la URL
if (isset($_GET['username'])) { 
    // isset() comprueba si la variable está definida y no es NULL, evitando errores al acceder a valores no definidos.

    // Sanitizar el nombre de usuario proporcionado para evitar ataques XSS
    $username = htmlspecialchars($_GET['username']);
    // htmlspecialchars() convierte caracteres especiales en entidades HTML, previniendo la ejecución de código malicioso en la salida.

    // Obtener datos del usuario de GitHub
    $userData = fetchGitHubData("https://api.github.com/users/$username");
    // Obtener repositorios del usuario de GitHub
    $repos = fetchGitHubData("https://api.github.com/users/$username/repos");

    // Devolver los datos del usuario y sus repositorios en formato JSON
    echo json_encode([
        "user" => $userData,
        "repos" => $repos
    ]);
} else {
    // Devolver un mensaje de error si no se proporcionó un nombre de usuario
    echo json_encode(["error" => "No se proporcionó un usuario"]);
}
?>
