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
    id: {
      type: DataTypes.INTEGER
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true, //validate email
      validate: {
        notEmpty: true
      }
    },
    subscriptionId: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'NewsLetterSubscriber', //field name in sequelize
    tableName: "news_letter_subscriber", //table name in users database
  });
  return NewsLetter;
};