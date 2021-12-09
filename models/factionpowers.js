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
      models.factionPowers.belongsTo(models.factionTraits, { foreignKey: 'traitId' });
      models.factionPowers.hasOne(models.offensivePowers, { foreignKey: 'supportPowerId' });
      models.factionPowers.hasOne(models.defensivePowers, { foreignKey: 'supportPowerId' });
      models.factionPowers.hasOne(models.statusPowers, { foreignKey: 'supportPowerId' });
    }
  };
  factionPowers.init({
    offensive: DataTypes.STRING,
    defensive: DataTypes.STRING,
    status: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionPowers',
  });
  return factionPowers;
};