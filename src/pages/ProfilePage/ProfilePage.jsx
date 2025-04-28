
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
    const { isLoggedIn, user, logout } = useAuth();
    const navigate = useNavigate(); // Хук для перенаправления

    // Если пользователь не залогинен, перенаправляем его на страницу входа
    if (!isLoggedIn) {
        navigate('/AuthPage'); // Перенаправляем на страницу AuthPage
        return null; // Предотвращаем отображение чего-либо до перенаправления
    }

    const handleLogout = () => {
        logout();
        navigate('/AuthPage'); // Перенаправляем на страницу AuthPage после выхода
    };

    return (
        <div className="profile-page-container">
            <h2>Профиль пользователя</h2>
            {user ? (
                <div className="profile-info">
                    <p><strong>Имя:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button className="logout-button" onClick={handleLogout}>Выйти</button>
                </div>
            ) : (
                <p>Информация о пользователе недоступна.</p>
            )}
        </div>
    );
};

export default ProfilePage;
