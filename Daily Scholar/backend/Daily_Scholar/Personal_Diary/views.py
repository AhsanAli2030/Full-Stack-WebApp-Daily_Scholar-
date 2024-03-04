from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import PersonalDiaryNotes
from .serializers import PersonalDiaryNotesSerializers
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes=[
        {
            'Endpoint':'personal-diary',
            'method':'GET',
            'body':None,
            'description':'Returns Responses'
        },
        ]
    return Response(routes)

@api_view(['GET'])
def getDiaryNotes(request):
    allDiaryNotes=PersonalDiaryNotes.objects.all().order_by('-update')
    PersonalDiarySerializer=PersonalDiaryNotesSerializers(allDiaryNotes,many=True)
    return Response(PersonalDiarySerializer.data)

@api_view(['GET'])
def getSingleDiaryNote(request,pk):
    singleDiaryNote=PersonalDiaryNotes.objects.get(id=pk)
    PersonalDiarySerializer=PersonalDiaryNotesSerializers(singleDiaryNote,many=False)
    return Response(PersonalDiarySerializer.data)
from rest_framework import status
@api_view(['PUT'])
def updateSingleDiaryNote(request,pk):
    try:
        singleDiaryNote = PersonalDiaryNotes.objects.get(id=pk)
    except PersonalDiaryNotes.DoesNotExist:
        return Response({"detail": "Diary note not found."}, status=status.HTTP_404_NOT_FOUND)
    data=request.data
    PersonalDiarySerializer=PersonalDiaryNotesSerializers(instance=singleDiaryNote,data=data)
    if  PersonalDiarySerializer.is_valid():
        PersonalDiarySerializer.save()
    return Response(PersonalDiarySerializer.data)


@api_view(['DELETE'])
def deleteDiaryNote(request,pk):
    singleDiaryNote = PersonalDiaryNotes.objects.get(id=pk) 
    singleDiaryNote.delete()
    return Response("Deleted")

@api_view(['POST'])
def createDiaryNote(request):
    data=request.data
    creatingDiaryNote=PersonalDiaryNotes.objects.create(title=data['title'],body=data['body'])
    PersonalDiarySerializer=PersonalDiaryNotesSerializers(creatingDiaryNote,many=False)
    return Response(PersonalDiarySerializer.data)