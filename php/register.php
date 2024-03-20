<?php
// Get form data
$name = $_POST["name"];
$email = $_POST["email"];
$dob = $_POST["birthDate"];
$phoneNumber = $_POST["phoneNumber"];
$female = $_POST["female"];
$male = $_POST["male"];
$pass = $_POST["password"];

$gender = "";
if ($male) $gender = "Male";
if ($female) $gender = "Female";

// Validate form data (e.g., check for empty fields, validate email format, etc.)

// Database connection
$con = mysqli_connect("localhost:3307", "root", "root", "users");
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare SQL statement with prepared statement
$sql = "INSERT INTO useraccount (name, email, dob, phonenumber, gender, password) VALUES (?, ?, ?, ?, ?, ?)";
$stmt = mysqli_stmt_init($con);

if (mysqli_stmt_prepare($stmt, $sql)) {
    // Bind parameters
    mysqli_stmt_bind_param($stmt, "ssssss", $name, $email, $dob, $phoneNumber, $gender, $pass);
    
    // Execute the statement
    if (mysqli_stmt_execute($stmt)) {
        echo "User details added successfully";
    } else {
        echo "Error: " . mysqli_stmt_error($stmt);
    }

    // Close statement
    mysqli_stmt_close($stmt);
} else {
    echo "Error: " . mysqli_error($con);
}

// Close connection
mysqli_close($con);
?>

