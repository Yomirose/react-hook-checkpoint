import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://youtu.be/LifqWf0BAOA?si=pc5XSuBdKdHPcoc1',
      rating: 8.8
    },
  ]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
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
    </div>
  );
}

export default App;
