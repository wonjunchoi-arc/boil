from django.db import models

class Post(models.Model):
    # sequence =models.AutoField(primary_key=)
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    updated_at =models.DateTimeField(auto_now=True)

    class Meta:
        managed = True  #이 명령어가 DB관리를 장고가 할 지 내가 할지임 이걸 넣어야 장고가 관리함
        db_table = 'posts'

    def __str__(self):
        return f'[{self.pk}] is username = {self.username},' \
               f'[{self.pk}] is password = {self.password},' \
               f'[{self.pk}] is name = {self.name},' \
               f'[{self.pk}] is email = {self.email},'\
