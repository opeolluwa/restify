'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
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
    firstname: {
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
    lastname: {
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
    * store user phone with country code,
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
    //TODO: add password field
  }, {
    sequelize,
    modelName: 'User', //field name in sequelize
    tableName: "user_information" //table name in users database
  });
  return User;
};