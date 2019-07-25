var movies = [
    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Avengers",
        hasWatched: false,
        rating: 4.9
    }
]

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - " + movie.rating + " stars.";
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
})
