var router = require("express").Router();
// Import the model (cat.js) to use its database functions.
var movie = require("../models/movies.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  movie.all(function (data) {
    res.json(data);
  });
});

router.post("/", function (req, res) {
  movie.create(req.body, function (result) {
    console.log("Controller hit!");
    // Send back the ID of the new quote
    res.json(result);
  });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  movie.update(

    condition, function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.json({ id: req.params.id });
      }
    });
});

router.delete("/:id", function (req, res) {
  movie.deleteById(req.params.id, function (result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
