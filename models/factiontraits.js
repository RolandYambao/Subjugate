'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factionTraits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.factionTraits.belongsTo(models.factions, { foreignKey: 'factionId' });
      models.factionTraits.hasOne(models.factionUnits, { foreignKey: 'traitId' });
      models.factionTraits.hasOne(models.factionBuildings, { foreignKey: 'traitId' });
      models.factionTraits.hasOne(models.factionPowers, { foreignKey: 'traitId' });
    }
  };
  factionTraits.init({
    units: DataTypes.STRING,
    buildings: DataTypes.STRING,
    supportPowers: DataTypes.STRING,
    factionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionTraits',
  });
  return factionTraits;
};