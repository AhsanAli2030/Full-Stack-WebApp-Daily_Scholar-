from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes,name='routes'),
    path('all-diary-notes',views.getDiaryNotes,name='diary_notes'),
    path('single-diary-note/<str:pk>',views.getSingleDiaryNote,name='single_diary_note'),
    path('single-diary-note/<str:pk>/update',views.updateSingleDiaryNote,name='update_diray_note'),
    path('single-diary-note/<str:pk>/delete',views.deleteDiaryNote,name='delete_diray_note'),
    path('single-diary-note/create/',views.createDiaryNote,name='create_diray_note'),

]
