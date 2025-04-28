import React, { useState } from 'react';
import MovieCard from '../Homepage/UI/MovieCard/MovieCard'; //
import './CatalogSerials.css'; //

import film1Image from '../../assets/picture2/1.webp';
import film2Image from '../../assets/picture2/2.webp';
import film3Image from '../../assets/picture2/3.webp';
import film13Image from '../../assets/picture2/13.webp';
import film14Image from '../../assets/picture2/14.webp';
import film15Image from '../../assets/picture2/15.webp';
import film16Image from '../../assets/picture2/16.webp';

const initialMovies = [
    {
        id: 1,
        imageUrl: film13Image,
        title: "Сериал 1",
        description: "Описание Сериала 1",
        year: "2022",
        rating: "7.8",
        genre: "Боевик"
    },
    {
        id: 2,
        imageUrl: film14Image,
        title: "Сериал 2",
        description: "Описание Сериала 2",
        year: "2021",
        rating: "8.2",
        genre: "Драма"
    },
    {
        id: 3,
        imageUrl: film15Image,
        title: "Сериал 3",
        description: "Описание Сериала 3",
        year: "2023",
        rating: "7.5",
        genre: "Комедия"
    },
    {
        id: 4,
        imageUrl: film16Image,
        title: "Сериал 4",
        description: "Описание Сериала 4",
        year: "2024",
        rating: "8.9",
        genre: "Фантастика"
    },
    {
        id: 5,
        imageUrl: film1Image,
        title: "Сериал 5",
        description: "Описание Сериала 5",
        year: "2022",
        rating: "6.5",
        genre: "Ужасы"
    },
    {
        id: 6,
        imageUrl: film2Image,
        title: "Сериал 6",
        description: "Описание Сериала 6",
        year: "2023",
        rating: "7.2",
        genre: "Триллер"
    },
    {
        id: 7,
        imageUrl: film3Image,
        title: "Сериал 7",
        description: "Описание Сериала 7",
        year: "2020",
        rating: "8.0",
        genre: "Детектив"
    },
    {
        id: 8,
        imageUrl: film13Image,
        title: "Сериал 8",
        description: "Описание Сериала 8",
        year: "2024",
        rating: "9.1",
        genre: "Аниме"
    }
];


function Block2() {
    const [movies, setMovies] = useState(initialMovies);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <section className="block2">
            <h2>Популярные сериалы</h2>

            <div className="card-container">
                {filteredMovies.map(movie => (
                    <MovieCard
                        key={movie.id}
                        imageUrl={movie.imageUrl}
                        title={movie.title}
                        description={movie.description}
                        year={movie.year}
                        rating={movie.rating}
                        genre={movie.genre}
                    />
                ))}
            </div>
        </section>
    );
}

export default Block2;