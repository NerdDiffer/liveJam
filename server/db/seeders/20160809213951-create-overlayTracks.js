'use strict';

const dummyData = require('../dummyData');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('overlay_tracks', dummyData.overlayTracks, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('overlay_tracks', null, {});
  }
};
