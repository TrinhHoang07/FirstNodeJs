const express = require('express');
const router = express.Router();

const searchRouter = require('../app/controllers/SearchController');

// router.get('/', searchRouter.search);
router.get('/:slug', searchRouter.show);
router.get('/', searchRouter.index);

module.exports = router;
