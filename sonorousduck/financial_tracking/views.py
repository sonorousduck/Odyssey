from django.shortcuts import render
from .models import Expenses, Income
import json
from django.http import JsonResponse, HttpResponseRedirect, HttpResponse
from datetime import datetime
from django.urls import reverse
from django.utils import timezone

# Create your views here.



def index(request):
    return render(request, 'financial_tracking/index.html')


# Right now only returns Expenses. Need to work on this
def data(request):

    allData = Expenses.objects.all()
    JSONobj = []


    # Create the JSON object

    for obj in allData:
        JSONobj.append({'description': obj.description, 'price': obj.price, 'date': obj.date})


    response = JsonResponse(JSONobj, safe=False)
    response['Access-Control-Allow-Origin'] = '*'

    return response

def addTransaction(request):

    try: 
        print(request.POST['description'])
        print(request.POST['price'])
        print(timezone.now())


        print("We were at least this successful")

        transaction = Expenses(description=request.POST['description'], price=request.POST['price'], date=timezone.now())
        transaction.save()



    except KeyError:
        return render(request, {'error_message': 'Incorrect Usage'})

    return HttpResponseRedirect(reverse('main:index'))





