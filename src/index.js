/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  // console.log('Here are all the AWESOME movies:');
  movies.forEach(({title, rating}) => {
    return $('#movieList').append
    (`<ul> 
    <li>${title} - rating: ${rating}</li>
    </ul>`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

