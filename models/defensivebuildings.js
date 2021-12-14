'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class defensiveBuildings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.defensiveBuildings.belongsTo(models.factionBuildings, { foreignKey: 'buildingId' });
    }
  };
  defensiveBuildings.init({
    hp: DataTypes.INTEGER,
    buildTime: DataTypes.INTEGER,
    description: DataTypes.STRING,
    buildingId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'defensiveBuildings',
  });
  return defensiveBuildings;
};