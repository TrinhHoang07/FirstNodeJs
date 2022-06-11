const Course = require('../models/course');
const { multiple } = require('../../until/mongoose');

class HomeController {
    index(req, res, next) {

        Course.find({})
            .then(courses => {
                res.render('home', { courses: multiple(courses) });
            })
            .catch(next);

    }
}

module.exports = new HomeController();
