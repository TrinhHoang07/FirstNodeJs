const express = require('express');
const router = express.Router();

const meRouter = require('../app/controllers/MeController');

router.get('/stored/courses', meRouter.storedCourses);
router.get('/deleted/courses', meRouter.deleteCourseFind);

module.exports = router;
