from member import views
from django.conf.urls import url
from django.urls import path

urlpatterns = [
    url(r'^register', views.members),
    url(r'^list', views.members),
    url(r'^login', views.login), #정규표현식 login으로 시작하는
    path('delete/<slug:pk>',views.member),
    url(r'^modify', views.member_modify),

]

'''
CBV 방식 (Class Based View)
from django.conf.urls import url
from .views import Members as members
from .views import Member as member
from django.urls import path, include
urlpatterns = [
    url('/register', members.as_view()),
    path('/<int:pk>/', member.as_view()),
'''