'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('single_tracks', dummyData.singleTracks, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('single_tracks', null, {});
  }
};
