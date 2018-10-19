<?php

$user = "root";
$pass = "";
$host = "localhost";
// name of DATABASE
$db = "db_cooperinfo";

// FORM THE CONNECTION
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'utf8');

// TEST FOR BREAK
if (!$conn) {
    echo "something broke!";
    exit;
}

// // QUERY THE DATABASE
// $myQuery = "SELECT * FROM mainmodel";
// $result = mysqli_query($conn, $myQuery);
// $rows = array();

// // DISPLAY THAT INFORMATION
// while ($row = mysqli_fetch_assoc($result)) {
//     $rows[] = $row;
// }

//get one item from db
if (isset($_GET["modelNo"])) {
    $car = $_GET["modelNo"];

    $myQuery = "SELECT * FROM mainmodel WHERE model='$car'";

    
    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    // DISPLAY THAT INFORMATION
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

echo json_encode($rows);

?>