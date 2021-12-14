'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('defensiveBuildings', [
      {
        hp: 250,
        buildTime: 10,
        description: 'The Place where Cannon Fodder go to Die',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Trenches',
      },
      {
        hp: 100,
        buildTime: 15,
        description: 'Far Seeing Eyes to Hunt Down Enemies',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Watchtower',
      },
      {
        hp: 300,
        buildTime: 30,
        description: 'A Trench with Greater Survivability',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Pillbox',
      },
      {
        hp: 150,
        buildTime: 30,
        description: 'Controls the Mind of Any who go Near It',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Enslaver',
      },
      {
        hp: 500,
        buildTime: 100,
        description: 'Unleashes a Tidal Wave of Psychic Energy, Designed to Dominate the Minds of an Entire Planet',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Despotic Annihilator',
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
