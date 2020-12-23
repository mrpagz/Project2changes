$("#submitBtn").click(function (event) {
  event.preventDefault();
  $(".center").addClass("hide");
  displayMovieInfo();
  $("body").removeClass("slideShow")
  $("body").addClass("background")
  $("#movies-view").removeClass("hide")
});

function displayMovieInfo() {
  var movie = $("input").val();
  
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=b05256b3";
  // console.log(queryURL)
  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    // console.log(response);

    $("#title").text(response.Title)
    $("#rated").text(response.Rated);
    $("#released").text(response.Released);
    $("#plot").text(response.Plot);
    $("#poster").attr("src", response.Poster);
  });

}


$("#saveBtn").click(function (event) {
  const movieToSave = {
    title: $("#title").text(),
    rating: $("#rated").text(),
    released: $("#released").text(),
    plot: $("#plot").text(),
    poster: $("#poster").attr("src"),
  }

  $.ajax(
    "/movies",
    {
      type: "POST",
      data: movieToSave,
    }).then(function (response) {
      window.location = "/my_movies"
    });

});



