from django.db import models
from chart.models import Chart

# Create your models here.
class Note(models.Model):
	chart 	  = models.ForeignKey(Chart, on_delete=models.CASCADE)
	note_text = models.CharField(max_length=550)