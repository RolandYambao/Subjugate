'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productionBuildings', [
      {
        name: 'Barracks',
        hp: 100,
        buildTime: 25,
        description: 'Cannon Fodder Production Facility',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Enhanced Geothermal Plants',
        hp: 500,
        buildTime: 20,
        description: 'The Harvester of our Limitless Power Source',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Serf Ore Harvester',
        hp: 250,
        buildTime: 30,
        description: 'Using Plentiful Servilepods and Serfs to Harvest Resources for us',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eye of Despotism',
        hp: 150,
        buildTime: 45,
        description: 'Our Eyes and Ears are Everywhere',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Committee 871 Headquarters',
        hp: 200,
        buildTime: 100,
        description: 'Where we Research more Advance Units and Support Powers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
