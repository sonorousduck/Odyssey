from django.db import models

# Create your models here.


class Expenses(models.Model):
    description = models.CharField(max_length=200)
    date = models.DateField()

class Income(models.Model):
    description = models.CharField(max_length=200)
    date = models.DateField()




