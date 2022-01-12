//load in dependencies
const sequelizeBcrypt = require('sequelize-bcrypt');


//bcrypt options
const sequelizeBcryptOptions = {
    field: 'password', // secret field to hash, default: 'password'
    rounds: 12, // used to generate bcrypt salt, default: 12
    compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
}


//create and export "user" table with the following fields {userId, firstName, lastName, email, phone, password}
module.exports = (sequelize, DataTypes) => {
    //create user
    const User = sequelize.define("user", {

        /*
        * store user id as primary key
       * generate key with UUID
       * uuid must be unique and not null
       */
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },


        /*
         * store user firstname
        * name must not be null
        */
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },


        /*
          * store user lastname
        * name must not be null
        */
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        /*
        * store user email,
       * email must not be null
       * email must be unique 
       * email must not be nul
       */
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true, //validate email
            validate: {
                notEmpty: true
            }
        },

        /*
       * store user phone with countru code,
      * phone may be null
      * phone must be unique 
      */
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        /*
          * store user hashed password,
         * password is hashed with bcrypt
         * password must not be null
         */
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        //dont allow pluralization of table names
    }, { freezeTableName: true });

    //TODO: test sequelize-bcrypt plugin
    // use imported plugin
    sequelizeBcrypt(User, sequelizeBcryptOptions)

    //TODO: remove usage form here
    /* USAGE 
    User.create({ email: 'john.doe@example.com', password: 'SuperSecret!' });
    // { id: 1, email: 'john.doe@example.com', password: '$2a$12$VtyL7j5xx6t/GmmAqy53ZuKJ1nwPox5kHLXDaottN9tIQBsEB3EsW' }
    
    const user = await User.findOne({ where: { email: 'john.doe@example.com' } });
    user.authenticate('WrongPassword!'); // false
    user.authenticate('SuperSecret!'); // true
    */

    //export user
    return User
}