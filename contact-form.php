<?php

    if (isset($_POST['submit'])) {

        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $subject = "User Downloaded Pre-Listing Orientation";
        $phone = $_POST['phone'];

        $mailTo = "peterbenvenuto90@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have recieved an email from ".$name.".\n\n".$mailFrom.".\n\n".$phone;

        mail($mailTo, $subject, $txt, $headers);

        header("Location: index.html?mailsend");
    }
    
?>