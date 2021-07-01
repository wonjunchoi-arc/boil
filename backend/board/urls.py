from django.conf.urls import url
from .views import Board as board

urlpatterns =[
    url('/Info', board.as_view())  ## 여기서 as는 alias이다.   저거는 맴버스의 뷰를 찾아가라 이런의미이다.
]