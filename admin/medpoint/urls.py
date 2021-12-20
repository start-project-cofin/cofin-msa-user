from django.urls import path
from admin.medpoint import views

urlpatterns = [
    path(r'medpoint', views.medpt),
    # (http://localhost:3000/medpts)
]