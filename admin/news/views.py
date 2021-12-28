# from django.http import JsonResponse
# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.views import APIView
# # Create your views here.
# from rest_framework import status
# from rest_framework.decorators import api_view, parser_classes
# from rest_framework.parsers import JSONParser
#
# from admin.news.models import News
#
#
# @api_view(['GET', 'POST'])
# @parser_classes([JSONParser])
# def news(request):
#     try:
#         if request.method == 'GET':
#             print('this is the GET method from news.VIEWS')
#             all_users = News.objects.all()
#             serializer = NewsSerializer(all_users, many=True)
#             return JsonResponse(data=serializer, safe=False)
#         elif request.method == 'POST':
#             print('this is the POST method from news.VIEWS')
#             new_news = request.data['body']
#             print(new_news)
#             serializer = NewsSerializer(data=new_msg['message'])
#             if serializer.is_valid():
#                 serializer.save()
#                 return JsonResponse({'update': 'SUCCESS'})
#             return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#
#     except:
#         return JsonResponse({'message': 'WHat??'})
from rest_framework.response import Response
from rest_framework.views import APIView


class News(APIView):
    def get(self, request):
        return Response({'News': 'SUCCESS'})
