const { Router } = require('express');
const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const { types } = require('../../db/models/pokemonType');

const playingCardsRepository = require('../../db/seeders/3-playing-cards');

// const playingCardValidations = require();

const router = express.Router();

router.get('/', asyncHandler(async function(_req, res){
    const playingCards = await playingCardsRepository.list();
    return res.json(playingCards)
}))


module.exports = router;
