# Generated by Django 4.0.3 on 2022-04-22 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_remove_course_div_small_image_course_div_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='header_image',
            field=models.FileField(blank=True, upload_to='images/course/header-images'),
        ),
    ]
