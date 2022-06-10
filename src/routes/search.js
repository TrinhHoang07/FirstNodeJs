const express = require('express');
const router = express.Router();

const searchRouter = require('../app/controllers/SearchController');

router.use('/:slug', searchRouter.show);
router.use('/', searchRouter.index);

module.exports = router;
