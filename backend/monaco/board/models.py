from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()

    created_at = models.DateTimeField()

    class Meta:
        managed = True  #이 명령어가 DB관리를 장고가 할 지 내가 할지임 이걸 넣어야 장고가 관리함
        db_table = 'posts'