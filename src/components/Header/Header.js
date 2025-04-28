import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

function Header() {
    const { register } = useForm();
    const { isLoggedIn, user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const addBoxiconsCDN = () => {
            const link = document.createElement('link');
            link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        };

        addBoxiconsCDN();

        return () => {
            const linkToRemove = document.querySelector('link[href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"]');
            if (linkToRemove) {
                document.head.removeChild(linkToRemove);
            }
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="navbar-logo">
                <Link to="/">Z FILMS</Link>
            </div>

            <div className="burger-menu" onClick={toggleMenu}>
                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
            </div>

            <form className="search-form">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Поиск"
                    {...register('searchQuery', { required: false })}
                />
            </form>

            <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
                <ul>
                    <li><Link to='/CatalogFilms'>Фильмы</Link></li>
                    <li><Link to='/CatalogAnime'>Аниме</Link></li>
                    <li><Link to='/CatalogSerials'>Сериалы</Link></li>
                </ul>
            </nav>

            <div className="auth-buttons">
                {isLoggedIn ? (
                    <>
                        {user && <span>Привет, {user.name}</span>}
                        <button onClick={logout} className="login-button">Выход</button>
                        <Link to="/ProfilePage" className="login-button">Профиль</Link>
                    </>
                ) : (
                    <Link to='/AuthPage' className="login-button">Вход</Link>
                )}
            </div>
        </header>
    );
}

export default Header;

