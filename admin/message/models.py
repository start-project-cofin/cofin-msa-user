from django.db import models


class Message(models.Model):
    use_in_migration = True
    msg_id = models.IntegerField(primary_key=True)
    msg_type = models.BooleanField()  # considering deletion bc may categorize during xml scraping; COVID related = Y(1), else = N(0)
    msg_city = models.TextField()
    msg_district = models.TextField()
    msg_date = models.DateField()
    msg_time = models.TimeField()

    class Meta:
        db_table = 'message'

    def __str__(self):
        return f'{self.pk}'