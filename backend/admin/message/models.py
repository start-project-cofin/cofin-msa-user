# Python 샘플 코드 #
# encokey: Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D
# decokey: Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==

# link template
# http://apis.data.go.kr/6410000/GOA/GOA001?ServiceKey=서비스키&type=json&numOfRows=10&pageNo=1
# http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=1&numOfRows=50&flag=Y

from django.db import models
import csv
import requests
import os
from bs4 import BeautifulSoup
from urllib.request import urlopen
import pandas as pd
from time import sleep


class Message(models.Model):
    use_in_migration = True
    msg_id = models.AutoField()
    msg_type = models.BooleanField()  # considering deletion bc may categorize during xml scraping; COVID related = Y(1), else = N(0)
    msg_city = models.TextField()
    msg_district = models.TextField()
    msg_date = models.DateField()
    msg_time = models.TimeField()

    class Meta:
        db_table = 'message'

    def __str__(self):
        return f'[{self.pk}]'


def scrape_msg():
    print("재난 문자 스크래핑")
    url = "http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=1&numOfRows=50&flag=Y"
    # url = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List'
    # params = {
    #     # 'serviceKey': 'Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D',
    #     'serviceKey': 'Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==',
    #     'pageNo': '1',
    #     'numOfRows': '10',
    #     'type': 'xml',
    #     'create_date': '2021/12/13 00:00:00',
    #     'location_name': '서울특별시'}
    # response = requests.get(url, params=params)
    # print(type(response.text))

    res = requests.get(url)
    res.raise_for_status()
    soup = BeautifulSoup(res.text, "lxml")
    msg_list = soup.find("DisasterMsg2", attrs={"row"})
    for index, msg in enumerate(msg_list):
        date = msg.find("create_date").get_text()
        location_id = msg.find("location_id").get_text()
        location_name = msg.find("location_name").get_text()
        msg_id = msg.find("md101_sn").get_text()
        msg_ = msg.find("msg").get_text()
        print("{}. {} - {} - {} - {} : {}".format(index + 1, msg_id, date, location_id, location_name, msg_))


# pageNO = [x for x in range(1, 99)]
# df = pd.DataFrame(columns=['create_date', 'location_id', 'location_name', 'md101_sn', 'msg'])
# # xml tag: 발신날짜, 지역id, 지역명, 문자idx, 문자내용
# k = 0
# for i in range(len(pageNO)):
#     # URL = 'http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=인증키&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
#     URL = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
#     if i != 0:
#         sleep(200)
#     data = urlopen(URL).read()
#     soup = BeautifulSoup(data, "html.parser")
#
#     for item in soup.findAll("row"):
#         df.loc[k] = [item.create_date.text, item.location_id.text, item.location_name.text, item.md101_sn.text, item.msg.text]
#         k = k + 1
# df.to_csv('./data/재난문자.csv', encoding='utf-8-sig')

# f = open('./data/재난문자.csv', 'r', encoding='utf-8-sig')
# f = pd.read_csv('./data/재난문자.csv', 'r', encoding='utf-8-sig')
# list_ = []
# count = 0
# # with open('./data/재난문자.csv', 'r', encoding='utf-8-sig') as f:
# for line in csv.reader(f):
#     # a = line[3].replace(' ','',1) # 지역명 분리
#     # a = a.split('',1)
#     b = line[5].replace('[','',1)  # 문자내용 중 담당구청 이름 분리
#     b = b.split(']',1)
#     # list_.append([line[0],line[1],line[2],a[0],a[-1],b[0],b[-1]])
#     list_.append([line[0],line[1],line[2],b[0],b[-1]])
#
# ft = open('./data/재난문자_split.csv', 'w', newline='')
# wr = csv.writer(ft)
# wr.writerows(list_)
# f.close()
if __name__ == '__main__':
    scrape_msg()
