import React from 'react';
import './Header.css';

function Header() {
    return (
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
    );
}

export default Header;
