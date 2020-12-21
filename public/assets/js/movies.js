const MY_MOVIES = $("#my_movies")
getMovies()

// This function grabs todos from the database and updates the view
function getMovies() {
    $.get("/movies").then(function (response) {
        Display_Movies(response)
    });
}
function Display_Movies(movies) {
    for (const movie of movies) {
        MY_MOVIES.append(Movie_Card(movie))
    }
}
function Movie_Card(movie) {
    const parent = $("<div>").attr("data-id", movie.id)
    const title = $("<h1>").text(movie.title)
    const remove = $("<button>")
        .text("X")
        .attr("data-id", movie.id)
        .click(delete_movie)

    parent.append(title, remove)
    return parent
}

// This function deletes a todo when the user clicks the delete button
function delete_movie() {
    const id = $(this).attr("data-id")
    $.ajax({
        method: "DELETE",
        url: "/movies/" + id
    }).then(function (response) {
        window.location.reload()
    });
}



// This function updates a todo in our database
function updateMovie(movie) {
    $.ajax({
        method: "PUT",
        url: "/api/movies",
        data: movie
    }).then(getMovies);
}
