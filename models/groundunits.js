'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groundUnits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  groundUnits.init({
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    description: DataTypes.STRING,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'groundUnits',
  });
  return groundUnits;
};