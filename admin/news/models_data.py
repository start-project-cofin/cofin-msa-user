import csv

import requests
from bs4 import BeautifulSoup
import time


print("F5 = 최신 뉴스 크롤링")
print()
search_word = '코로나', '백신', '확진', '접종'
url = f"https://m.search.naver.com/search.naver?where=m_news&sm=mtb_jum&query={search_word}"
response = requests.get(url).text
soup = BeautifulSoup(response, 'html.parser')
articles = soup.select(".news_wrap")
article_list=[]
for article in articles:
    temp=[]
    links = article.select(".news_tit")  # class: news_tit
    for link in links:
        title = link.text
        url = link.attrs['href']
        # print(title, url)
    pubs = article.select(".info_group") # class: info_group
    print(type(pubs))
    for pub in pubs:
        pub_date = pub.text
        # print(pub_name)
    # print(link.title,pub.pub_name,link.url)
    print(title,url,pub_date)
    temp.append(title)
    temp.append(url)
    temp.append(pub_date)
    article_list.append(temp)
    print('article_list info added')

    with open('./data/news_scraping.csv','w',newline='') as f:
        writer = csv.writer(f)
        for i in article_list:
            writer.writerow(i)
        f.close()