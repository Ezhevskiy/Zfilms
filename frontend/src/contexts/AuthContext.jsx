import React, { createContext, useState, useContext, useEffect } from 'react';

// a. Создаем контекст для авторизации
const AuthContext = createContext();

// b. Создаем провайдер контекста
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Функции для изменения состояния авторизации
    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user'); // Очищаем localStorage при выходе
        localStorage.removeItem('isLoggedIn');
    };

    // Проверяем при инициализации, есть ли данные в localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        if (storedIsLoggedIn === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const value = {
        user,
        isLoggedIn,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Хук для использования контекста авторизации в компонентах
export const useAuth = () => {
    return useContext(AuthContext);
};
