import csv
import icecream as ic
import pandas as pd

from admin.common.models import ValueObject, Reader, Printer
from admin.medpoint.models import Medpoint


def xls_to_csv():
    test_file = pd.read_excel('./data/선별진료소_20211227124619.xls')
    print(test_file)
    print(test_file.shape)
    test_file.to_csv("./data/선별진료소_20211227124619.csv")

    change_headers = pd.read_csv('./data/선별진료소_20211227124619.csv')
    change_headers.to_csv('./data/medpt20211227.csv')


class DataUpload:
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = './data/'
        vo.fname = 'medpt20211227.csv'
        self.csvfile = reader.new_file(vo)

    def update_medpt(self):
        with open(self.csvfile, newline='', encoding='utf8') as f:
            data_reader = csv.DictReader(f)
            for row in data_reader:
                ic(row)
                m = Medpoint()
                medpt = Medpoint.objects.all().values()[0]


if __name__ == '__main__':
    # xls_to_csv()
    DataUpload
