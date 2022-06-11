const Course = require('../models/course');
const { single } = require('../../until/mongoose');

class CourseController {

    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: single(course) });
            })
            .catch(next)
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }

}

module.exports = new CourseController();
