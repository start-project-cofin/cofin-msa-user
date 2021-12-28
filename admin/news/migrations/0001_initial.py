# Generated by Django 4.0 on 2021-12-28 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('news_id', models.AutoField(primary_key=True, serialize=False)),
                ('news_title', models.TextField()),
                ('news_pub_date', models.DateTimeField()),
                ('news_link', models.TextField()),
            ],
            options={
                'db_table': 'news',
            },
        ),
    ]
