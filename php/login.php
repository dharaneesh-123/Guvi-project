<?php
$email = $_POST["email"];
$pass = $_POST["pass"];

$con = mysqli_connect("localhost:3307", "root", "root", "users");
$sql = "select * from useraccount where email='$email' and password='$pass'";

$result = mysqli_query($con,$sql);
$noofrow = mysqli_num_rows($result);

if($noofrow == 1) {

    echo "Login Successfully <br>";
    $row  = mysqli_fetch_assoc($result);

    echo "Welcome " . $row["name"] ."<br>";

    while($row) {
        echo "id: " . $row["userid"]. "<br> Name : " . $row["name"]. "<br> " . "Email : ". $row["email"]. "<br>";
        echo "DOB : " . $row["dob"] . "<br> PhoneNumber : " . $row["phonenumber"] ."<br> Gender : ".$row["gender"]; 
        $row = mysqli_fetch_assoc($result);
    }
}
else echo "username or password Incorrect";

?>
