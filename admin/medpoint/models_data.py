import csv
import pandas as pd

from admin.common.models import ValueObject, Reader, Printer
from admin.medpoint.models import Medpoint


def xls_to_csv():
    test_file = pd.read_excel('./data/선별진료소_20211227124619.xls')
    # print(test_file)
    # print(test_file.shape)
    test_file.to_csv("./data/medptlist.csv")


# def rename_col():
#     f = open('./data/medptlist.csv', ) 포기


# def __init__(self):
#     vo = ValueObject()
#     reader = Reader()
#     vo.context = './data/'
#     vo.fname = 'medptlist.csv'
#     self.csvfile = reader.new_file(vo)
#
#
# def upload_medpt(self):
#     with open(self.csvfile, newline='', encoding='utf8') as f:
#         data_reader = csv.DictReader(f)
#         for row in data_reader:
#             medpt = Medpoint.objects.all().values()[0]
#             print('medpt data upload DONE')

# docker cp ~/<csv-file-name>.csv <container-id>:/
# docker cp C:\Users\USER\Documents\GitHub\cofin-msa-user\backend\admin\medpoint\data\medptlist.csv 9fed450e5e25:/
# MariaDB [cofin]> LOAD DATA LOCAL INFILE '/medptlist.csv' INTO TABLE medpoint FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n';

if __name__ == '__main__':
    xls_to_csv()
    # upload_medpt()
