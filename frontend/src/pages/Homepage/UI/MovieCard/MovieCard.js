import React from 'react';
import './MovieCard.css';

function MovieCard({ imageUrl, title, description, year, rating, genre }) {
    return (
        <div className="movie-card">
            <a href="#">
                <img src={imageUrl} alt={title} />
                <div className="movie-card-content">
                    <h3>{title}</h3>
                    <p className="movie-description">{description}</p>
                    <div className="movie-details">
                        <span className="movie-year">Год: {year}</span>
                        <span className="movie-rating">⭐️ {rating}</span>
                        <span className="movie-genre">Жанр: {genre}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default MovieCard;
