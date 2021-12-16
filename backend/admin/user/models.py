from django.db import models


class Vaccine_Info(models.Model):
    use_in_migrations = True


class User_Vaccine(models.Model):
    use_in_migrations = True
    vaccine_type = models.TextField(primary_key=True)
    innoculation_date = models.DateField()
    vaccine_side_effect = models.TextField()
    undercond_id = models.IntegerField()  # usage?

    class Meta:
        db_table = 'user_vaccine'

    def __str__(self):
        return f'{self.pk}'


class User(models.Model):
    use_in_migrations = True
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=12)
    user_password = models.CharField(max_length=12)
    user_name = models.TextField()
    user_birthday = models.DateField()
    user_sex = models.BooleanField()
    user_phone = models.TextField(max_length=11)
    user_email = models.EmailField()
    user_address = models.TextField()
    user_vaccinated = models.BooleanField()
    vaccine_type = models.TextField(max_length=30)

    class Meta:
        db_table = 'user'

    def __str__(self):
        return f'{self.pk}'

# kill User_Vaccine?

# User_Lost table init consist of FKs only => no separate table
# Unregister table init consist of FKs only => no separate table
