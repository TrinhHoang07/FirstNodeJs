const Course = require('../models/course');
const { multiple } = require('../../until/mongoose');

class MeController {

    // GET me/stored-courses
    storedCourses(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, count]) => {
                res.render('me/stored-courses', {
                    courses: multiple(courses),
                    count
                });
            })
            .catch(next);
    }

    // GET me/deleted-courses
    deleteCourseFind(req, res, next) {
        Course.findDeleted({})
            .then(courses => {
                res.render('me/deleted-courses', { courses: multiple(courses) });
            })
            .catch(next);
    }
}

module.exports = new MeController();
