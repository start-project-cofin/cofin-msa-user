# link template
# http://apis.data.go.kr/6410000/GOA/GOA001?ServiceKey=서비스키&type=json&numOfRows=10&pageNo=1
import time
import pandas as pd
import requests
from bs4 import BeautifulSoup
import mysql.connector


def scraping():
    total_time = 0
    start = time.time()
    print("재난 문자 스크래핑 - 호출 간격 최소 180초")
    # 목표 - 단순 스크래핑 to 원하는 항목 태그를 바로 페이지에 뜨게
    url = 'http://apis.data.go.kr/1741000/DisasterMsg4/getDisasterMsg2List'
    # params ={'serviceKey' : 'Rog5S57JKcIX%2FK02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX%2B4Oni0WrIcjWyMP8%2BpdkOG1KBd9Raotw%3D%3D',
    #          'pageNo' : '1', 'numOfRows' : '10', 'type' : 'xml' }  # encoding key for DM3
    params = {
        'serviceKey': 'Rog5S57JKcIX/K02W09COr4YirNy8fdW6sttZQk3KF0VZqjBVcyENX+4Oni0WrIcjWyMP8+pdkOG1KBd9Raotw==',
        'pageNo': '1', 'numOfRows': '20', 'type': 'xml'}  # decoding key for DM3
    response = requests.get(url, params=params).content
    # print(response.content)
    # print(type(response.content))
    # print(response.text)
    soup = BeautifulSoup(response, "lxml")
    msgs = soup.select("row")
    print("adding to soup")
    for msg in msgs:
        msg_date = msg.find("create_date").get_text().split()[0]
        msg_time = msg.find("create_date").get_text().split()[-1]
        # print("date: ",msg_date, "time: ",msg_time)
        # split create_date into date AND time
        location_id = msg.find("location_id").get_text()
        location_name = msg.find("location_name").get_text()
        msg_id = msg.find("md101_sn").get_text()  # 일련번호가 필요할까?
        msg_content = msg.find("msg").get_text()
        # send_platform = rows.find("send_platform").get_text() # irrelevant
        # print(msg_date, msg_time, location_id, location_name, msg_id, msg_content)
        print("발신 시간: ", msg_date, msg_time, " | 수신지역: ", location_id, location_name, " | 문자내용: ", msg_content)

    end = time.time()
    total_time += end - start
    print()
    print("로딩타임 : ", total_time)


#
# # no saving, 그냥 present
#
# def msg_table():
#     messageDB = mysql.connector.connect(
#         host="127.0.0.1",
#         database="cofin",
#         user="root",
#         password="root",
#         # table="message"
#     )
#     cur = messageDB.cursor()
#     cur.execute("select * from message where idx in ()")
#     result = cur.fetchall()
#     for x in result:
#         print(x)
#
#     sql = "INSERT INTO table (msg_date, msg_time,location_id,location_name,msg_content) values (%s,%s,%s,%s,%s)"


if __name__ == '__main__':
    scraping()
    # msg_table()
