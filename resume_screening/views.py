from django.shortcuts import render
from django.http import JsonResponse
def home(request):
    return render(request,'home.html')

def response_(request):
    return JsonResponse({
        'name':'sajan srhesta',
        'age':'30'
    })