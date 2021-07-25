'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Cards', [
        {
        name: 'Monarchs',
        userId: 2,
        storeId: 1,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0956/5418/products/monarchs2_1024x1024.jpg?v=1583386901',
        description: "After nearly a year of design and production, we invite you to experience Monarch Playing Cards. Monarch Playing Cards express elegance, clarity, and pride. \"Understated yet elegant. Like a Rolls Royce. Simply put, Monarchs define excellence. We've pioneered new and fascinating ways to push the limits and raise the bar. We utilized imported, heavyweight paper for a soft feel, yet sturdy composition. Gold foil surrounds the box design for maximum detail and visual impact.The gold metallic foil is vibrant, evoking a vintage, timeless aesthetic. The titling is embossed for pure and eloquent form. These playing cards, and the tuck case, are fit for a king. The cards are engineered with best materials and the highest standards. The cards are printed on Q1 quality stock with our signature Premium 909 Finish. Snakes twist around the evolution of sword and tree. Guiding the edges are the words \"de duobus malis, minus est semper eligenoum.\" The back design is truly a masterpiece.",
        },
        {
        name: 'Killer Bee',
        userId: 5,
        storeId: 1,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0956/5418/products/killerbee3_1024x1024.jpg?v=1553573008',
        description: "The black faces display custom pips and hold a sinister simplicity. Like something you'd expect to see on a discarded barrel of methylamine.",
        },
        {
        name: 'Union',
        userId: 1,
        storeId: 5,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0940/8790/products/union-7_900x.JPG?v=1568714738',
        description: 'Designed by Jay Fletcher and produced by Theory11, the Union deck is inspired by the colonial American history. The tuck case features gold embossed accents. The deck comes with two custom Jokers, custom court cards, a custom Ace of Spades, and a double backer',
        },
        {
        name: 'Citizens',
        userId: 8,
        storeId: 5,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0940/8790/products/citizens-1_720x.jpg?v=1568752410',
        description: 'Luxurious and breath-taking are the only words needed to describe the Citizens card deck by Theory11. These playing cards are amazing in every way, from their beautiful illustrations to magnificent colors. Designed by Kevin Cantrell, no detail was overlooked in its creation. The number cards are a nice traditional balance to the otherwise luxurious court cards. ',
        },
        {
        name: 'Hellions v4',
        userId: 12,
        storeId: 4,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0297/4597/1244/files/hellions-v4-1.jpg?v=1596571754',
        description: 'A beautiful yet contemporary deck. Only the chosen ones shall ever obtain it.',
        },
        {
        name: 'Ghost Cohorts',
        userId: 10,
        storeId: 4,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0297/4597/1244/products/P1080770_x1200.jpg?v=1606244402',
        description: 'This vintage casino-style deck was designed with simplicity in mind. From our classic court cards to the nostalgic back design, Cohorts were engineered to look unassuming on the card table or in the hands of a master card mechanic.',
        },
        {
        name: 'Gilded Bicycle Rune',
        userId: 9,
        storeId: 3,
        imageUrl: 'https://vinc.gumlet.io/gallery/photos/gilded-bicycle-rune-playing-cards-3.jpg?w=900&dpr=1.0',
        description: 'A completely custom deck of playing cards based on the Elder Futhark, the oldest runic alphabet from Germanic & Nordic tribes. You will find a total of 24 runic letters used on the number & court cards. The runes on the aces spell out the corresponding suit and the jokers feature a decorative octagram. The main feature of the back design is based on the famous rune circles. A double back & informational card are also included.',
        },
        {
        name: 'Bicycle Botanica',
        userId: 4,
        storeId: 3,
        imageUrl: 'https://vinc.gumlet.io/gallery/photos/bicycle-botanica-playing-cards-3.jpg?w=900&dpr=1.0',
        description: 'Botanica from Bicycle Playing Cards features a beautifully rich copper foil to accentuate the botanical-themed design with a timeless aesthetic. This unique playing card takes inspiration from the elegant, natural shapes found in a blossoming garden.',
        },
        {
        name: 'Holographic Legal Tender V2',
        userId: 8,
        storeId: 2,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0218/5956/products/LegalTenderV2_3of41.jpg?v=1606494227',
        description: "Holographic Legal Tender Version II is Kings Wild Project's next offering in a long line of luxury playing cards. Inspired by artist Jackson Robinson and his love of currency art and banknote engraving, Legal Tender is the culmination of some of Kings Wild's most breathtaking artwork combined with industry-leading advancements in printing technology and production.",
        },
        {
        name: 'Federal 52 2nd Edition',
        userId: 1,
        storeId: 2,
        imageUrl: 'https://cdn.shopify.com/s/files/1/0218/5956/products/Fed522ndReshoot_7of13.jpg?v=1596056726',
        description: 'The Federal 52 2nd Edition is a hybrid of both the original Federal 52 court card set and artwork (that was featured in the Federal 52, Gold Certificate, and Silver Certificate decks) and the artwork of the Reserve Note decks. In this edition, I have taken my favorite artistic elements of the entire Federal 52 series and created an entirely new and unique deck of playing cards.',
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Cards', null, {});

  }
};
