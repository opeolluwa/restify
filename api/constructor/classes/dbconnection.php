<?php
//object oriented database connector
declare(strict_types=1);

namespace CornerStone;

class DataBaseConnector
{
    //class properties
    public $config_file_path;
    public $config_var_name;
    //class constructor
    public function __construct(string $config_file_path, string $config_var_name)
    {
        $this->config_file_path = $config_file_path;
        $this->config_var_name = $config_var_name;
    }
    //class methode
    public function connect()
    {
        //debus config file path and include it
        include($this->config_file_path);
        $pdo = new \PDO(
            sprintf(
                "mysql:host=%s;dbname=%s;port=%s;charset=%s",
                $this->config_var_name['host'],
                $this->config_var_name['name'],
                $this->config_var_name['port'],
                $this->config_var_name['charset'],
            ),
            $this->config_var_name['username'],
            $this->config_var_name['password'],
        );
    }
}
