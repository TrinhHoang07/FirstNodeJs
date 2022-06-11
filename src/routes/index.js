const searchRouter = require('./search');
const homeRouter = require('./home');
const newsRouter = require('./news');
const coursesRouter = require('./courses');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/search', searchRouter);
    app.use('/', homeRouter);
}

module.exports = routes;
