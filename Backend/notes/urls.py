
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NoteViewSet

# Create a router and register our viewset
router = DefaultRouter()

#Create URLs for NoteViewSet under the path /notes/ 
router.register('notes', NoteViewSet, basename='note')

urlpatterns = [
    path('', include(router.urls)),
]

