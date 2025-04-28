import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AuthPage.css'; //
import { useAuth } from '../../contexts/AuthContext'; //

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true); // Состояние для переключения между входом и регистрацией
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [successMessage, setSuccessMessage] = useState(''); // Сообщение об успехе
    const [errorMessage, setErrorMessage] = useState(''); // Сообщение об ошибке

    const { login } = useAuth();


    const onSubmit = (data) => {
        setErrorMessage(''); // Очищаем сообщения об ошибках
        setSuccessMessage(''); // Очищаем сообщения об успехе

        if (isLogin) {
            // Симуляция входа
            if (data.email === 'test@example.com' && data.password === '123123') {
                setSuccessMessage('Успешный вход!');
                console.log('Вход успешен:', data);
                // Сохранили его данные здесь
                login({ email: data.email, name: 'Test User' }); // Симуляция успешного входа
            } else {
                setErrorMessage('Неверный email или пароль.');
            }
        } else {
            // Симуляция регистрации
            setSuccessMessage('Успешная регистрация!');
            console.log('Регистрация успешна:', data);
            login({ email: data.email, name: data.name }); // Симуляция успешной регистрации и входа
        }
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
        setErrorMessage(''); // Очищаем сообщения при переключении режимов
        setSuccessMessage(''); // Очищаем сообщения при переключении режимов
    };

    return (
        <div className="auth-page-container">
            <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>

            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            <form onSubmit={handleSubmit(onSubmit)}>
                {!isLogin && (
                    <div className="form-group">
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Имя обязательно' })}
                        />
                        {errors.name && <p className="error-text">{errors.name.message}</p>}
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', {
                            required: 'Email обязателен',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Неверный email',
                            },
                        })}
                    />
                    {errors.email && <p className="error-text">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        {...register('password', { required: 'Пароль обязателен', minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' } })}
                    />
                    {errors.password && <p className="error-text">{errors.password.message}</p>}
                </div>

                <button type="submit" className="submit-button">
                    {isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>

            <p className="toggle-auth-text">
                {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
                <button onClick={toggleAuthMode} className="toggle-auth-button">
                    {isLogin ? 'Регистрация' : 'Войти'}
                </button>
            </p>
        </div>
    );
};

export default AuthPage;
