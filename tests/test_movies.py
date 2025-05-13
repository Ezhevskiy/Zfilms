def test_get_movie_list():
    Movie.objects.create(title="Test Movie", year=2024, genre="Sci-Fi")
    response = client.get('/api/movies/')
    assert response.status_code == 200
    assert len(response.data) == 1