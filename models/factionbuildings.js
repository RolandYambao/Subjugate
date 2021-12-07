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
      models.factionBuildings.hasMany(models.baseBuildings, { foreignKey: 'buildingId' });
      models.factionBuildings.hasMany(models.productionBuildings, { foreignKey: 'buildingId' });
      models.factionBuildings.hasMany(models.defenseBuildings, { foreignKey: 'buildingId' });
    }
  };
  factionBuildings.init({
    baseBuildings: DataTypes.STRING,
    productionBuildings: DataTypes.STRING,
    defenseBuildings: DataTypes.STRING,
    traitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'factionBuildings',
  });
  return factionBuildings;
};