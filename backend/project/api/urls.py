from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("", views.Home),
    path("projects", views.getProjects),
    path("project/<int:id>", views.getProject),
    path("project/create", views.createProject),
    path("project/update/<int:id>", views.UpdateProject),
    path('project/delete/<int:id>', views.deleteProject)
]