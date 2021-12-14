'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('statusPowers', [
      {
        cooldownTime: 120,
        requirement: 'Command Center',
        description: 'Slow Healing Aura Placed in a Selected Area',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Divine Blessing',
      },
      {
        cooldownTime: 120,
        requirement: 'Command Center',
        description: 'Enemies in a Selected Area Move and Attack Slower',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Oppressive Gaze',
      },
      {
        cooldownTime: 300,
        requirement: 'Committee 871 Headquarters',
        description: 'Enemies in a Selected Area Immediately Retreat in Terror',
        supportPowerId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'Tyrannical Terror',
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
