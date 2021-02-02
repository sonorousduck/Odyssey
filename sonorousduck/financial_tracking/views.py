from django.shortcuts import render
from .models import Expenses, Income
import json
from django.http import JsonResponse

# Create your views here.



def index(request):
    return render(request, 'financial_tracking/index.html')


# Right now only returns Expenses. Need to work on this
def data(request):

    allData = Expenses.objects.all()
    JSONobj = []


    # Create the JSON object

    for obj in allData:
        JSONobj.append({'description': obj.description, 'date': obj.date})


    response = JsonResponse(JSONobj, safe=False)
    response['Access-Control-Allow-Origin'] = '*'

    return response
