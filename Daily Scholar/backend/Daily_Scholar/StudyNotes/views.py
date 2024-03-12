from .models import StudyNotes,EachSubjectNotes
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import StudyNotesSerializers,EachSubjectNotesSerializers
# Create your views here.

@api_view(['GET'])
def getAllSubjects(request):
    allSubjects=StudyNotes.objects.all().order_by('-visited_last')
    allSubjectsSerializer=StudyNotesSerializers(allSubjects,many=True)
    return Response(allSubjectsSerializer.data)

@api_view(['POST'])
def createStudySubject(request):
    data=request.data
    
    creatingStudySubject=StudyNotes.objects.create(subjects=data)
    creatingStudySubjectSerialier=StudyNotesSerializers(creatingStudySubject,many=False)
    return Response(creatingStudySubjectSerialier.data) 


@api_view(['POST'])
def createNoteForSubject(request,pk):
   try:
        data = request.data
        study_note = StudyNotes.objects.get(id=pk)
        creating_study_note = EachSubjectNotes.objects.create(notesTitle=data['notesTitle'], notesAre=data['notesAre'], EachSubjectNotesIdentifier=study_note)
        creating_study_note_subject_notes_serializer = EachSubjectNotesSerializers(creating_study_note, many=False)
        return Response( creating_study_note_subject_notes_serializer.data)
   except Exception as e:
       return ("Error Creating Note")


@api_view(['GET'])
def getSingleSubject(request,pk):
    try:
        singleSubject=StudyNotes.objects.get(id=pk)
        singleSubjectSerializer=StudyNotesSerializers(singleSubject,many=False)
        return Response(singleSubjectSerializer.data)
    except Exception as e:
        return Response("No Data with This Id")

@api_view(['PUT'])
def getSingleSubjectUpdate(request,pk):
    try:
        singleSubject=StudyNotes.objects.get(id=pk)
        data=request.data
        singleSubjectSerializer=StudyNotesSerializers(instance=singleSubject,data=data)
        if  singleSubjectSerializer.is_valid():
            singleSubjectSerializer.save()
        return Response(singleSubjectSerializer.data)
    except Exception as e:
        return Response("Error in Updating Subject Name")

@api_view(['DELETE'])
def deleteSingleSubject(request,pk):
    try:
        singleSubject=StudyNotes.objects.get(id=pk)
        singleSubject.delete()
        return Response("Subject Deleted")
        
    except Exception as e:
        return Response("Error in Deleting Subject")

@api_view(['GET'])
def getSubjectAllNotes(request,pk):
    try:
        singleSubject = StudyNotes.objects.get(id=pk)
        
        # Retrieve all related EachSubjectNotes objects using the foreign key relationship
        related_notes = singleSubject.eachsubjectnotes_set.all()
      
        singleSubjectAllNotesSerializer=EachSubjectNotesSerializers(related_notes,many=True)
        return Response(singleSubjectAllNotesSerializer.data)
    except Exception as e:
        return Response("No Notes for This Subject")