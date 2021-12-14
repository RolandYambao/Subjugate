'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('airUnits', [
      {
        hp: 10,
        attack: 5,
        description: 'Floating Jellyfish with Guns, Servilepods of the Sky',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Floaters',
      },
      {
        hp: 50,
        attack: 75,
        description: 'Gyroplanes carrying Simple Bombs and Machine Guns',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Blades of Terror',
      },
      {
        hp: 25,
        attack: 25,
        description: 'Floating Platforms Holding Overseers, Improves Morale through Fear',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'The All Seeing',
      },
      {
        hp: 75,
        attack: 150,
        description: 'Plays the Siren of Death before your Destruction',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Subjugators',
      },
      {
        hp: 100,
        attack: 300,
        description: 'Keeps Entire Nations under Control with a Carpet of 5000 lbs Bombs',
        unitId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Oppressors',
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
