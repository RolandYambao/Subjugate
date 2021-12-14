'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('groundUnits', [
      {
        name: 'Servilepod',
        hp: 10,
        attack: 5,
        description: 'Selectively Bred Arthropod Cannon Fodder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Substitutes',
        hp: 20,
        attack: 15,
        description: 'Human Infantry Serving in Place of their Masters',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eviserators',
        hp: 100,
        attack: 35,
        description: 'A Vessel for Blades and Carnage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Masterminds',
        hp: 150,
        attack: 0,
        description: 'A Diplomatic Machine, used for Making Friends',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Adjudicator',
        hp: 300,
        attack: 100,
        description: 'A Vehicle of Pure Annihilation',
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
