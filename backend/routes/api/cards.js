const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');


const { Card } = require('../../db/models');

const playingCardValidations = require('../../validations/playingCard.js');

const router = express.Router();


//GET ALL CARDS
router.get('/', asyncHandler(async function(_req, res){
    const cards = await Card.findAll({include: {all: true}});
    return res.json(cards)
}))

// GET ONE CARD
router.get('/:id', asyncHandler(async function(req, res) {
    const oneCard = await Card.findByPk(req.params.id, {include: {all: true}});
    return res.json(oneCard);
  }));

//CREATE NEW CARD
router.post('/',
    // playingCardValidations.validateCreate,
    asyncHandler(async function(req, res) {
        const cards = await Card.create(req.body);
        const correctedCard = await Card.findByPk(cards.id, {include: {all: true}})
        return res.json(correctedCard);
    })
);

//EDIT A CARD
router.put('/:id',
    // playingCardValidations.validateUpdate,
    asyncHandler(async function (req, res) {
        const individualCard = await Card.findByPk(req.params.id, {include: {all: true}});
        const editedCard = await individualCard.update(req.body);
        return res.json(editedCard);
    })
);

//DELETE A CARD
router.delete('/:id',
    asyncHandler(async function (req, res) {
        const individualCard = await Card.findByPk(req.params.id);
             await individualCard.destroy();
            return res.json(individualCard)
    })
);


module.exports = router;
