'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class baseBuildings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  baseBuildings.init({
    hp: DataTypes.INTEGER,
    buildTime: DataTypes.INTEGER,
    description: DataTypes.STRING,
    buildingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'baseBuildings',
  });
  return baseBuildings;
};