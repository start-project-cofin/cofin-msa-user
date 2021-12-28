from django.contrib import admin
from django.urls import path, include
from admin.common.views import Connection

urlpatterns=[
    path('admin/', admin.site.urls)
]