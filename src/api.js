const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

const editOptions = {
  method: 'PUT',
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
  },
  editMovie: (editMovie) => {
    editOptions.body = JSON.stringify(editMovie);
    return fetch(`/api/movies/${movies.id}`, editOptions)
        .then(response => response.json());
  }
};




