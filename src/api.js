const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: (moviePost) => {
    options.body = JSON.stringify(moviePost);
    return fetch('/api/movies/', options)
        .then(response => response.json());
  }
};
