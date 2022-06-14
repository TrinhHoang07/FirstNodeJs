const Course = require('../models/course');
const { multiple } = require('../../until/mongoose');

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', { courses: multiple(courses) });
            })
            .catch(next);
    }

    deleteCourseFind(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/deleted-courses', { courses: multiple(courses) });
            })
            .catch(next);
    }
}

module.exports = new MeController();
