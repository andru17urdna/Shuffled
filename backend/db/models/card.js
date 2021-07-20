'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    userId: DataTypes.INTEGER,
    storeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.User, {foreignKey: 'userId'}),
    Card.belongsTo(models.Store, {foreignKey: 'storeId'}),
    Card.hasMany(models.Checkin, {foreignKey: 'deckId'})
  };
  return Card;
};
