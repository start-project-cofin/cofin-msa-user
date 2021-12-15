from django.db import models
import requests
from bs4 import BeautifulSoup

class News(models.Model):
    use_in_migration = True
    news_id = models.AutoField()
    news_title = models.TextField()
    news_pub_date = models.DateTimeField()
    news_link = models.CharField()
    # news_tag = models.CharField()
    # news_publisher = models.CharField()
    # no more news_type, news_tag as scraping is based on keyword search
    # no more news_publisher as it is irrelevant based on search condition

    class Meta:
        db_table = 'news'

    def __str__(self):
        return f'[{self.pk}]'

def create_soup(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'}
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    return soup


def print_news(index, title, link):
    print("{}. {}".format(index + 1, title))
    print(" (링크: {})".format(link))


def scrape_headline_news():
    print("헤드라인 뉴스")
    url = "https://news.naver.com"
    soup = create_soup(url)
    news_list = soup.find("ul", attrs={"class": "hdline_article_list"}).find_all("li")
    for index, news in enumerate(news_list):
        a_idx = 0
        img = news.find("img")
        if img:
            a_idx = 1  # img tag = use 1st <a> info
        a_tag = news.find_all("a")[a_idx]
        # title = news.div.a.get_text()
        title = a_tag.get_text().strip()
        # link = url + news.div.a.href
        link = a_tag["href"]
        print_news(index, title, link)


if __name__ == '__main__':
    scrape_headline_news()
