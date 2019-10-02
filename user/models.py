from django.db import models

# Create your models here.
class User(models.Model):
	user        = models.CharField(max_length=30, blank=False)
	password    = models.CharField(max_length=30, blank=False)
	first_name  = models.CharField(max_length=50, blank=False)
	last_name   = models.CharField(max_length=50, blank=False)
	email       = models.EmailField(max_length=70, blank=False)
	document_ID = models.IntegerField(blank=False)
	photo       = models.ImageField(blank=False)