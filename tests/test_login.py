def test_user_login():
    # Предварительно зарегистрируем пользователя
    User.objects.create_user(email='test@example.com', username='testuser', password='password123')

    response = client.post('/api/auth/login/', {
        'email': 'test@example.com',
        'password': 'password123'
    })
    assert response.status_code == 200
    assert 'access' in response.data