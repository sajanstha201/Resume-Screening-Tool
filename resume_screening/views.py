from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
import json
def home(request):
    return render(request,'home.html')

def response_(request):
    return JsonResponse({
        'name':'sajan srhesta',
        'age':'30'
    })
    
def rating_response(request):
    print(request.body)
    data={
        'name':'django',
        'data':'sending the data from djngo to frontend'
    }
    return JsonResponse(data)

def token_response(request):
    return JsonResponse({'token':get_token(request)})