'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('airUnits', [
      {
        name: 'Floaters',
        hp: 10,
        attack: 5,
        description: 'Floating Jellyfish with Guns, Servilepods of the Sky',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Blades of Terror',
        hp: 50,
        attack: 75,
        description: 'Gyroplanes carrying Simple Bombs and Machine Guns',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'The All Seeing',
        hp: 25,
        attack: 25,
        description: 'Floating Platforms Holding Overseers, Improves Morale through Fear',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Subjugators',
        hp: 75,
        attack: 150,
        description: 'Plays the Siren of Death before your Destruction',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oppressors',
        hp: 100,
        attack: 300,
        description: 'Keeps Entire Nations under Control with a Carpet of 5000 lbs Bombs',
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
