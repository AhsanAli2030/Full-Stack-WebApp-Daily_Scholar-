from django.urls import path
from . import views

urlpatterns = [
    path('all-subjects',views.getAllSubjects,name="all_subjects"),
    path('create-subject',views.createStudySubject,name='create_study_subject'),
     path('single-subject/<str:pk>',views.getSingleSubject,name='single_subject'),
     path('single-subject/<str:pk>/update',views.getSingleSubjectUpdate,name='single_subject_update'),
      path('single-subject/<str:pk>/delete',views.deleteSingleSubject,name='single_subject_delete'),
      path('single-subject/<str:pk>/all-notes',views.getSubjectAllNotes,name='single_subject_all_notes'),
      path('single-subject/<str:pk>/create-note-for-this-subject',views.createNoteForSubject,name='creating_note_for_subject'),
]