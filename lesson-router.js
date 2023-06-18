const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('lessons');
})
router.get('/t1l1s1', (req, res) => {
    res.render('t1l1s1');
});
router.get('/t1l1s2', (req, res) => {
    res.render('t1l1s2');
});
router.get('/t1l1s3', (req, res) => {
    res.render('t1l1s3');
});
router.get('/t1l1s4', (req, res) => {
    res.render('t1l1s4');
});
router.get('/t1l1s5', (req, res) => {
    res.render('t1l1s5');
});
router.get('/t1l1s6', (req, res) => {
    res.render('t1l1s6');
});
router.get('/t1l1s7', (req, res) => {
    res.render('t1l1s7');
});
router.get('/t1l1test', (req, res) => {
    res.render('t1l1test');
});

router.get('/t1l2s1', (req, res) => {
    res.render('t1l2s1');
})

module.exports = router;