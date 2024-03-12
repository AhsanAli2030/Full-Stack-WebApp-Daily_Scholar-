from rest_framework.serializers import ModelSerializer
from .models import StudyNotes,EachSubjectNotes

class StudyNotesSerializers(ModelSerializer):
    class Meta:
        model=StudyNotes
        fields='__all__'

class EachSubjectNotesSerializers(ModelSerializer):
    class Meta:
        model=EachSubjectNotes
        fields='__all__'