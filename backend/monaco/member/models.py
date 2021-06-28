from django.db import models


class Member(models.Model):
    username = models.CharField(max_length=10)
    password = models.CharField(max_length=10)
    name = models.CharField(max_length=12)
    email = models.TextField()

    class Meta:
        managed = True  #이 명령어가 DB관리를 장고가 할 지 내가 할지임 이걸 넣어야 장고가 관리함
        db_table = 'members'
    