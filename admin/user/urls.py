from django.contrib import admin
from django.urls import path, include

from admin.user import views

urlpatterns = [
    path(r'join', views.join),
    path(r'login', views.login),
    path(r'modify', views.modify),
    path(r'unregister', views.unregister),
]