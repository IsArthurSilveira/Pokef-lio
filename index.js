const express = require('express');
const index = express();
const path = require('path');

//public folder static
index.use('/public', express.static(path.join(__dirname, 'public')));

//Set the view engine to ejs
index.set('view engine','ejs');

//Require the routes
index.get('/', (req, res) => { 
    res.render('home');
})

//Server is runing on https://localhost:3000
index.listen(3000, () => {
    console.log('Server is running on https://localhost:3000');
})