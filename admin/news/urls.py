from django.urls import path
from admin.news import models

urlpatterns = {
    path(r'news', models.News)
}