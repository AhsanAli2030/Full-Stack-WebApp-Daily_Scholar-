
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('personal-diary/',include('Personal_Diary.urls')),
    path('study-notes/',include('StudyNotes.urls')),
]
