
// App.js
import React, { useState } from 'react'; // Import useState
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

// Import your images
import film1Image from './assets/picture2/1.webp';
import film2Image from './assets/picture2/2.webp';
import film3Image from './assets/picture2/3.webp';
import film13Image from './assets/picture2/13.webp';
import film14Image from './assets/picture2/14.webp';
import film15Image from './assets/picture2/15.webp';
import film16Image from './assets/picture2/16.webp';

function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <header className="header">
        <div className="navbar-logo">
          <a href="/">Z FILMS</a>
        </div>
        <input type="text" className="input-search" placeholder="Поиск" />
        <nav className="navbar">
          <ul>
            <li>
              <a href="/films">Фильмы</a>
            </li>
            <li>
              <a href="/anime">Аниме</a>
            </li>
            <li>
              <a href="/series">Сериалы</a>
            </li>
          </ul>
        </nav>
        <a href="/login" className="login-button">Вход</a>
      </header>

      <main>
        <section className="block1">
          <h2>Новинки</h2>
          <div className="slider-wrapper">
            <Slider {...settings}>
              <MovieCardSlider
                imageUrl={film1Image}
                title="Фильм 1"
                rating="8.3"
                ageRestriction="16"
                premiere={true}
              />
              <MovieCardSlider
                imageUrl={film2Image}
                title="Фильм 2"
                rating="8.1"
                ageRestriction="16"
              />
              <MovieCardSlider
                imageUrl={film3Image}
                title="Фильм 3"
                rating="7.9"
                ageRestriction="18"
              />
              <MovieCardSlider
                imageUrl={film13Image}
                title="Фильм 4"
                rating="8.5"
                ageRestriction="12"
              />
            </Slider>
          </div>
        </section>

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
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="about-us">
              <h6>О нас</h6>
              <p className="text-justify">Текст</p>
            </div>

            <div className="menu">
              <h6>Меню</h6>
              <ul className="footer-links">
                <li>
                  <a href="/films">Фильмы</a>
                </li>
                <li>
                  <a href="/anime">Аниме</a>
                </li>
                <li>
                  <a href="/series">Сериалы</a>
                </li>
              </ul>
            </div>

            <div className="contact">
              <h6>Написать нам</h6>
              <ul className="footer-links">
                <li>
                  <a href="mailto:your_email@example.com">Почта</a>
                </li>
                <li>
                  <a href="https://t.me/your_telegram">Телеграм</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright-text">
            Copyright &copy; 2025 All Rights Reserved by <a href="/">Z films</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MovieCardSlider({ imageUrl, title, rating, ageRestriction, premiere }) {
  const [isHovered, setIsHovered] = useState(false); // Add state for hover

  return (
    <div
      className="movie-card-slider"
      onMouseEnter={() => setIsHovered(true)} // Set state on hover
      onMouseLeave={() => setIsHovered(false)} // Reset state when not hovering
    >
      <img src={imageUrl} alt={title} />
      {premiere && <div className="premiere-label">Премьера</div>}
      <div className="movie-details">
        <div className="rating">{rating}</div>
        <div className="age-restriction">{ageRestriction}+</div>
      </div>
      {isHovered && <div className="movie-title-hover">{title}</div>} {/* Show title on hover */}
    </div>
  );
}

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

export default App;
