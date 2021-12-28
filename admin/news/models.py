from django.db import models


class News(models.Model):
    use_in_migration = True
    news_id = models.AutoField(primary_key=True)
    news_title = models.TextField()
    news_pub_date = models.DateTimeField()
    news_link = models.TextField()

    # news_tag = models.CharField()
    # news_publisher = models.CharField()
    # no more news_type, news_  tag as scraping is based on keyword search
    # no more news_publisher as it is irrelevant based on search condition

    class Meta:
        db_table = 'news'

    def __str__(self):
        return f'{self.pk}'
