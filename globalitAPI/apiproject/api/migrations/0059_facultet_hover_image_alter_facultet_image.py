# Generated by Django 4.0.3 on 2022-05-05 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0058_websitetype_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='facultet',
            name='hover_image',
            field=models.FileField(blank=True, upload_to='images/facultet/hover-images/'),
        ),
        migrations.AlterField(
            model_name='facultet',
            name='image',
            field=models.FileField(blank=True, upload_to='images/facultet/images/'),
        ),
    ]
