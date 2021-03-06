'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('defensivePowers', [
      {
        cooldownTime: 180,
        requirement: 'Command Center',
        description: 'Creates a Stasis Shield in a Selected Area',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Pillars of Rule',
      },
      {
        cooldownTime: 180,
        requirement: 'Command Center',
        description: 'Units Increase their HP in a Selected Area',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Shields of Despotism',
      },
      {
        cooldownTime: 300,
        requirement: 'Committee 871 Headquarters',
        description: 'Units Become Invulnerable within a Selected Area',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Unbreakable Will',
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
