'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('statusPowers', [
      {
        name: 'Divine Blessing',
        cooldownTime: 120,
        requirement: 'Command Center',
        description: 'Slow Healing Aura Placed in a Selected Area',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Oppressive Gaze',
        cooldownTime: 120,
        requirement: 'Command Center',
        description: 'Enemies in a Selected Area Move and Attack Slower',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tyrannical Terror',
        cooldownTime: 300,
        requirement: 'Committee 871 Headquarters',
        description: 'Enemies in a Selected Area Immediately Retreat in Terror',
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
