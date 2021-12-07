'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factionPowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  factionPowers.init({
    offensivePowers: DataTypes.STRING,
    defensivePowers: DataTypes.STRING,
    statusPowers: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionPowers',
  });
  return factionPowers;
};