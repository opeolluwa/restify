<?php
//get input from json
namespace CornerStone;
require("./../class/user.php"); //path to constructor /class/user
use CornerStone\User;

//destruct json from the client into associative array
$pipeline = json_decode(file_get_contents("php://input"));
$error =[];

//validate json data
$firstname = $pipeline->firstname?  trim(htmlentities($pipeline->firstname)) : ""; 
if(!$firstname){
    $error[] ="please provide firstname";
}
$lastname = $pipeline->lastname?  trim(htmlentities($pipeline->lastname)) : ""; 
if(!$lastname){
    $error[] ="please provide lastname";
}

$middlename = $pipeline->middlename?  trim(htmlentities($pipeline->middlename)) : ""; 
if(!$middlename){
    $error[] ="please provide middlename";
}

$username = $pipeline->username?  trim(htmlentities($pipeline->username)) : ""; 
if(!$username){
    $error[] ="please provide username";
}

$email = filter_var($pipeline->email, FILTER_VALIDATE_EMAIL);
if(!$email){
    $error[] = "please provide a valid email";
}

$phone_number = $pipeline->phone_number?  trim(htmlentities($pipeline->phone_number)) : ""; 
if(!$phone_number){
    $error[] ="please provide a valid phone number";
}

 $password =   filter_var($pipeline->password);
 $confirm_password =   filter_var($pipeline->confirm_password);

 if(!$confirm_password){
    $error[] = "re-enter password in the confirm password feed";
 }
 if($confirm_password !== $password){
     $error[] = "Password does not match, re-enter 'confirm password'";
 }
 elseif((!$password) ||(strlen($password) < 8)){
     $error[] = "password must contain at least 8 characters";
 }
 $password_hash = password_hash($password, PASSWORD_DEFAULT, ['cost'=> 15]);

 if($password_hash === false){
     $error[] = "An error occured, please re-enter password";
 }

 //if no error proceed  to create user
 if( count($error) === 0){
$user = new User($surname, $firstname, $middlename,$username, $phone_number, $email,$password_hash);

//a function thta take user created, check if details does not exist and add to database, details to check for email and username
$user->save();
 }

 else {
    echo json_encode(["errors" => $error]);
 }