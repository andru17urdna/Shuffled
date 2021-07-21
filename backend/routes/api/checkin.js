const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');


const { Checkin } = require('../../db/models');

// const playingCardValidations = require('../../validations/playingCard.js');

const router = express.Router();


//GET ALL CHECKINS
router.get('/', asyncHandler(async function(_req, res){
    const checkins = await Checkin.findAll();
    console.log('CHECKIN')
    return res.json({checkins})
}))

module.exports = router;
