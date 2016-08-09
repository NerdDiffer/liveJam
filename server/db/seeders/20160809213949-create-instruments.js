'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('instruments', dummyData.instruments, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('instruments', null, {});
  }
};
