const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');


const { Checkin } = require('../../db/models');

// const playingCheckinValidations = require('../../validations/playingCheckin.js');

const router = express.Router();


//GET ALL CHECKINS
router.get('/', asyncHandler(async function(_req, res){
    const checkins = await Checkin.findAll();
    return res.json(checkins)
}))

// GET ONE CHECKIN
router.get('/:id', asyncHandler(async function(req, res) {
    const oneCheckin = await Checkin.findByPk(req.params.id);
    return res.json(oneCheckin);
  }));

//CREATE NEW CHECKIN
router.post('/',
    // playingCheckinValidations.validateCreate,
    asyncHandler(async function(req, res) {
        const checkins = await Checkin.create(req.body);
        return res.json(checkins);
    })
);

//EDIT A CHECKIN
router.put('/:id',
    // playingCheckinValidations.validateUpdate,
    asyncHandler(async function (req, res) {
        const individualCheckin = await Checkin.findByPk(req.params.id);
        const editedCheckin = await individualCheckin.update(req.body);
        return res.json(editedCheckin);
    })
);

//DELETE A CHECKIN
router.delete('/:id',
    asyncHandler(async function (req, res) {
        const individualCheckin = await Checkin.findByPk(req.params.id);
             await individualCheckin.destroy();
            return res.json(individualCheckin)
    })
);

module.exports = router;
