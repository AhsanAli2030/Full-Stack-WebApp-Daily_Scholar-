from rest_framework.serializers import ModelSerializer
from .models import PersonalDiaryNotes

class PersonalDiaryNotesSerializers(ModelSerializer):
    class Meta:
        model=PersonalDiaryNotes
        fields='__all__'