'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.factions.hasOne(models.factionTraits, { foreignKey: 'factionId' });
    }
  };
  factions.init({
    firstFaction: DataTypes.STRING,
    secondFaction: DataTypes.STRING,
    thirdFaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'factions',
  });
  return factions;
};