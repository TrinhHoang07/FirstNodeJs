const express = require('express');
const router = express.Router();

const newsRouter = require('../app/controllers/NewsController');

router.get('/', newsRouter.index);

module.exports = router;
