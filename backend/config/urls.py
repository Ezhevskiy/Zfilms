from django.urls import path, include
from rest_framework.routers import DefaultRouter
from movies.views import MovieViewSet, ReviewViewSet, FavoriteViewSet
from users.views import RegisterView, LoginView

router = DefaultRouter()
router.register('movies', MovieViewSet)
router.register('reviews', ReviewViewSet)
router.register('favorites', FavoriteViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
]