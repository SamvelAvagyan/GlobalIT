# Generated by Django 4.0.4 on 2022-05-30 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0064_course_title_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='curriculum',
            name='description',
            field=models.TextField(max_length=''),
        ),
    ]
