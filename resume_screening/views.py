from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.http import HttpResponse
from io import BytesIO
import json
from .ml_model.main import rating
def home(request):
    return render(request,'home.html')

def response_(request):
    return JsonResponse({
        'name':'sajan srhesta',
        'age':'30'
    })
    
def rating_response(request):
    data=request.body.decode('utf-8')
    data_dict = json.loads(data)
    job_description=data_dict['job_description']
    resume_detail=data_dict['resume_detail']
    rating_score,csv_score=rating(jb_description=job_description,resume_dict=resume_detail)
    request_format=request.GET.get('format','json')
    if(request_format=='csv'):
        buffer=BytesIO()
        csv_score.to_csv(buffer,index=False)
        buffer.seek(0)
        response=HttpResponse(buffer,content_type='text/csv')
        response['Content-Disposition'] = 'attachment; filename="dataframe.csv"'
        return response
    else:
        return JsonResponse(rating_score)

def token_response(request):
    return JsonResponse({'token':get_token(request)})