import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';
import Modal from './components/modal';

function App() {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://youtu.be/LifqWf0BAOA?si=pc5XSuBdKdHPcoc1',
      rating: 8.8
    },
  ]);

const closeModal = () => {
  setShow(false)
}

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setShow(true);
  };

  const handleFilter = (filter) => {
    const { title, rating } = filter;
    let filteredMovies = movies;

    if (title) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.rating >= rating
      );
    }

    setMovies(filteredMovies);
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={movies} />
      {show && < Modal  handleCloseModal={closeModal} />}
    </div>
  );
}

export default App;
