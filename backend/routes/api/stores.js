const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');


const { Store } = require('../../db/models');

// const storeValidations = require('../../validations/stores.js');

const router = express.Router();

// GET ALL STORES
router.get('/', asyncHandler(async function(_req, res){
    const stores = await Store.findAll();
    return res.json({stores})
}))

module.exports = router;
