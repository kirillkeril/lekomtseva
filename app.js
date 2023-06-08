const path = require('path');
const express = require('express');
const expressHbs = require('express-handlebars');
const hbs = require('hbs');

const PORT = process.env.PORT || 80;

app = express()
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})
// app.engine(
//     'hbs',
//     expressHbs.engine({
//         layoutsDir: 'views/layouts',
//         defaultLayout: 'layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');
//
// hbs.registerPartials(path.resolve(__dirname + '/views/partials'));
//
// app.use('/some-lesson', (req,res) => {
//     res.render('someLesson')
// });
// app.use('/', (req, res) => {
//     res.render('index');
// });
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


module.exports = app