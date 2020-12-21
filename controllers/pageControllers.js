var router = require("express").Router();
const path = require('path')

router.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});
router.get("/my_movies", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/movies.html"));
});
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
