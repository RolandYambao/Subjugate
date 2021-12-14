'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class offensivePowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.offensivePowers.belongsTo(models.factionPowers, { foreignKey: 'supportPowerId' });
    }
  };
  offensivePowers.init({
    cooldownTime: DataTypes.INTEGER,
    requirement: DataTypes.STRING,
    description: DataTypes.STRING,
    supportPowerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'offensivePowers',
  });
  return offensivePowers;
};