from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from admin.message.models import Message
from admin.message.serializer import MsgSerializer


@api_view(['GET', 'POST'])
@parser_classes([JSONParser])
def message(request):
    try:
        if request.method == 'GET':
            print('this is the GET method from message.VIEWS')
            all_users = Message.objects.all()
            serializer = MsgSerializer(all_users, many=True)
            return JsonResponse(data=serializer, safe=False)
        elif request.method == 'POST':
            print('this is the POST method from message.VIEWS')
            new_msg = request.data['body']
            print(new_msg)
            serializer = MsgSerializer(data=new_msg['message'])
            if serializer.is_valid():
                serializer.save()
                return JsonResponse({'update': 'SUCCESS'})
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except:
        return JsonResponse({'message': 'WHat??'})

