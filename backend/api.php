<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

function fetchGitHubData($url) {
    $options = [
        "http" =>    [
            "method" => "GET",
            "header" => "User-Agent: PHP"
        ]
    ];
    $context = stream_context_create($options);

    $response = file_get_contents($url, false, $context);

    return json_decode($response);
}

if (isset($_GET['username'])) {
    $username = htmlspecialchars($_GET['user']);

    $userData = fetchGitHubData("https://api.github.com/users/$username");
    $repos = fetchGitHubData("https://api.github.com/users/$username/repos");

    echo json_encode([
        "user" => $userData,
        "repos" => $repos
    ]);
} else {
    echo json_encode(["error" => "No se proporcionó un usuario"]);
}
?>