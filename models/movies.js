// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var movie = {
  all: function (cb) {
    orm.all("movies", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (ob, cb) {
    const cols = ['title', 'rating', 'released', 'plot', 'poster']
    const vals = [ob.title, ob.rating, ob.released, ob.plot, ob.poster]
    orm.create("movies", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("movies", objColVals, condition, function (res) {
      cb(res);
    });
  },
  deleteById: function (id, cb) {
    var condition = "id = " + id;
    orm.delete("movies", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = movie;
