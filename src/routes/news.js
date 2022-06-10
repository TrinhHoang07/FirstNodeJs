const express = require('express');
const router = express.Router();

const newsRouter = require('../app/controllers/NewsController');

router.use('/', newsRouter.index);

module.exports = router;
