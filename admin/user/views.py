from distributed.http.utils import redirect
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
# from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser

from admin.user.models import User
from admin.user.serializer import UserSerializer


@api_view(['GET', 'POST'])
@parser_classes([JSONParser])
def join(request):
    if request.method == 'GET':
        print('this is the GET method from user.VIEWS')
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)
        return Response(data=serializer, safe=False)

    elif request.method == 'POST':
        print('this is the POST method from user.VIEWS')
        new_user = request.data['body']
        # new_user=User.objects.create_user()
        print(new_user)
        serializer = UserSerializer(data=new_user['user'])
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'Welcome, {serializer.data.get("user_name")}'}, status=201)
            return Response({'join': 'SUCCESS'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@parser_classes([JSONParser])
def login(request):
    try:
        loginuser = request.data
        dbuser = User.objects.get(user_email=loginuser['user_email'])
        if loginuser['password'] == dbuser.password:
            userSerializer = UserSerializer(dbuser, many=False)
            return Response(data=userSerializer.data, safe=False)
    except:
        return Response({'login': 'FAIL'}),
    return render(request, '/')


@api_view(['PUT'])
@parser_classes([JSONParser])
def modify(request):
    if request.method == 'PUT':
        print('this is the PUT method from user.VIEWS')
        modify_user = request.data
        user = User.objects.get(id=modify_user['user_email'])
        dbuser = User.objects.all().filter(id=modify_user['user_email']).values()[0]
        for i in modify_user:
            dbuser[i] = modify_user[i]
        serializer = UserSerializer(data=dbuser)
        if serializer.is_valid():
            serializer.update(user, dbuser)
        return Response({'modify': 'SUCCESS'})


@api_view(['DELETE'])
@parser_classes([JSONParser])
def unregister(request):
    if request.method == 'DELETE':
        del_user = request.data
        dbuser = User.objects.get(user_email=del_user['user_email'])
        if del_user['user_email'] == dbuser.user_email:
            dbuser.delete()
            return Response({'unregister': 'SUCCESS'})
        else:
            return Response({'unregister': 'FAIL'})

    # except:
    #     return JsonResponse({'user': 'WHO??'})

# @api_view(['GET'])
# def find(request, user_email, user_phone):
#     try:
#         finduser = request.data
#         dbuser = User.objects.all().filter(user_email=finduser['user_email']).values()[0]
#         return JsonResponse(data=dbuser, safe=False)
#     except:
#         return JsonResponse({'find': 'FAIL'})


# @api_view(['GET'])
# def check(request, user_email):
#     try:
#         if user_email is not None:
#             joinuseremail = request.data
#             checkif = User.objects.all().filter(user_email=joinuseremail['user_email']).values()[0]
#             if joinuseremail['user_email'] == checkif['user_email']:
#                 return JsonResponse({'check': 'User Email already in use.'})
#     except:
#         return JsonResponse({'check': 'Email usable.'})
