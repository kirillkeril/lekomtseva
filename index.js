const express = require('express');
const path = require('node:path');
const expressHbs = require('express-handlebars');
const hbs  = require('hbs');

const PORT = process.env.PORT || 80;

const app = express()
app.use(express.static('static'))

console.log("СУКА")

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

app.engine(
    'hbs',
    expressHbs.engine({
        layoutsDir: 'views/layouts',
        defaultLayout: 'layout',
        extname: 'hbs'
    })
);
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use('/some-lesson', (req,res) => {
    res.render('someLesson')
});
app.use('/', (req, res) => {
    res.render('index');
});