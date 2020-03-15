<?php

$errorMSG = "";

// NAME
if (empty($_POST["fullname"])) {
    $errorMSG = "Name is required ";
} else {
    $fullname = $_POST["fullname"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["phone"])) {
    $errorMSG .= "Phone is required ";
} else {
    $phone = $_POST["phone"];
}


$EmailTo = "peterbenvenuto90@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Full Name: ";
$Body .= $fullname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>