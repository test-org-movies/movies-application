const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');

getMovies().then((movies) => {
    renderMovies(movies)
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

function renderMovies(movies) {
    let html = '';
    movies.forEach(({title, rating, genre}) => {
        html +=
            `<ul> 
    <li><b>${title}</b> <br> rating: ${rating} <br> genre: ${genre}</li>
    </ul>`;
    });
    $('#movieList').html(html);
}

//movie post

function newMovieObject(title, rating, genre) {
    let userMovieTitle = $('.title').val();
    let userMovieStars = $('#movieRating').val();
    let userMovieGenre = $('#movieGenre').val();

    const newMovie = {
        'title': userMovieTitle,
        'rating': userMovieStars,
        'genre': userMovieGenre
    };
    return newMovie;
}

$('.addMovieBtn').click(function (e) {
    e.preventDefault();
    addMovie(newMovieObject());
    getMovies().then((movies) => {
        (renderMovies(movies));
    });
    $('#myForm')[0].reset();
});


// edit movie function
function renderForm(title, rating, genre){
    let editMovieTitle = movies.title;
    let editMovieStars = movies.rating;
    let editMovieGenre = movies.genre;

    $('#movieTitle').innerHTML(editMovieTitle);
    $('#movieRating').innerHTML(editMovieStars);
    $('#movieGenre').innerHTML(editMovieGenre);
}
$('li').click(function(e){
    e.preventDefault();

});

