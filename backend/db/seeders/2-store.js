'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Stores', [
      {
        title: '52Kards',
        ownerId: 10,
        address: 'https://shop.52kards.com/',
      },
      {
        title: 'Kings Wild Project',
        ownerId: 13,
        address: 'https://kingswildproject.com/',
      },
      {
        title: 'Vanishing Magic',
        ownerId: 4,
        address: 'https://www.vanishingincmagic.com/playing-cards/',
      },
      {
        title: 'Ellusionist',
        ownerId: 5,
        address: 'https://ellusionist.com/collections/playing-cards',
      },
      {
        title: 'Rare Playing Cards',
        ownerId: 9,
        address: 'https://rareplayingcards.com/',
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});

  }
};
