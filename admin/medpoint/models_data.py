import requests
import os
import csv
import sys
from admin.common.models import ValueObject, Reader, Printer
import pandas as pd
import json
import icecream as ic
from admin.medpoint.models import Medpoint


class DataUpload:
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = './data/'
        vo.fname = 'medpt20211220.csv'
        self.csvfile = reader.new_file(vo)

    def update_medpt(self):
        with open(self.csvfile, newline='', encoding='utf8') as f:
            data_reader = csv.DictReader(f)
            for row in data_reader:
                ic(row)
                m = Medpoint()
                medpt = Medpoint.objects.all().values()[0]

# 국민재난안전포털 - 코로나19 선별진료소 : https://www.safekorea.go.kr/idsiSFK/neo/sfk/cs/sfc/emd/covid19ClnicCenter.html?menuSeq=822
# def medpoint_location():
#     url=""
#     res = requests.get(url)
#     soup = BeautifulSoup(res.content, 'html.parser')
#     locas = soup.find_all('')
