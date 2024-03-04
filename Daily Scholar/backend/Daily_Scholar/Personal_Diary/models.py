from django.db import models

# Create your models here.
class PersonalDiaryNotes(models.Model):
    title=models.CharField(max_length=255,default="Un-Titled",null=True,blank=True)
    body=models.TextField(null=True,blank=True,default="Please write Your Diary 😉")
    update=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
