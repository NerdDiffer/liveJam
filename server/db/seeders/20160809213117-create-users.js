'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', dummyData.users, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
