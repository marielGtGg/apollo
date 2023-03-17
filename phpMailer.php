<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

if (empty($_POST['email'])) {
    header('Location: /index.php?mailerror=email#contact');
} elseif (empty($_POST['body'])) {
    header('Location: /index.php?mailerror=body#contact');
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = '100c31fb6c1416';
    $mail->Password = '06ed07f1db59d9';
    $mail->CharSet = 'UTF-8';                               

    //Recipients
    $mail->setFrom($_POST['email']);
    $mail->addAddress('info@apollo.com');     //Add a recipient

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->Body    = $_POST['body'];

    $mail->send();
    header('location: /index.php?mailsucceed=true#contact');
} catch (Exception $e) {
    //header('location: /index.php?mailsucceed=false#contact');
    echo "Le message n'a pas pu être envoyé. Erreur : {$mail->ErrorInfo}";
}