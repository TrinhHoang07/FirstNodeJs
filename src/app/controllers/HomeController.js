const Course = require('../models/course');
const { multiple } = require('../../until/mongoose');

class HomeController {
    index(req, res, next) {

        // Course.find({}, (err, courses) => {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // })

        Course.find({})
            .then(courses => {
                res.render('home', { courses: multiple(courses) });
            })
            .catch(next);

        // res.render('home');
    }
}

module.exports = new HomeController();
