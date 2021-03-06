'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class factionBuildings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.factionBuildings.belongsTo(models.factionTraits, { foreignKey: 'traitId' });
      models.factionBuildings.hasOne(models.baseBuildings, { foreignKey: 'buildingId' });
      models.factionBuildings.hasOne(models.productionBuildings, { foreignKey: 'buildingId' });
      models.factionBuildings.hasOne(models.defensiveBuildings, { foreignKey: 'buildingId' });
    }
  };
  factionBuildings.init({
    base: DataTypes.STRING,
    production: DataTypes.STRING,
    defensive: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionBuildings',
  });
  return factionBuildings;
};