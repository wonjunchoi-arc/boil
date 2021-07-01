from django.conf.urls import url
from .views import Members as members
from .views import Member as member

urlpatterns = [
    url('signup', members.as_view()), ## 여기서 as는 alias이다.   저거는 맴버스의 뷰를 찾아가라 이런의미이다.
    url('login', member.as_view())
]