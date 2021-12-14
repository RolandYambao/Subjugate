'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('groundUnits', [
      {
        hp: 10,
        attack: 5,
        description: 'Selectively Bred Arthropod Cannon Fodder',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Servilepod',
      },
      {
        hp: 20,
        attack: 15,
        description: 'Human Infantry Serving in Place of their Masters',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Substitutes',
      },
      {
        hp: 100,
        attack: 35,
        description: 'A Vessel for Blades and Carnage',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Eviserators',
      },
      {
        hp: 150,
        attack: 0,
        description: 'A Diplomatic Machine, used for Making Friends',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Masterminds',
      },
      {
        hp: 300,
        attack: 100,
        description: 'A Vehicle of Pure Annihilation',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Adjudicator',
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
