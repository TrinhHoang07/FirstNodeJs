const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const moment = require('moment');

const app = express();
app.use(morgan('combined'));

const routes = require('./routes');
const db = require('./config/db');

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('hbs', engine({
    extname: '.hbs', helpers: {
        sum: (a, b) => a + b,
        formatDate: date => moment(date).format('MMMM Do YYYY, h:mm:ss a'),
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

routes(app);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
