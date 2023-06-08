const express = require('express');
const path = require('node:path');
const expressHbs = require('express-handlebars');
const hbs  = require('hbs');

// const {initializeApp} = require('firebase/app');
// const {getDatabase, ref, set} = require('firebase/database');
//
// const firebaseConfig = {
//     apiKey: "AIzaSyClqZhKcUHQ7C4Tx47k3hoRgYSWHL-RM7g",
//     authDomain: "lekomtseva-8ef4f.firebaseapp.com",
//     projectId: "lekomtseva-8ef4f",
//     storageBucket: "lekomtseva-8ef4f.appspot.com",
//     messagingSenderId: "615007264734",
//     appId: "1:615007264734:web:7aad64dfdab01f2406874f",
//     measurementId: "G-8ZDKDC90WQ"
// };
//
// const appFB = initializeApp(firebaseConfig);
// const DB = getDatabase(appFB);
//
// async function writeUser(userId, name, surname, email) {
//     await set(ref(DB, 'users/' + userId), {
//         userId,
//         name,
//         surname,
//         email
//     });
// }


const PORT = process.env.PORT || 80;

const app = express()
app.use(express.static('static'))

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