import * as path from "path";
import express from 'express';
import expressHbs from 'express-handlebars';
import hbs from 'hbs';

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

hbs.registerPartials('/views/partials');

app.use('/some-lesson', (req,res) => {
    res.render('someLesson')
});
app.use('/', (req, res) => {
    res.render('index');
});


// module.exports = app