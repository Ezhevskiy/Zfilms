def test_user_registration():
    response = client.post('/api/auth/register/', {
        'email': 'test@example.com',
        'username': 'testuser',
        'password': 'password123'
    })
    assert response.status_code == 201
    assert 'access' in response.data