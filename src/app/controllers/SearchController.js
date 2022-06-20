const Course = require('../models/course');
const { multiple } = require('../../until/mongoose');

class SearchController {
    index(req, res, next) {
        const q = req.query.q;
        Course.find({ name: { $regex: q + '', $options: 'i' } })
            .then(courses => {
                res.render('search', { courses: multiple(courses) });
            })
            .catch(next);
    }
    show(req, res) {
        res.send('Blog search results');
    }
}

module.exports = new SearchController();
