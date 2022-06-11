const Course = require('../models/course');

class HomeController {
    index(req, res) {

        Course.find({}, (err, courses) => {
            if (!err) {
                res.json(courses);
            } else {
                res.status(404).json({ error: 'No courses found' });
            }
        })

        // res.render('home');
    }
}

module.exports = new HomeController();
