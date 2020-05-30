
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');


const renderMovies = () =>
getMovies().then((movies) => {
    $('#movieList').html("");
    let html = '';
    movies.forEach(({title, rating, genre}) => {
        html +=
            `<ul>
    <li><b>${title}</b> <br> rating: ${rating} <br> genre: ${genre}</li>
    </ul>`
    });
    console.log('Here are all the movies:');
    movies.forEach(({title, rating, id}) => {
        console.log(`id#${id} - ${title} - rating: ${rating}`);
    });
    $('li').addClass('indMovie');
    $(html).appendTo("#movieList");
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.')
    console.log(error);
});
renderMovies();









// const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');
//
// getMovies().then((movies) => {
//     renderMovies(movies)
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });
//
// // function renderMovies(movies) {
// //     $('#movieList').html('')
//     let html = '';
//     movies.forEach(({title, rating, genre}) => {
//         html +=
//             `<ul>
//     <li><b>${title}</b> <br> rating: ${rating} <br> genre: ${genre}</li>
//     </ul>`;
//     });
//     $('#movieList').html(html);
//     $('li').addClass('indMovie');
// // }


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
    addMovie(newMovieObject())
    .then(renderMovies);
});


// edit movie function
function renderForm(title, rating, genre){
    let editMovieTitle = movies.title;
    let editMovieStars = movies.rating;
    let editMovieGenre = movies.genre;

    $('#movieTitle').innerHTML(editMovieTitle);
    $('#movieRating').innerHTML(editMovieStars);
    console.log($('#movieGenre').innerHTML(editMovieGenre));
}
$("#movieList").on('click','li',function(e) {
    e.preventDefault();
    console.log(editMovie());
    // getMovies().then((movies) => {
    //     (renderMovies(movies));
    // });
});






