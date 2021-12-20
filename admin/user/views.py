from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from admin.user.models import User
from admin.user.serializer import UserSerializer


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@parser_classes([JSONParser])
def user(request):
    try:
        if request.method == 'GET':
            print('this is the GET method from user.VIEWS')
            all_users = User.objects.all()
            serializer = UserSerializer(all_users, many=True)
            return JsonResponse(data=serializer, safe=False)
        elif request.method == 'POST':
            print('this is the POST method from user.VIEWS')
            new_user = request.data['body']
            print(new_user)
            serializer = UserSerializer(data=new_user['user'])
            if serializer.is_valid():
                serializer.save()
                # return JsonResponse({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
                return JsonResponse({'join': 'SUCCESS'})
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'PUT':
            print('this is the PUT method from user.VIEWS')
            modifyemail = request.data
            user = User.objects.get(id=modifyemail['id'])
            dbuser = User.objects.all().filter(id=modifyemail['id']).values()[0]
            for i in modifyemail:
                dbuser[i] = modifyemail[i]
            serializer = UserSerializer(data=dbuser)
            if serializer.is_valid():
                serializer.update(user, dbuser)
            return JsonResponse({'modify': 'SUCCESS'})
        elif request.method == 'DELETE':
            deluser = request.data
            dbuser = User.objects.get(user_email=deluser['user_email'])
            if deluser['user_email'] == dbuser.user_email:
                dbuser.delete()
                return JsonResponse({'unregister': 'SUCCESS'})
            else:
                return JsonResponse({'unregister': 'FAIL'})
    except:
        return JsonResponse({'user': 'WHO??'})


@api_view(['POST'])
@parser_classes([JSONParser])
def login(request):
    try:
        loginuser = request.data
        dbuser = User.objects.get(user_email=loginuser['user_email'])
        if loginuser['password'] == dbuser.password:
            userSerializer = UserSerializer(dbuser, many=False)
            return JsonResponse(data=userSerializer.data, safe=False)
    except:
        return JsonResponse({'login': 'FAIL'})


@api_view(['GET'])
def find(request):
    try:
        finduser = request.data
        dbuser = User.objects.all().filter(user_email=finduser['user_email']).values()[0]
        return JsonResponse(data=dbuser, safe=False)
    except:
        return JsonResponse({'find': 'FAIL'})


@api_view(['GET'])
def check(request, email):
    try:
        if email is not None:
            joinuseremail = request.data
            checkif = User.objects.all().filter(user_email=joinuseremail['user_email']).values()[0]
            if joinuseremail['user_email'] == checkif['user_email']:
                return JsonResponse({'check': 'User Email already in use.'})
    except:
        return JsonResponse({'check': 'Email usable.'})
