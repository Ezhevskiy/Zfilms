import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Header.css';

function Header() {
    const { register} = useForm();


    return (
        <header className="header">
            <div className="navbar-logo">
                <a href="/">Z FILMS</a>
            </div>

            <form className="search-form">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Поиск"
                    {...register('searchQuery', { required: false })} //  Не требуется, разрешаем пустой запрос
                />
            </form>

            <nav className="navbar">
                <ul>
                    <li><Link to='/CatalogFilms'>Фильмы</Link></li>
                    <li>
                        <Link to='/CatalogAnime'>Аниме</Link>
                    </li>
                    <li>
                        <Link to='/CatalogSerials'>Сериалы</Link>
                    </li>
                </ul>
            </nav>
            <Link to='/AuthPage' className="login-button">Вход</Link>
        </header>
    );
}

export default Header;

