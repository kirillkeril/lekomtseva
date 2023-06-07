const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');

app = express();
app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: 'views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');
app.use(express.static('static'));

hbs.registerPartials(path.resolve(__dirname + '/views/partials'));

app.use('/some-lesson', (req,res) => {
    res.render('someLesson')
});
app.use('/', (req, res) => {
    res.render('index');
});
app.listen(80);