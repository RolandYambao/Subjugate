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
      models.factionUnits.hasOne(models.groundUnits, { foreignKey: 'unitId' });
      models.factionUnits.hasOne(models.navalUnits, { foreignKey: 'unitId' });
      models.factionUnits.hasOne(models.airUnits, { foreignKey: 'unitId' });
    }
  };
  factionUnits.init({
    ground: DataTypes.STRING,
    naval: DataTypes.STRING,
    air: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionUnits',
  });
  return factionUnits;
};