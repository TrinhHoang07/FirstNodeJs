const express = require('express');
const router = express.Router();

const courseRouter = require('../app/controllers/CourseController');

router.get('/create', courseRouter.create);
router.post('/store', courseRouter.store);
router.put('/:id', courseRouter.update);
router.delete('/:id', courseRouter.delete);
router.get('/:id/edit', courseRouter.edit);
router.get('/:slug', courseRouter.show);

module.exports = router;