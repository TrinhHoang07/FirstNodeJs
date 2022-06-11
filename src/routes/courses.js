const express = require('express');
const router = express.Router();

const courseRouter = require('../app/controllers/CourseController');

router.get('/create', courseRouter.create);
router.post('/store', courseRouter.store);
router.get('/:slug', courseRouter.show);

module.exports = router;