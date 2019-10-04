from django.db import models
from user.models import User 

# Create your models here.
class Chart(models.Model):
	owner	 = models.ForeignKey(User, on_delete=models.CASCADE, blank=False, null=True)
	privacy	 = models.BooleanField(default=True)
	title	 = models.CharField(max_length=250, blank=False, null=True)
	

