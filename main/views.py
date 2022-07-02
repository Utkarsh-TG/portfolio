from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

from .models import *


def ignition(request):
    return HttpResponse('Run Successfull!', status='200')


def home(request):
    context = {}

    context["projects"] = list(RecentProjects.objects.values())

    return render(request, 'main/index.html', context)
