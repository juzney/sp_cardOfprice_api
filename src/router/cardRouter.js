const express = require('express');
const cardController = require('../Controller/cardController')

const router = express.Router();



router.post('/card/save' ,cardController.Store);
router.get('/card/list', cardController.Index);
router.get('/card/list/:id', cardController.IndexOne);
router.get('/card/delete/:id', cardController.DeleteOne);


module.exports = router;