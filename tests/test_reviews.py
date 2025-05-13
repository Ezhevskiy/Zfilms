def test_create_review():
    movie = Movie.objects.create(title="Test Movie", year=2024, genre="Sci-Fi")
    user = User.objects.create_user(email='reviewer@example.com', username='revuser', password='pass123')

    response = client.post('/api/reviews/', {
        'user': user.id,
        'movie': movie.id,
        'text': 'Отличный фильм!',
        'rating': 5
    })
    assert response.status_code == 201
    assert response.data['text'] == 'Отличный фильм!'