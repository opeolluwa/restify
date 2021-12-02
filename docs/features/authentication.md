# Authentication

## Overview

- The _auth_ endpoint is used for user authentication, user registration and user authorization, in develiopment enviroment, the users table contain the following fields

```curl
http://localhost:3000/auth
```

- The table is named **_users_** can be inspected using:

```mysql
mysql> SHOW COLUMNS FROM `users`
```

| **Field**         | **Type**     | **Null** | **Key** | **Default**       | **Extra**         |
| ----------------- | ------------ | -------- | ------- | ----------------- | ----------------- |
| user_id           | varchar(300) | NO       | PRI     | NULL              |                   |
| user_first_name   | varchar(100) | NO       |         | NULL              |                   |
| user_last_name    | varchar(100) | NO       |         | NULL              |                   |
| user_email        | varchar(100) | NO       | UNI     | NULL              |                   |
| user_phone        | varchar(20)  | YES      |         | NULL              |                   |
| password          | varchar(300) | YES      |         | NULL              |                   |
| registration_date | datetime     | YES      |         | CURRENT_TIMESTAMP | DEFAULT_GENERATED |

## Database table fields and description

| **Field**         | **Description**                                                            | **Example**                                                   |
| ----------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| user_id           | user identity stored using [UUID](https://google.com?q=uuid) specification | 2d633e2e-9432-4982-8a18-ebbf7971f0e4                          |
| password          | user password hased using [UUID](https://google.com?q=bcrypt) algorithm    | $2b$13$obk.T0Lp.reIJnLjfJQ9WOVFs3gRsbofaEATejeDOtIPnTSNR72A6  |
| registration_date | the time stamp the user is registered                                      | 2021-11-30T04:40:42.000Z                                      |
