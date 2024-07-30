from django.db import models
import random
# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=100)
    def __str__(self):
        return self.title
class Projects(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    github_url = models.URLField()
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    def __str__(self):
        return self.title