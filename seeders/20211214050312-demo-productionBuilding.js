'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('productionBuildings', [
      {
        hp: 100,
        buildTime: 25,
        description: 'Cannon Fodder Production Facility',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Barracks',
      },
      {
        hp: 200,
        buildTime: 40,
        description: 'Creator of the Tyrannical Vanguard',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'War Factory',
      },
      {
        hp: 200,
        buildTime: 40,
        description: 'Factories for the Deep',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Naval Yard',
      },
      {
        hp: 150,
        buildTime: 50,
        description: 'Creator of Terror from the Sky',
        buildingId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Airfield',
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
