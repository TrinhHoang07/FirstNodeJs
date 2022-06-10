const searchRouter = require('./search');
const homeRouter = require('./home');
const newsRouter = require('./news');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
    app.use('/', homeRouter);
}

module.exports = routes;
