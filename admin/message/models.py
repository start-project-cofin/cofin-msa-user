from django.core.validators import MinValueValidator
from django.db import models


class Message(models.Model):
    use_in_migration = True
    msg_id = models.IntegerField(primary_key=True)
    msg_date = models.TextField()
    msg_time = models.TextField()
    location_id = models.TextField()
    location_name = models.TextField()
    msg_content = models.TextField()

    class Meta:
        db_table = 'message'

    def __str__(self):
        return f'{self.pk}'


