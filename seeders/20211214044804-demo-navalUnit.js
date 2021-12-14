'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('navalUnits', [
      {
        name: 'Sampan',
        hp: 20,
        attack: 10,
        description: 'Expendable Little Boats used for Scouting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Galley',
        hp: 100,
        attack: 50,
        description: 'Anachronistic Ships using Servilepods as Rowers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Undersear',
        hp: 75,
        attack: 150,
        description: 'The Silent Death of a Tiny Submarine',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Obliterator',
        hp: 250,
        attack: 100,
        description: 'Many Gunned Destroyers Seeking to Conquer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Kraken',
        hp: 200,
        attack: 200,
        description: 'Enslaved Monsters of the Deep in Service to the Legions',
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
