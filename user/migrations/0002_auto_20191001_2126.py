# Generated by Django 2.2.5 on 2019-10-01 21:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='idDocument',
            new_name='id_document',
        ),
    ]