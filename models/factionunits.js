'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factionUnits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.factionUnits.belongsTo(models.factionTraits, { foreignKey: 'traitId' });
      models.factionUnits.hasMany(models.groundUnits, { foreignKey: 'unitId' });
      models.factionUnits.hasMany(models.navalUnits, { foreignKey: 'unitId' });
      models.factionUnits.hasMany(models.airUnits, { foreignKey: 'unitId' });
    }
  };
  factionUnits.init({
    groundUnits: DataTypes.STRING,
    navalUnits: DataTypes.STRING,
    airUnits: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionUnits',
  });
  return factionUnits;
};