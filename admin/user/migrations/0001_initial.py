# Generated by Django 4.0 on 2021-12-28 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_email', models.EmailField(max_length=254, primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=12)),
                ('password', models.CharField(max_length=12)),
                ('user_name', models.TextField()),
                ('user_birthday', models.DateField()),
                ('user_sex', models.CharField(max_length=6)),
                ('user_phone', models.CharField(max_length=11)),
                ('user_address', models.CharField(max_length=255)),
                ('user_vaccinated', models.CharField(max_length=5)),
                ('vaccine_type', models.CharField(max_length=30)),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.CreateModel(
            name='User_Vaccine',
            fields=[
                ('vaccine_type', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('innoculation_date', models.DateField()),
                ('vaccine_side_effect', models.TextField()),
            ],
            options={
                'db_table': 'user_vaccine',
            },
        ),
    ]
