'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
    userId: DataTypes.INTEGER,
    deckId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Checkin.associate = function(models) {
    Checkin.belongsTo(models.Card, {foreignKey: 'deckId'}),
    Checkin.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Checkin;
};
