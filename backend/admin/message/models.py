# Python 샘플 코드 #
# encokey: Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D
# decokey: Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==

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
    'create_date': '2021/11/19 00:00:00',
    'location_name': '서울특별시'}

# url = url + params
# result = requests.get(url)

response = requests.get(url, params=params)
print(response.content)

# http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=1&numOfRows=50&flag=Y

pageNO = [x for x in range(1, 88)]
df = pd.DataFrame(columns=['create_date', 'location_name', 'msg'])
k = 0
for i in range(len(pageNO)):
    # URL = 'http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=인증키&type=xml&pageNo=' + str(
    # pageNO[i]) + '&numOfRows=50&flag=Y'
    URL = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX' \
          '%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=' + \
          str(pageNO[i]) + '&numOfRows=50&flag=Y'
    if i != 0:
        sleep(300)
    data = urlopen(URL).read()
    soup = BeautifulSoup(data, "html.parser")

    for item in soup.findAll("row"):
        df.loc[k] = [item.create_date.text, item.location_name.text, item.msg.text]
        k = k + 1
df.to_csv('./행정안전부_재난문자방송 발령현황(지역별).csv', encoding='utf-8-sig')
