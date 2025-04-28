import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; // Изменен с useLocation
import './SearchResults.css'; // Импортируем CSS файл

function SearchResults() {
    const [searchParams] = useSearchParams(); // Получаем параметры URL
    const query = searchParams.get('q'); // Извлекаем поисковый запрос из URL
    const [results, setResults] = useState([]); // Состояние для хранения результатов поиска
    const [loading, setLoading] = useState(true);  // Состояние для индикации загрузки
    const [error, setError] = useState(null); // Состояние для обработки ошибок

    useEffect(() => {
        // Функция для получения результатов поиска (замените на ваш реальный API запрос)
        const fetchSearchResults = async () => {
            setLoading(true); // Начинаем загрузку
            setError(null); // Сбрасываем любые предыдущие ошибки

            try {
                // Симуляция API запроса (замените на ваш реальный API endpoint)
                const response = await fetch(`/api/search?q=${query}`);

                if (!response.ok) {
                    throw new Error(`HTTP ошибка! Статус: ${response.status}`);
                }

                const data = await response.json();
                setResults(data); // Обновляем состояние результатов
            } catch (err) {
                console.error("Ошибка при получении результатов поиска:", err);
                setError(err.message || "Произошла ошибка при получении результатов поиска.");
            } finally {
                setLoading(false); // Заканчиваем загрузку, независимо от успеха или неудачи
            }
        };

        // Только получаем данные, если есть запрос.  Предотвращает начальный пустой API запрос
        if (query) {
            fetchSearchResults();
        } else {
            setLoading(false); // Если нет запроса, немедленно устанавливаем загрузку в false.
        }
    }, [query]);  // useEffect dependency:  Запускаем только когда 'query' меняется

    if (loading) {
        return <div className="search-results-container">Загрузка...</div>;
    }

    if (error) {
        return (
            <div className="search-results-container error">
                Ошибка: {error}
            </div>
        );
    }

    return (
        <div className="search-results-container">
            <h1>Результаты поиска для "{query}"</h1>
            {query ? ( // Отображаем результаты, только если есть запрос
                results.length > 0 ? (
                    <ul className="results-list">
                        {results.map((result) => (
                            <li key={result.id} className="result-item">
                                {/* Отобразите детали результата (настройте по необходимости) */}
                                <h3>{result.title}</h3>
                                <p>{result.description}</p>
                                {/* Добавьте ссылку на элемент (необязательно) */}
                                {result.link && <a href={result.link}>Подробнее</a>}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Ничего не найдено по вашему запросу.</p>
                )
            ) : (
                <p>Пожалуйста, введите запрос для поиска.</p> // Сообщение, когда пользователь заходит на страницу напрямую без запроса
            )}

        </div>
    );
}

export default SearchResults;

