# Generated by Django 4.0.3 on 2022-05-03 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0050_websitetype_remove_service_dd_service_website_types'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegisterToCourse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=20)),
                ('surname', models.CharField(blank=True, max_length=25)),
                ('phone', models.CharField(blank=True, max_length=50)),
                ('email', models.CharField(blank=True, max_length=50)),
                ('place', models.CharField(blank=True, max_length=50)),
                ('language', models.CharField(blank=True, max_length=15)),
            ],
        ),
    ]
