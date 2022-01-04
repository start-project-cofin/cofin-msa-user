import csv
import pandas as pd

from admin.medpoint.models import Medpoint


def xls_to_csv():
    test_file = pd.read_excel('./data/선별진료소_20211227124619.xls')
    # print(test_file)
    # print(test_file.shape)
    test_file.to_csv("./data/medptlist.csv")

def upload_medpt(self):
    with open(self.csvfile, newline='', encoding='utf8') as f:
        data_reader = csv.DictReader(f)
        for row in data_reader:
            medpt = Medpoint.objects.all().values()[0]
            print('medpt data upload DONE')

#
# docker cp ~/<csv-file-name>.csv <container-id>:/
# # 도커에 csv파일을 업로드하는 커맨드 템플릿
#
# docker cp C:\Users\USER\Documents\GitHub\cofin-msa-user\backend\admin\medpoint\data\medptlist.csv 9fed450e5e25:/
# # 도커 컨테이너에 업로드함
#
# MariaDB [cofin]> LOAD DATA LOCAL INFILE '/medptlist.csv' INTO TABLE medpoint FIELDS TERMINATED BY ','
# LINES TERMINATED BY '\n';
# 코핀 db의 medpoint(선별진료소) 테이블에 csv파일을 로드함
# fields terminated by = 컬럼 구분
# lines terminated by = 라인 구분

if __name__ == '__main__':
    xls_to_csv()
    upload_medpt()
