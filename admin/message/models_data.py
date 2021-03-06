# link template
# http://apis.data.go.kr/6410000/GOA/GOA001?ServiceKey=서비스키&type=json&numOfRows=10&pageNo=1

import csv
import time
import requests
from bs4 import BeautifulSoup


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
    msg_list = []
    # print("================")
    for msg in msgs:
        temp = []
        msg_id = msg.find("md101_sn").get_text()  # 일련번호를 인덱스값으로?
        msg_date = msg.find("create_date").get_text().split()[0]
        msg_time = msg.find("create_date").get_text().split()[-1]
        # print("date: ",msg_date, "time: ",msg_time)
        # split create_date into date AND time
        location_id = msg.find("location_id").get_text()
        location_name = msg.find("location_name").get_text()
        msg_content = msg.find("msg").get_text().replace(",", ".")
        # 테이블 import할시 fields terminated by ','에 문자내용이 걸려서 짤리지 않게 쉼표로 바꿈.
        # send_platform = rows.find("send_platform").get_text() # irrelevant
        # print(msg_date, msg_time, location_id, location_name, msg_id, msg_content)
        print("일련번호: ", msg_id, " | 발신 시간: ", msg_date, msg_time, " | 수신지역: ", location_id, location_name, " | 문자내용: ",
              msg_content)
        temp.append(msg_id)
        temp.append(msg_date)
        temp.append(msg_time)
        temp.append(location_id)
        temp.append(location_name)
        temp.append(msg_content)
        msg_list.append(temp)
        print("================")

    with open('./data/msg_scraping.csv', 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.writer(f)
        # writer.writerow(["msg_id","msg_date","msg_time","location_id","location_name","msg_content"])
        # 윗줄 같이 실행하면 csv를 마리아 테이블에 import한후 "delete from message where msg_id=0;" 를 매번 해야함;
        for i in msg_list:
            writer.writerow(i)
        f.close()

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
