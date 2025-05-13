# Онлайн-кинотеатр – Курсовой проект

Курсовой проект студента группы 1ИСП-22  
А.С. Долженко  
Преподаватель: К. В. Воробьев

## Технологии

- **Backend:** Django, Django REST Framework
- **Frontend:** React
- **База данных:** SQLite (по умолчанию)
- **Дополнительно:** JWT аутентификация, Axios, REST API

## Установка

```bash
# Backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000

# Frontend
cd ../frontend
npm install
npm run dev