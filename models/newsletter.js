'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NewsLetter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  NewsLetter.init({
    //subscriber email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true, //validate email\
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    //user subscription id 
    subscriptionId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },

    //store email-validation token sent to the client 
    registrationToken: {
      type: DataTypes.STRING,
    },

    //registration date 
    //TODO: add default init to date 
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
  
    }
  }, {
    sequelize,
    modelName: 'NewsLetter', //field name in sequelize
    tableName: "news_letter", //table name in users database
  });
  return NewsLetter;
};