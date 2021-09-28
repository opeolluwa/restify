<?php 
   require_once '../vendor/autoload.php';

$pipeline = json_decode(file_get_contents("php://input"));
//store errors
$error =[];
//validate json data
$name = filter_var($pipeline->name, FILTER_SANITIZE_STRING);
$email = filter_var($pipeline->email, FILTER_VALIDATE_EMAIL);
$subject = trim(htmlentities($pipeline->subject));
$message = trim(htmlentities($pipeline->message));
$url =   filter_var($pipeline->url, FILTER_VALIDATE_URL);


   // Create the Transport
   $transport = (new Swift_SmtpTransport('smtp.gmail.com', 587, "tls"))
     ->setUsername('adefemih214@gmail.com')
     ->setPassword('your password')
   ;
   
   // Create the Mailer using your created Transport
   $mailer = new Swift_Mailer($transport);
   
   // Create a message
   $message = (new Swift_Message('Wonderful Subject'))
     ->setFrom(['john@doe.com' => 'John Doe'])
     ->setTo(['receiver@domain.org', 'other@domain.org' => 'A name'])
     ->setBody('Here is the message itself')
     ;
   
   // Send the message
   $result = $mailer->send($message);