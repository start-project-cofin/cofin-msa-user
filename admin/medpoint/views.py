from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from admin.medpoint.models_data import DataUpload


@api_view(['GET'])
@parser_classes([JSONParser])
def medpt(request):
    DataUpload().insert_data()
    return JsonResponse({'Medpoint data Upload':'SUCCESS'})

