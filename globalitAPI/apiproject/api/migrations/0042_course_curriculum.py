# Generated by Django 4.0.3 on 2022-04-28 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0041_course_draft_curriculum_draft_facultet_draft_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='curriculum',
            field=models.ManyToManyField(to='api.curriculum'),
        ),
    ]
