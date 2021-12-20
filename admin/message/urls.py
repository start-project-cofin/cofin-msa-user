from django.urls import path
from admin.message import views

urlpatterns = {
    path(r'message', views.message)
}