from django.contrib import admin

# Register your models here.
from .models import StudyNotes,EachSubjectNotes
admin.site.register(StudyNotes)
admin.site.register(EachSubjectNotes)