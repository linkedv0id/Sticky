# Generated by Django 2.2.5 on 2019-10-01 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_auto_20191001_2126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='id_document',
            new_name='document_ID',
        ),
    ]
