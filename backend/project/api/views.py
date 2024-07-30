from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import status
from .models import Projects
from .serializers import ProjectsSerializer


# Create your views here.
def Home(request):
    return render(request, "index.html")


@api_view(["GET"])
def getProjects(request):
    data = ProjectsSerializer(Projects.objects.all(), many=True)
    return Response(data.data)


@api_view(["GET"])
def getProject(request, id):
    project = Projects.objects.get(id=id)
    data = ProjectsSerializer(project)
    return Response(data.data)


@api_view(["POST", "GET"])
def createProject(request):
    if request.method == "POST":
        data = ProjectsSerializer(data=request.data)
        if data.is_valid():
            data.save()
            return Response(data.data, status=201)
        return Response(data.errors, status=400)
    else:
        data = ProjectsSerializer(Projects.objects.all(), many=True)
        return Response(data.data)


@api_view(["GET", "PUT"])
def UpdateProject(request, id):
    try:
        note =Projects.objects.get(id = id)
    except Projects.DoesNotExis:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "PUT":
        data = ProjectsSerializer(note, data=request.data)
        if data.is_valid():
            data.save()
            return Response(data.data)
        return Response(data.errors, status=400)
    else:
        data = ProjectsSerializer(Projects.objects.get(id=id))
        return Response(data.data)
@api_view(['GET','DELETE'])
def deleteProject(request , id):
    try:
        note = Projects.objects.get(id = id)
    except Projects.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'DELETE':
        note.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        data = ProjectsSerializer(Projects.objects.get(id=id))
        return Response(data.data)
