# 국민재난안전포털 - 코로나19 선별진료소 : https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/sfc/emd/covid19ClnicCenter.html?menuSeq=822
from django.db import models
import requests
import os
from bs4 import BeautifulSoup
from urllib.request import urlopen
import pandas as pd
from time import sleep

class Medpoint(models.Model):
    use_in_migration = True
    medpt_id = models.AutoField()
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
        db_table = 'medpt'

    def __str__(self):
        return f'[{self.pk}]'
#
# # pageNO = [x for x in range(1, 64)]
# # df = pd.DataFrame(columns=['create_date', 'location_id', 'location_name', 'md101_sn', 'msg'])
# # # xml tag: 발신날짜, 지역id, 지역명, 문자idx, 문자내용
# # k = 0
# # for i in range(len(pageNO)):
# #     # URL = 'http://apis.data.go.kr/1741000/DisasterMsg2/getDisasterMsgList?ServiceKey=인증키&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
# #     URL = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List?ServiceKey=Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D&type=xml&pageNo=' + str(pageNO[i]) + '&numOfRows=50&flag=Y'
# #     if i != 0:
# #         sleep(300)
# #     data = urlopen(URL).read()
# #     soup = BeautifulSoup(data, "html.parser")
# #
# #     for item in soup.findAll("row"):
# #         df.loc[k] = [item.create_date.text, item.location_id.text, item.location_name.text, item.md101_sn.text, item.msg.text]
# #         k = k + 1
# # df.to_csv('./data/재난문자.csv', encoding='utf-8-sig')
#
# def medpoint_location():
#     url=""
#     res = requests.get(url)x
#     soup = BeautifulSoup(res.content, 'html.parser')
#     locas = soup.find_all('')