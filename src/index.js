const express = require('express');
const path = require('path');
const morgan = require('morgan');
// import { engine } from 'express-handlebars';
const { engine } = require('express-handlebars');

const app = express();
app.use(morgan('combined'));

const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

routes(app);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
