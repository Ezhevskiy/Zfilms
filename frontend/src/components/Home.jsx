import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies/').then(res => setMovies(res.data));
  }, []);

  return (
    <div>
      <h2>Фильмы</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title} ({movie.year})</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;