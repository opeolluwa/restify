# portfolio-api

## Overview 
_A serverside script written in PHP to help developer to quickly scaffold serverside projects._
_This project is built using MySQL RDMS 
but it should well with any other RDMS_
### features include 
- user authentication
- blogging
- managing contacts 
- news letter authoring and management
- sending emails using templates



## Dependencies 
1. [Tiny file manager](https://github.com/prasathmani/tinyfilemanager)
2. [firebase/php-jwt](https://github.com/firebase/php-jwt)
3. [symfony/mailer]()


## Installation
*The installation guide assumes previous exposure to dependencies manager with PHP's **composer**  and installation of command line PHP and node package manager if not we recommend you read up respective documentation*

1. Navigate to the project root directory in you CLI
2. Run the following command:
````shell
$ composer install
````
>_this will download and install all dependencies_

3. Run the following command to start your development server 
````shell
$ php  -S localhost:3000
````
>_this will beging your development server on localhost, port 3000. You can specify another port as required_

4. To use any of the service visit 
````cURL
 http:// localhost:3000/service
````
eg, using mail and file manager would be 
`http:// localhost:3000/mail` and `http:// localhost:3000/files
` respectively