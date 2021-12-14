'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('offensivePowers', [
      {
        name: 'Reign of Fire',
        cooldownTime: 180,
        requirement: 'Command Center',
        description: 'Fireballs Fall from the Sky to Smite the Enemies of the Legion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fervent Despoilation',
        cooldownTime: 180,
        requirement: 'Command Center',
        description: 'Mobs of Cannon Fodder Militia invade the Map, Attacking your Enemies',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Spirit of Oblivion',
        cooldownTime: 300,
        requirement: 'Committee 871 Headquarters',
        description: 'Flying Drones Swarm a Large Area, Melting all who Stand in their Way',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'March of Tyranny',
        cooldownTime: 300,
        requirement: 'Committee 871 Headquarters',
        description: 'All Troops within an Area become Invulnerable for 10 Seconds',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Edict of Annihilation',
        cooldownTime: 480,
        requirement: 'Despotic Annihilator',
        description: 'Fires the Despotic Annihilator to Destroy All in an Area',
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
