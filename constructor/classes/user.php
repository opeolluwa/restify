<?php
//force type definition
declare(strict_types=1);

namespace CornerStone;

class User
{
    //class properties
    public $fullname;
    public $username;
    public $email;
    public $phone_number;
    private $password_hash;

    //constructor
    public function __construct(string $firstname, string $lastname, string $middlename, string $username, string $email, $phone_number, $password)
    {
        //map data to class properties
        $this->fullname = trim($firstname) . " " . trim($lastname) . " " . trim($middlename);
        $this->username = $username;
        $this->email = $email;
        $this->phone_number = $phone_number;
        $this->password_hash = password_hash($password, PASSWORD_DEFAULT, ["cost" => 15]);
    }

    //class functions-> register
    public function registerUser()
    {
    }
}
