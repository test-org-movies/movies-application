
/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');
const {addMovie} = require('./api.js');
const {editMovie} = require('./api.js');

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


//////////////////////////////////////////////////// current code Shelby has
//
// const {getMovies} = require('./api.js');
// const {addMovie} = require('./api.js');
// const {editMovie} = require('./api.js');
//
// getMovies().then((movies) => {
//     $('#movieList').html("");
//     renderMovies(movies)
// }).catch((error) => {
//     alert('Oh no! Something went wrong.\nCheck the console for details.');
//     console.log(error);
// });
//
// function renderMovies(movies) {
//     let html = '';
//     movies.forEach(({title, rating, genre}) => {
//         html +=
//             `<ul>
//     <li data-attribute="SOME_ID">${title}  <br>Rating: ${rating} <br>Genre: ${genre}</li><hr>
//     </ul>`;
//     });
//     $('#movieList').html(html);
//     $('li').addClass('indMovie');
// }
//
// //===========Add movie
// function newMovieObject() {
//     return {
//         'title': $('.title').val(),
//         'rating': $('#movieRating').val(),
//         'genre': $('#movieGenre').val()
//     };
// }
//
// $('.addMovieBtn').click(function (e) {
//     e.preventDefault();
//     addMovie(newMovieObject());
//     getMovies().then((movies) => {
//         (renderMovies(movies));
//     });
//     $('#myForm')[0].reset();
// });
//
//
// //click li and console.log title rating genre id
// //e.target target what was click
// //jquery select e.target using $(e.target)
// // traverse the dom to pull out the title, rating, genre, id (if needed, include the id of the          .......us:(maybe reduce)
// // add the id of the movie using the data attribute like data-id=SOME_ID to an element in the li
//
// // once you have the title, rating, genre, id create a new movie object and pass that to your editMovie function
// // edit movie function
//
// //==========Edit Movie
//
// //on movie click render form
// function renderForm(arr) {
//     $('#renderTitle').val(arr[0]);
//     $('#renderRating').val(arr[1].split(' ')[1]);
//     $('#renderGenre').val(arr[2].split(' ')[1]);
// }
//
// //on btn click update
// function editMovieBtnC(e){
//     e.preventDefault();
//     obj = {
//
//     }
// }
//
// $("#movieList").on('click', 'ul', function (e) {
//     e.preventDefault();
//     let target = e.target;
//     let targetText = ($(target).text());
//     let movieArray = (targetText.split('  '));
//     return renderForm(movieArray);
// });



/////// new 5/31

//==========Edit Movie





// let movieArr;
// let targetIDGrab;
// $("#movieList").on('click', 'ul', function (e) {
//     e.preventDefault();
//     let target = e.target;
//     targetIDGrab = $(target)[0].dataset.attribute;
//     let targetText = ($(target).text());
//     movieArr = targetText.split('  ');
//     $('#renderTitle').val(movieArr[0]);
//     $('#renderRating').val(movieArr[1].split(' ')[1]);
//     $('#renderGenre').val(movieArr[2].split(' ')[1]);
// });
// function movieObject() {
//     let title = (movieArr[0]);
//     let ratingNum = (movieArr[1].split(' ')[1]);
//     let genreRating = (movieArr[2].split(' ')[1]);
//     // let idNum = targetIDGrab;
//     return {
//         "title": title,
//         "rating": ratingNum,
//         "genre": genreRating,
//         "id": targetIDGrab
//     }
// }
// //on btn click update
// $('editMovieBtn').click(function (e) {
//     e.preventDefault();
//     editMovie(movieObject());
//     getMovies().then((movies) => {
//         (renderMovies(movies));
//     });
//     $('#myForm')[0].reset();
// });

