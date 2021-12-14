'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class navalUnits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.navalUnits.belongsTo(models.factionUnits, { foreignKey: 'unitId' });
    }
  };
  navalUnits.init({
    hp: DataTypes.INTEGER,
    attack: DataTypes.INTEGER,
    description: DataTypes.STRING,
    unitId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'navalUnits',
  });
  return navalUnits;
};