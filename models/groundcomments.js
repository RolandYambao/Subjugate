'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groundComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  groundComments.init({
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groundComments',
  });
  return groundComments;
};