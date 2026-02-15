<?php
header("Content-Type: application/json");

$inData = json_decode(file_get_contents('php://input'), true);

$username = $inData["login"] ?? "";
$password = $inData["password"] ?? "";

$conn = new mysqli("localhost", "TheBeast", "WeLoveCOP4331", "COP4331");
if ($conn->connect_error) {
    sendError("Database connection failed");
    exit();
}

$stmt = $conn->prepare("SELECT ID FROM Users WHERE Login=? AND Password=?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    sendResult($row["ID"]);
} else {
    sendError("Invalid username or password");
}

$stmt->close();
$conn->close();

function sendResult($userId) {
    echo json_encode([
        "id" => $userId,
        "error" => ""
    ]);
}

function sendError($msg) {
    echo json_encode([
        "id" => 0,
        "error" => $msg
    ]);
}
?>

