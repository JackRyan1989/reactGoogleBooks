const router = require('express').Router();
const bookRoutes = require('./books');

//Book routes: 
router.use('/shelf', bookRoutes);

module.exports = router;