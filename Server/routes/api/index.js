const router = require('express');
const bookRoutes = require('./books');

//Book routes: 
router.use('/books', bookRoutes);

module.exports = router;