/*
router.js

This file creates and exports the application's routes to the
main app file.

Author: Eric James Foster
*/


//Instantiate Router..
const router = require('express').Router(),
        // User = require('../models/users')



//Home page..
router.get('/', function(req, res) {
  res.render('home')
})



module.exports = router
