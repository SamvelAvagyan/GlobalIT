# Generated by Django 4.0.3 on 2022-04-28 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0036_alter_trainer_course'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='average_salary',
            field=models.PositiveIntegerField(default=0),
        ),
    ]