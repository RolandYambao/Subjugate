'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productionBuildings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.productionBuildings.belongsTo(models.factionBuildings, { foreignKey: 'buildingId' });
    }
  };
  productionBuildings.init({
    hp: DataTypes.INTEGER,
    buildTime: DataTypes.INTEGER,
    description: DataTypes.STRING,
    buildingId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productionBuildings',
  });
  return productionBuildings;
};