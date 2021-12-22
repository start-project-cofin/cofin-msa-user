from django.urls import path
from admin.user import views

urlpatterns = {
    path(r'join', views.users),
    path(r'login', views.login),
    path(r'logout', views.logoutButton),
    # path(r'find', views.find),
    # path(r'check', views.check),
}