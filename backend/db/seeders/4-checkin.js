'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Checkins', [
      {
        userId: 3,
        deckId: 1,
        comment: 'These are beautiful. Bought 300 packs. Will never open any of them.'
      },
      {
        userId: 6,
        deckId: 1,
        comment: 'FREE THE PIP YOU JERK!!'
      },
      {
        userId: 5,
        deckId: 2,
        comment: 'I would love to add these to my collection.'
      },
      {
        userId: 5,
        deckId: 2,
        comment: 'Are there any other packs similar to this one?'
      },
      {
        userId: 3,
        deckId: 3,
        comment: 'Yo! Just grabbed these day 1!'
      },
      {
        userId: 8,
        deckId: 3,
        comment: 'I\'ve been saving to afford these. So excited to feel them in my hands! =P'
      },
      {
        userId: 12,
        deckId: 4,
        comment: 'Whenever my wife left me I used these exact brand of card to fill the void in my life.'
      },
      {
        userId: 15,
        deckId: 4,
        comment: 'These are okay. Didn\'t like the feel.'
      },
      {
        userId: 14,
        deckId: 5,
        comment: 'Light weight and excellent. A true example of masterclass.'
      },
      {
        userId: 11,
        deckId: 5,
        comment: 'Me and Bubba jenkins used to rolls these up into airplanes.'
      },
      {
        userId: 10,
        deckId: 6,
        comment: 'Mine just came today, going to have to order more of these. So beautiful.'
      },
      {
        userId: 9,
        deckId: 6,
        comment: 'Can\'t believe I tore these on the first day. Dangit.'
      },
      {
        userId: 7,
        deckId: 7,
        comment: 'First.'
      },
      {
        userId: 13,
        deckId: 7,
        comment: 'How could anyone pass these up? Look at them!'
      },
      {
        userId: 1,
        deckId: 8,
        comment: 'I wish I could afford more of these but the divorce stole everything from me.'
      },
      {
        userId: 2,
        deckId: 8,
        comment: 'Wish I could design something as beautiful as these.'
      },
      {
        userId: 4,
        deckId: 9,
        comment: 'Where can I find these to purchase?'
      },
      {
        userId: 4,
        deckId: 9,
        comment: 'Click on the image it will take you to the store site for purchase.'
      },
      {
        userId: 7,
        deckId: 10,
        comment: 'First'
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Checkins', null, {});

  }
};
