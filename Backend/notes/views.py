
from rest_framework import viewsets
from .models import NoteInfo
from .serializers import NoteSerializer

# ViewSet automatically provides GET and POST (and more)

class NoteViewSet(viewsets.ModelViewSet):
    queryset = NoteInfo.objects.all()
    serializer_class = NoteSerializer