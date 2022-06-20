# Generated by Django 4.0.3 on 2022-04-28 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0037_course_average_salary'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='average_salary_description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='course',
            name='salary_diagram',
            field=models.FileField(blank=True, upload_to='images/course/salary_diagrams'),
        ),
    ]