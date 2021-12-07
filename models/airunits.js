'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airUnits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.airUnits.belongsTo(models.factionUnits, { foreignKey: 'unitId' });
    }
  };
  airUnits.init({
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    description: DataTypes.STRING,
    unitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'airUnits',
  });
  return airUnits;
};