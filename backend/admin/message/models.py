# Python 샘플 코드 #
# encokey: Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D
# decokey: Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==
import csv
import requests
import os
from bs4 import BeautifulSoup
from urllib.request import urlopen
import pandas as pd
from time import sleep

url = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List'
params = {
    # 'serviceKey': 'Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D',  웹페 작동하는데?
    'serviceKey': 'Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==',
    'pageNo': '1',
    'numOfRows': '10',
    'type': 'xml',
    'create_date': '2021/12/06 00:00:00',
    'location_name': '서울특별시'}

# url = url + params
# result = requests.get(url)

response = requests.get(url, params=params)
# print(response.content)
# print(response.text)
print(type(response.text))

# link template
# http://apis.data.go.kr/6410000/GOA/GOA001?ServiceKey=서비스키&type=json&numOfRows=10&pageNo=1
# http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=1&numOfRows=50&flag=Y

pageNO = [x for x in range(1, 99)]
df = pd.DataFrame(columns=['create_date', 'location_id', 'location_name', 'md101_sn', 'msg'])
# xml tag: 발신날짜, 지역id, 지역명, 문자idx, 문자내용
k = 0
for i in range(len(pageNO)):
    # URL = 'http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=인증키&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
    URL = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
    if i != 0:
        sleep(300)
    data = urlopen(URL).read()
    soup = BeautifulSoup(data, "html.parser")

    for item in soup.findAll("row"):
        df.loc[k] = [item.create_date.text, item.location_id.text, item.location_name.text, item.md101_sn, item.msg.text]
        k = k + 1
df.to_csv('./data/재난문자.csv', encoding='utf-8-sig')

# f = open('./data/재난문자.csv', 'r')
# list_ = []
# count = 0
# for line in csv.reader(f):
#     a = line[3].split(' ',1) # 지역명 분리
#     b = line[5].replace('[','',1)  # 문자내용 중 담당구청 이름 분리
#     b = b.split(']',1)
#     list_.append([line[0],line[1],line[2],a[0],a[-1],b[0],b[-1]])
#
# ft = open('./data/재난문자_split.csv', 'w', newline='')
# wr = csv.writer(ft)
# wr.writerows(list_)
# f.close()
