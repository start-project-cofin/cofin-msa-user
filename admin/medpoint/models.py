from django.db import models


class Medpoint(models.Model):
    use_in_migration = True
    medpt_id = models.CharField(primary_key=True, max_length=20)

    location_city = models.TextField()
    location_district = models.TextField()
    medpt_name = models.TextField()
    medpt_address = models.TextField()
    medpt_hr_week = models.TextField()
    medpt_hr_sat = models.TextField()
    medpt_hr_hol = models.TextField()
    medpt_phone = models.TextField()
    medpt_bogunso = models.TextField()
    medpt_bogunso_ph = models.TextField()
    medpt_notes = models.TextField()

    class Meta:
        db_table = 'medpoint'

    def __str__(self):
        return f'{self.pk}'
