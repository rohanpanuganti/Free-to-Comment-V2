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
    var id = req.query.v;
    if(id.length > 11){
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = id.match(regExp);
        if (match && match[2].length === 11) {
            id = match[2];
        } else {
            id = 'ooooof';
        }
    }
    res.render('posts', {id: id});
});

exports.app = functions.https.onRequest(app);
