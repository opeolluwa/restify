# Database 

The database has the following tables date gives you access to a numner of funtionalties
1. contacts

2. emails
3. project
4. skills
5. users


<br/>
<br/>
<br/>


## contact table
**Field**  | **Type** | **Null** | **Key** | **Default**           | **Extra**     
------ | ------- | -------| -------- | ------- | --------        
 contact_id    | int          | NO   | PRI | NULL              | auto_increment    
contact_name  | varchar(200) | YES  |     | NULL              |                   
 contact_email | varchar(200) | YES  | UNI | NULL              |                   
contact_phone | varchar(50)  | YES  | UNI | NULL              |                   
date_added    | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED |

<br/>
<br/>
<br/>


## emails table
**Field**  | **Type** | **Null** | **Key** | **Default**           | **Extra**     
------ | ------- | -------| -------- | ------- | -------- 
user_id           | varchar(300) | NO   | PRI | NULL              |                   
 user_first_name   | varchar(100) | NO   |     | NULL              |                   
 user_last_name    | varchar(100) | NO   |     | NULL              |                   
 user_email        | varchar(100) | NO   | UNI | NULL              |                   
 registration_date | datetime     | YES  |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED 



## projects  table 
**Field**  | **Type** | **Null** | **Key** | **Default**           | **Extra**     
------ | ------- | -------| -------- | ------- | -------- 