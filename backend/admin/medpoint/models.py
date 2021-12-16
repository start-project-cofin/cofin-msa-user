from django.db import models


class Medpoint(models.Model):
    use_in_migration = True
    medpt_id = models.AutoField(primary_key=True)
    medpt_name = models.TextField()
    location_city = models.TextField()
    location_district = models.TextField()
    medpt_address = models.TextField()
    medpt_phone = models.IntegerField()
    medpt_hr_week = models.TimeField()
    medpt_hr_sat = models.TimeField()
    medpt_hr_hol = models.TimeField()
    medpt_bogunso = models.TextField()
    medpt_bogunso_ph = models.IntegerField()
    medpt_notes = models.TextField()

    class Meta:
        db_table = 'medpoint'

    def __str__(self):
        return f'[{self.pk}]'
