import React, { useState } from 'react';
import './MovieCardSlider.css';
import '../Slider.css';

function MovieCardSlider({ imageUrl, title, rating, ageRestriction, premiere }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="movie-card-slider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={imageUrl} alt={title} />
            {premiere && <div className="premiere-label">Премьера</div>}
            <div className="movie-details">
                <div className="rating">{rating}</div>
                <div className="age-restriction">{ageRestriction}+</div>
            </div>
            {isHovered && <div className="movie-title-hover">{title}</div>}
        </div>
    );
}

export default MovieCardSlider;
