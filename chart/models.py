from django.db import models

# Create your models here.
class Chart(models.Model):
	#author  = models.CharField(max_length=150)
	private = models.BooleanField()

