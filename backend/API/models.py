from django.db import models

# Create your models here.
class Photos(models.Model):
    id=models.IntegerField(auto_created=True,primary_key=True)
    title=models.CharField(max_length=1000,default="")
    path=models.CharField(max_length=1000)

    def __str__(self):
        return self.title