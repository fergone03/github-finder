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