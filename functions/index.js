const functions = require('firebase-functions');
const express = require('express');
const engines = require('consolidate');


const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

app.get('/', (req, res) => {
    res.render('posts');
});

app.get('/watch', (req, res) => {
    res.render('posts', {id: req.query.v});
});

exports.app = functions.https.onRequest(app);
