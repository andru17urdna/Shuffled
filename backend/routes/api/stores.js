const express = require('express');
const asyncHandler = require('express-async-handler');
// const { check, validationResult } = require('express-validator');


const { Store } = require('../../db/models');

// const storeValidations = require('../../validations/stores.js');

const router = express.Router();

// GET ALL STORES
router.get('/', asyncHandler(async function(_req, res){
    const stores = await Store.findAll({include: {all: true}});
    return res.json(stores)
}))

//CREATE NEW STORES
router.post('/',
    // playingCardValidations.validateCreate,
    asyncHandler(async function(req, res) {
        const newStore = await Store.create(req.body);
        return res.json(newStore);
    })
);

//EDIT A STORES
router.put('/:id',
    // playingCardValidations.validateUpdate,
    asyncHandler(async function (req, res) {
        const individualStore = await Store.findByPk(req.params.id);
        const editedStore = await individualStore.update(req.body);
        return res.json(editedStore);
    })
);

//DELETE A STORES
router.delete('/:id',
    asyncHandler(async function (req, res) {
        const individualStore = await Store.findByPk(req.params.id);
             await individualStore.destroy();
            return res.json(individualStore)
    })
);

module.exports = router;
