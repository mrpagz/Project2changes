var router = require("express").Router();
var movieController = require('./movieControllers');
var htmlController = require('./pageControllers')

router.use('/movies', movieController)
router.use(htmlController)

// Export routes for server.js to use.
module.exports = router;
