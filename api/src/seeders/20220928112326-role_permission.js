'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('RolePermissions', [
      {
        roleId: 1,
        permissionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 1,
        permissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 1,
        permissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 1,
        permissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 1,
        permissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 1,
        permissionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 2,
        permissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 2,
        permissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 2,
        permissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        roleId: 2,
        permissionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('RolePermissions', null, {});
  }
};
