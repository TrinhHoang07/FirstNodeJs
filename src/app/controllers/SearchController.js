class SearchController {
    index(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.send('Blog search results');
    }
}

module.exports = new SearchController();
