var router = require("express").Router();

var movie = require("../models/movies.js");


router.get("/", function (req, res) {
  movie.all(function (data) {
    // console.log(data)
    res.json(data);
  });
});

router.post("/", function (req, res) {
  movie.create(req.body, function (result) {
    // console.log("Controller hit!");

    res.json(result);
  });
});

router.put("/:id", function (req, res) {
  console.log(req.body)

  movie.UpdateById(req.params.id, req.body, function (err, result) {
    if (err) return res.status(404).end();
    res.status(200).end();
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
router.get("/:id", function (req, res) {
  movie.findById(req.params.id, function (result) {
    console.log("========")
    console.log(result);
    console.log("=======")
    res.json(result);
  });
});
// Export routes for server.js to use.
module.exports = router;
