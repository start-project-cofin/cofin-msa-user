# url = "https://news.naver.com/"
# res = requests.get(url)
# res.raise_for_status()
# soup = BeautifulSoup(res.text,"lxml")
# print(soup.title) # title 출력
# print(soup.title.get_text()) # title 내용 출력
# print(soup.a) # 객체에서 처음 발견되는 a element 출력
# print(soup.a.attrs) # a element 속성 정보 출력
# print(soup.a["href"]) # a element href 속성'값' 정보 출력

import pandas as pd
from urllib.request import urlopen
import json
import requests
from bs4 import BeautifulSoup
import datetime

def location_weather():
    url = 'http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=109'
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    locations = soup.find_all('location')
    for location in locations:
        # print(type(response.content))
        # print(response.text)
        # print(location.text)
        print(location.find('city').text, ":", location.find('wf').text)

def create_soup(url):
    headers = {'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36'}
    res = requests.get(url, headers=headers)
    res.raise_for_status()
    soup=BeautifulSoup(res.text, "lxml")
    return soup

def print_news(index,title,link):
    print("{}. {}".format(index + 1, title))
    print(" (링크: {})".format(link))

def scrape_weather():
    print("weather today")
    url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%84%9C%EC%9A%B8+%EB%82%A0%EC%94%A8"
    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    cast = soup.find("div", attrs={"class":"weather_main"}).get_text()
    curr_temp = soup.find("div", attrs={"class":"temperature_text"}).get_text().replace("° ", " °C")
    # min_temp = soup.find("div", attrs={})
    # max_temp = None
    temp_info = soup.find("p", attrs={"class":"summary"}).get_text().replace("° ", " °C")
    rain_prob = soup.find('dl', attrs={"class":"summary_list"}).get_text()

    # print(cast)
    print(curr_temp, cast)
    print(temp_info)
    print(rain_prob)

def scrape_headline_news():
    print("headline news")
    url="https://news.naver.com"
    soup=create_soup(url)
    news_list = soup.find("ul", attrs={"class":"hdline_article_list"}).find_all("li")
    for index, news in enumerate(news_list):
        # title = news.div.a.get_text()
        title = news.find("a").get_text().strip()
        # link = url + news.div.a.href
        link = url + news.find("a")["href"]
        print_news(index,title,link)

def scrape_it_news():
    print("IT news")
    url = "https://news.naver.com/main/list.naver?mode=LSD&mid=sec&sid1=105"
    soup = create_soup(url)
    news_list = soup.find("ul", attrs={"class": "type06_headline"}).find_all("li")
    for index, news in enumerate(news_list):
        a_idx=0
        img = news.find("img")
        if img:
            a_idx = 1 #img tag = use 1st <a> info
        a_tag = news.find_all("a")[a_idx]
        # title = news.div.a.get_text()
        title = a_tag.get_text().strip()
        # link = url + news.div.a.href
        link = a_tag["href"]
        print_news(index, title, link)




if __name__ == '__main__':
    # location_weather()
    # scrape_weather()
    # scrape_headline_news()
    scrape_it_news()
