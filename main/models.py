from django.db import models

# Create your models here.


class RecentProjects(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=150)
    skills = models.JSONField()

    github_available = models.BooleanField(default=True)

    project_url = models.CharField(max_length=120)
    github_url = models.CharField(max_length=120)

    def __str__(self):
        return self.title
