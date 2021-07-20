const { check } = require('express-validator');
const { handleValidationErrors } = require('./utils');

const id = check('id')
  .notEmpty()
  .isInt({ min: 0 });
const userId = check('userId')
  .notEmpty()
  .isInt({ min: 0 });
const storeId = check('storeId')
  .notEmpty()
  .isInt({ min: 0 });
const name = check('name').notEmpty();
const imageUrl = check('imageUrl')
  .notEmpty()
  .isURL({ require_protocol: false, require_host: false });
const description = check('description').notEmpty();


exports.validateCreate = [
  userId,
  storeId,
  imageUrl,
  name,
  imageUrl,
  description,
  handleValidationErrors,
];

exports.validateUpdate = [
  id,
  userId,
  storeId,
  imageUrl,
  name,
  imageUrl,
  description,
  handleValidationErrors,
];
