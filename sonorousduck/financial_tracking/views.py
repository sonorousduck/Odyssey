from django.shortcuts import render


# Create your views here.



def index(request):
    return render(request, 'financial_tracking/index.html')

