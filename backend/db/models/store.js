'use strict';
module.exports = (sequelize, DataTypes) => {
  const Store = sequelize.define('Store', {
    ownerId: DataTypes.NUMERIC,
    title: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Store.associate = function(models) {
    Store.hasMany(models.Card, {foreignKey: 'storeId'}),
    Store.belongsTo(models.User, {foreignKey: 'ownerId'})
  };
  return Store;
};
