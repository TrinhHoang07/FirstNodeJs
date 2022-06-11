const express = require('express');
const router = express.Router();

const homeRouter = require('../app/controllers/HomeController');

router.get('/', homeRouter.index);

module.exports = router;
