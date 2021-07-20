'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'thomas@thomas.com',
        username: 'thomas',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'andre@thomas.com',
        username: 'andre',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'jihk@thomas.com',
        username: 'Jihk',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'flourish@thomas.com',
        username: 'flourish',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'faroS@thomas.com',
        username: 'faroS',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'debrah@thomas.com',
        username: 'ConTrol',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'tyler@thomas.com',
        username: 'bigTex14',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'demo@thomas.com',
        username: 'DemoUser',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'nico@thomas.com',
        username: 'Nico',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'absolute@thomas.com',
        username: 'ABSOLUTE',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'howdy@thomas.com',
        username: 'notTyler',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'userLame@thomas.com',
        username: 'userLame',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'Bullet@thomas.com',
        username: 'Bullet',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'revolution@thomas.com',
        username: 'Revolution',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
      {
        email: 'kublah@thomas.com',
        username: 'Kublah',
        hashedPassword: bcrypt.hashSync('thomas'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2', 'thomas', 'Kublah', 'Revolution', 'Bullet', 'userLame', 'notTyler', 'ABSOLUTE', 'Nico', 'DemoUser', 'bigTex14', 'ConTrol', 'faroS', 'flourish', 'andre', 'Jihk'] }
    }, {});
  }
};
