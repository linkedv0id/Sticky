# Generated by Django 2.2.5 on 2019-10-02 15:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chart', '0002_auto_20191002_1555'),
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note_text', models.CharField(max_length=550)),
                ('chart', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chart.Chart')),
            ],
        ),
    ]