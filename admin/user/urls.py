from django.urls import path
from admin.user import views

urlpatterns = {
    path(r'user', views.user),
    path(r'login', views.login),
    path(r'find', views.find),
    path(r'check', views.check),
}