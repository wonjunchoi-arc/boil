"""monaco URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.urls import path, include
from common.views import Connection
from rest_framework import routers
router = routers.DefaultRouter()

urlpatterns = [
    path('connection', Connection.as_view()),
    url(r'^api/board', include('board.urls')),
    url(r'^api/member/', include('member.urls')), #리엑트 들어오는 값들은 어떤 방법으로 project와 app을 구분해서 들어 오는 것인가.
    url(r'^adm/member/', include('member.urls'))
    # path('election', include('election.urls')),

]
