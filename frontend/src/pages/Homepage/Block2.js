import React from 'react';
import MovieCard from './UI/MovieCard/MovieCard';

// Import your images
import film1Image from '../../assets/picture2/1.webp';
import film2Image from '../../assets/picture2/2.webp';
import film3Image from '../../assets/picture2/3.webp';
import film13Image from '../../assets/picture2/13.webp';
import film14Image from '../../assets/picture2/14.webp';
import film15Image from '../../assets/picture2/15.webp';
import film16Image from '../../assets/picture2/16.webp';

function Block2() {
    return (
        <section className="block2">
            <h2>Популярное</h2>
            <div className="card-container">
                <MovieCard
                    imageUrl={film13Image}
                    title="Фильм 4"
                    description="Описание"
                    year="2022"
                    rating="7.8"
                    genre="Боевик"
                />
                <MovieCard
                    imageUrl={film14Image}
                    title="Фильм 5"
                    description="Описание"
                    year="2021"
                    rating="8.2"
                    genre="Драма"
                />
                <MovieCard
                    imageUrl={film15Image}
                    title="Фильм 6"
                    description="Описание"
                    year="2023"
                    rating="7.5"
                    genre="Комедия"
                />
                <MovieCard
                    imageUrl={film16Image}
                    title="Фильм 7"
                    description="Описание"
                    year="2024"
                    rating="8.9"
                    genre="Фантастика"
                />
                <MovieCard
                    imageUrl={film1Image}
                    title="Фильм 8"
                    description="Описание"
                    year="2022"
                    rating="6.5"
                    genre="Ужасы"
                />
                <MovieCard
                    imageUrl={film2Image}
                    title="Фильм 9"
                    description="Описание"
                    year="2023"
                    rating="7.2"
                    genre="Триллер"
                />
                <MovieCard
                    imageUrl={film3Image}
                    title="Фильм 10"
                    description="Описание"
                    year="2020"
                    rating="8.0"
                    genre="Детектив"
                />
                <MovieCard
                    imageUrl={film13Image}
                    title="Фильм 11"
                    description="Описание"
                    year="2024"
                    rating="9.1"
                    genre="Аниме"
                />
            </div>
        </section>
    );
}

export default Block2;
