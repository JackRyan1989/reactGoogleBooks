const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

//Tell the Express router to use the api routes:
router.use('/api', apiRoutes);

//If no api routes are hit, send the React app:
//This makes sense because when we initially launch the app, we won't hit any
//API routes. The API routes should only be hit inside of the application.
//Note for this to work, I think the application needs to be fully built?
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;