from django.db import models


class User_Vaccine(models.Model):
    use_in_migrations = True
    vaccine_type = models.CharField(primary_key=True, max_length=30)
    innoculation_date = models.DateField()
    vaccine_side_effect = models.TextField()

    # undercond_id = models.IntegerField()  # usage?

    class Meta:
        db_table = 'user_vaccine'

    def __str__(self):
        return f'{self.pk}'


class User(models.Model):
    use_in_migrations = True
    user_email = models.EmailField(primary_key=True)
    username = models.CharField(max_length=12)
    password = models.CharField(max_length=12)
    user_name = models.TextField()
    user_birthday = models.DateField()
    user_sex = models.CharField(max_length=6)
    user_phone = models.CharField(max_length=11)
    user_address = models.CharField(max_length=255)
    user_vaccinated = models.CharField(max_length=5)
    vaccine_type = models.CharField(max_length=30)

    class Meta:
        db_table = "user"

    def __str__(self):
        return f'{self.pk}'


# User_Lost table init consist of FKs only => no separate table
# Unregister table init consist of FKs only => no separate table
