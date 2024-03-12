from django.db import models

# Create your models here.
class StudyNotes(models.Model):
    subjects=models.CharField(max_length=255,default="None",null=True,blank=True)
    visited_last=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.subjects

class EachSubjectNotes(models.Model):
    EachSubjectNotesIdentifier=models.ForeignKey(StudyNotes,on_delete=models.CASCADE)
    notesTitle=models.CharField(max_length=255,null=True,blank=True,default="Un-Titled")

    notesAre=models.TextField()

    def __str__(self):
        return self.notesTitle
    
    @property
    def subject(self):
        return self.EachSubjectNotesIdentifier.subjects
